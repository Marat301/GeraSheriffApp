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

type NominatimResult = {
  place_id?: number;
  osm_type?: string;
  osm_id?: number;
  lat: string;
  lon: string;
  name?: string;
  display_name?: string;
  type?: string;
  class?: string;
};

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search';
const USER_AGENT = 'GeraSheriffApp/1.0 (legal-education; expo-app)';
/** Never block the UI longer than this */
const SEARCH_BUDGET_MS = 8000;
const REQUEST_TIMEOUT_MS = 7000;

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

function dedupeAndSort(places: NearbyPlace[], maxRadius?: number): NearbyPlace[] {
  const unique = new Map<string, NearbyPlace>();
  for (const place of places) {
    if (maxRadius != null && place.distanceMeters > maxRadius) continue;
    const key = `${place.name.toLowerCase()}|${place.latitude.toFixed(4)}|${place.longitude.toFixed(4)}`;
    const existing = unique.get(key);
    if (!existing || place.distanceMeters < existing.distanceMeters) {
      unique.set(key, place);
    }
  }
  return Array.from(unique.values())
    .sort((a, b) => a.distanceMeters - b.distanceMeters)
    .slice(0, MAX_RESULTS);
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

function passesNameFilters(place: NearbyPlace, category: LocationCategory): boolean {
  const { nameIncludes, nameExcludes } = category.search;
  // Filter on place name only — address lines often contain Street/Ave and would false-drop hits
  const text = place.name.toLowerCase();
  if (nameExcludes?.length) {
    for (const ex of nameExcludes) {
      if (text.includes(ex.toLowerCase())) return false;
    }
  }
  if (nameIncludes?.length) {
    return nameIncludes.some((inc) => text.includes(inc.toLowerCase()));
  }
  return true;
}

export function getCuratedNearby(
  category: LocationCategory,
  latitude: number,
  longitude: number,
  radius = SEARCH_RADIUS_METERS * 4
): NearbyPlace[] {
  return dedupeAndSort(
    (category.curated ?? []).map((c) => ({
      id: `curated:${category.id}:${c.latitude.toFixed(4)},${c.longitude.toFixed(4)}`,
      name: c.name,
      latitude: c.latitude,
      longitude: c.longitude,
      distanceMeters: haversineMeters(latitude, longitude, c.latitude, c.longitude),
      address: c.address,
      phone: c.phone,
    })),
    radius
  );
}

function nominatimToPlace(
  row: NominatimResult,
  originLat: number,
  originLon: number
): NearbyPlace | null {
  const latitude = Number(row.lat);
  const longitude = Number(row.lon);
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;

  const name =
    row.name?.trim() ||
    row.display_name?.split(',')[0]?.trim() ||
    'Unnamed location';

  return {
    id: row.osm_type && row.osm_id != null
      ? `${row.osm_type}/${row.osm_id}`
      : `nominatim:${row.place_id ?? `${latitude},${longitude}`}`,
    name,
    latitude,
    longitude,
    distanceMeters: haversineMeters(originLat, originLon, latitude, longitude),
    address: row.display_name,
  };
}

function viewboxFor(lat: number, lon: number, radiusMeters: number): string {
  // Nominatim viewbox: left, top, right, bottom
  const dLat = radiusMeters / 111000;
  const dLon = radiusMeters / (111000 * Math.cos((lat * Math.PI) / 180));
  const left = lon - dLon;
  const right = lon + dLon;
  const top = lat + dLat;
  const bottom = lat - dLat;
  return `${left},${top},${right},${bottom}`;
}

async function nominatimSearch(
  params: Record<string, string>,
  signal: AbortSignal
): Promise<NominatimResult[]> {
  const url = `${NOMINATIM_URL}?${new URLSearchParams(params)}`;
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': USER_AGENT,
    },
    signal,
  });
  if (!response.ok) {
    throw new Error(`Nominatim HTTP ${response.status}`);
  }
  const data = (await response.json()) as NominatimResult[];
  return Array.isArray(data) ? data : [];
}

async function searchAmenity(
  amenity: string,
  latitude: number,
  longitude: number,
  radius: number,
  signal: AbortSignal
): Promise<NearbyPlace[]> {
  const rows = await nominatimSearch(
    {
      format: 'json',
      limit: '40',
      amenity,
      viewbox: viewboxFor(latitude, longitude, radius * 1.15),
      bounded: '1',
      addressdetails: '0',
    },
    signal
  );
  return rows
    .map((r) => nominatimToPlace(r, latitude, longitude))
    .filter((p): p is NearbyPlace => p != null);
}

async function searchQuery(
  query: string,
  latitude: number,
  longitude: number,
  radius: number,
  signal: AbortSignal
): Promise<NearbyPlace[]> {
  const rows = await nominatimSearch(
    {
      format: 'json',
      limit: '25',
      q: query,
      viewbox: viewboxFor(latitude, longitude, radius * 1.15),
      bounded: '1',
      addressdetails: '0',
    },
    signal
  );
  return rows
    .map((r) => nominatimToPlace(r, latitude, longitude))
    .filter((p): p is NearbyPlace => p != null);
}

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<T>((_, reject) => {
        timer = setTimeout(() => reject(new Error('Search timed out')), ms);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export async function fetchNearbyPlaces(
  category: LocationCategory,
  latitude: number,
  longitude: number,
  radius = SEARCH_RADIUS_METERS
): Promise<NearbyPlace[]> {
  const curated = getCuratedNearby(category, latitude, longitude, radius * 4);
  const controller = new AbortController();
  const kill = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const live = await withTimeout(
      (async () => {
        const { amenity, queries = [] } = category.search;
        const hits: NearbyPlace[] = [];

        if (amenity) {
          hits.push(
            ...(await searchAmenity(
              amenity,
              latitude,
              longitude,
              radius,
              controller.signal
            ))
          );
        }

        // Only hit text search if amenity missing or thin — stay polite to Nominatim
        const needText = !amenity || hits.length < 3;
        if (needText && queries.length) {
          for (const q of queries.slice(0, 2)) {
            if (controller.signal.aborted) break;
            try {
              hits.push(
                ...(await searchQuery(q, latitude, longitude, radius, controller.signal))
              );
            } catch {
              // keep going with whatever we have
            }
            if (hits.length >= 8) break;
          }
        }

        return hits;
      })(),
      SEARCH_BUDGET_MS
    );

    const filtered = live.filter((p) => passesNameFilters(p, category));
    // Widen once if local radius was empty (sparse gov / consulates)
    let merged = dedupeAndSort([...filtered, ...curated], radius);
    if (merged.length < 2 && radius < SEARCH_RADIUS_METERS * 3) {
      const wide = radius * 2.5;
      const wideCurated = getCuratedNearby(category, latitude, longitude, wide);
      const wideLive = filtered.filter((p) => p.distanceMeters <= wide);
      merged = dedupeAndSort([...wideLive, ...wideCurated], wide);
    }
    return merged;
  } catch {
    // Never hang the screen — curated (or empty) beats a spinner
    return curated.length ? curated : [];
  } finally {
    clearTimeout(kill);
    controller.abort();
  }
}

export { FALLBACK_COORDS };
