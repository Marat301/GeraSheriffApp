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

function buildQuery(
  category: LocationCategory,
  latitude: number,
  longitude: number,
  radius: number
): string {
  const around = `(around:${radius},${latitude},${longitude})`;
  const parts = category.overpassFilters
    .map((filter) => `  ${filter}${around};`)
    .join('\n');
  return `
[out:json][timeout:30];
(
${parts}
);
out center ${MAX_RESULTS};
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

  return {
    id: `${el.type}/${el.id}`,
    name,
    latitude,
    longitude,
    distanceMeters: haversineMeters(originLat, originLon, latitude, longitude),
    address: addressParts.length ? addressParts.join(' ') : tags['addr:full'],
    phone: tags.phone || tags['contact:phone'],
  };
}

export function formatDistance(meters: number, language: 'en' | 'ru'): string {
  if (meters < 1000) {
    return language === 'ru' ? `${Math.round(meters)} м` : `${Math.round(meters)} m`;
  }
  const miles = meters / 1609.34;
  if (language === 'ru') {
    return `${(meters / 1000).toFixed(1)} км`;
  }
  return `${miles.toFixed(1)} mi`;
}

export async function fetchNearbyPlaces(
  category: LocationCategory,
  latitude: number,
  longitude: number,
  radius = SEARCH_RADIUS_METERS
): Promise<NearbyPlace[]> {
  const query = buildQuery(category, latitude, longitude, radius);
  const endpoints = [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
  ];

  let lastError: Error | null = null;

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `data=${encodeURIComponent(query)}`,
      });
      if (!response.ok) {
        throw new Error(`Overpass HTTP ${response.status}`);
      }
      const data = (await response.json()) as { elements?: OverpassElement[] };
      const places = (data.elements ?? [])
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
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
    }
  }

  throw lastError ?? new Error('Failed to load nearby places');
}

export { FALLBACK_COORDS };
