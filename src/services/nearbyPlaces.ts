import {
  FALLBACK_COORDS,
  LocationCategory,
  MAX_RESULTS,
  SEARCH_RADIUS_METERS,
} from '../data/emergencyLocations';

export type NearbyPlace = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  distanceMeters: number;
  address?: string;
  phone?: string;
};

type OverpassElement = {
  type: string;
  id: number;
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: Record<string, string>;
};

const OVERPASS_ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://lz4.overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
];

function haversineMeters(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

/**
 * Collapse separate node/way/relation lines with the same tag filter into one
 * faster `nwr[...]` statement when possible.
 */
function compactFilters(filters: string[]): string[] {
  const grouped = new Map<string, Set<string>>();
  const passthrough: string[] = [];

  for (const filter of filters) {
    const match = filter.match(/^(node|way|relation)(\[.+\])$/);
    if (!match) {
      passthrough.push(filter);
      continue;
    }
    const [, kind, tags] = match;
    const set = grouped.get(tags) ?? new Set<string>();
    set.add(kind);
    grouped.set(tags, set);
  }

  const compacted: string[] = [];
  for (const [tags, kinds] of grouped) {
    if (kinds.size >= 2) {
      compacted.push(`nwr${tags}`);
    } else {
      const kind = [...kinds][0];
      compacted.push(`${kind}${tags}`);
    }
  }
  return [...compacted, ...passthrough];
}

function buildQuery(
  category: LocationCategory,
  latitude: number,
  longitude: number,
  radius: number
): string {
  const around = `(around:${radius},${latitude},${longitude})`;
  const parts = compactFilters(category.overpassFilters)
    .map((filter) => `  ${filter}${around};`)
    .join('\n');
  return `
[out:json][timeout:25];
(
${parts}
);
out center;
`.trim();
}

function elementToPlace(
  el: OverpassElement,
  originLat: number,
  originLon: number
): NearbyPlace | null {
  const latitude = el.lat ?? el.center?.lat;
  const longitude = el.lon ?? el.center?.lon;
  if (latitude == null || longitude == null) return null;

  const tags = el.tags ?? {};
  const name =
    tags.name ||
    tags['name:en'] ||
    tags.brand ||
    tags.operator ||
    'Unnamed location';

  const addressParts = [
    tags['addr:housenumber'],
    tags['addr:street'],
    tags['addr:city'],
    tags['addr:state'],
  ].filter(Boolean);

  const phone =
    tags.phone ||
    tags['contact:phone'] ||
    tags['phone:US'] ||
    tags['contact:mobile'] ||
    tags.mobile;

  return {
    id: `${el.type}/${el.id}`,
    name,
    latitude,
    longitude,
    distanceMeters: haversineMeters(originLat, originLon, latitude, longitude),
    address: addressParts.length ? addressParts.join(' ') : tags['addr:full'],
    phone: phone || undefined,
  };
}

/** Digits (and leading +) for tel: links — use the first number if several are listed */
export function toTelUrl(phone: string): string {
  const first = phone.split(/[;/|]/)[0]?.trim() ?? phone;
  const cleaned = first.replace(/[^\d+]/g, '');
  return `tel:${cleaned}`;
}

export function formatDistance(meters: number, language: string): string {
  if (meters < 1000) {
    return language === 'ru' ? `${Math.round(meters)} м` : `${Math.round(meters)} m`;
  }
  const miles = meters / 1609.34;
  if (language === 'ru') {
    return `${(meters / 1000).toFixed(1)} км`;
  }
  return `${miles.toFixed(1)} mi`;
}

function normalizePlaces(
  elements: OverpassElement[],
  latitude: number,
  longitude: number
): NearbyPlace[] {
  const places = elements
    .map((el) => elementToPlace(el, latitude, longitude))
    .filter((p): p is NearbyPlace => p != null);

  const unique = new Map<string, NearbyPlace>();
  for (const place of places) {
    const key = `${place.name}|${place.latitude.toFixed(4)}|${place.longitude.toFixed(4)}`;
    const existing = unique.get(key);
    if (!existing || place.distanceMeters < existing.distanceMeters) {
      unique.set(key, place);
    }
  }

  return Array.from(unique.values())
    .sort((a, b) => a.distanceMeters - b.distanceMeters)
    .slice(0, MAX_RESULTS);
}

async function queryOverpassEndpoint(
  endpoint: string,
  query: string
): Promise<OverpassElement[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 28000);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        'User-Agent': 'GeraSheriffApp/1.0 (Florida legal education)',
      },
      body: `data=${encodeURIComponent(query)}`,
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`Overpass HTTP ${response.status}`);
    }
    const data = (await response.json()) as { elements?: OverpassElement[] };
    return data.elements ?? [];
  } finally {
    clearTimeout(timer);
  }
}

/** Race mirrors — first successful response wins */
async function queryOverpass(query: string): Promise<OverpassElement[]> {
  const errors: Error[] = [];

  return await new Promise<OverpassElement[]>((resolve, reject) => {
    let pending = OVERPASS_ENDPOINTS.length;
    let settled = false;

    for (const endpoint of OVERPASS_ENDPOINTS) {
      void queryOverpassEndpoint(endpoint, query)
        .then((elements) => {
          if (settled) return;
          settled = true;
          resolve(elements);
        })
        .catch((err) => {
          errors.push(err instanceof Error ? err : new Error(String(err)));
          pending -= 1;
          if (!settled && pending === 0) {
            reject(errors[0] ?? new Error('Failed to load nearby places'));
          }
        });
    }
  });
}

export async function fetchNearbyPlaces(
  category: LocationCategory,
  latitude: number,
  longitude: number,
  radius = SEARCH_RADIUS_METERS
): Promise<NearbyPlace[]> {
  const radii = [radius, Math.round(radius * 1.75), Math.round(radius * 3)];
  let lastError: Error | null = null;

  for (const r of radii) {
    try {
      const elements = await queryOverpass(
        buildQuery(category, latitude, longitude, r)
      );
      const places = normalizePlaces(elements, latitude, longitude);
      if (places.length > 0 || r === radii[radii.length - 1]) {
        return places;
      }
      // empty — widen search radius and try again
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
    }
  }

  throw lastError ?? new Error('Failed to load nearby places');
}

export { FALLBACK_COORDS };
