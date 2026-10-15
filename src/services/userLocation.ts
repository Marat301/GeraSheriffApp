import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { FALLBACK_COORDS } from '../data/emergencyLocations';

const CACHE_KEY = '@gera_last_gps_v1';

export type UserCoords = {
  latitude: number;
  longitude: number;
};

export async function readCachedCoords(): Promise<UserCoords | null> {
  try {
    const raw = await AsyncStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<UserCoords>;
    if (
      typeof parsed.latitude === 'number' &&
      typeof parsed.longitude === 'number' &&
      Number.isFinite(parsed.latitude) &&
      Number.isFinite(parsed.longitude)
    ) {
      return { latitude: parsed.latitude, longitude: parsed.longitude };
    }
  } catch {
    // ignore corrupt cache
  }
  return null;
}

async function writeCachedCoords(coords: UserCoords): Promise<void> {
  try {
    await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(coords));
  } catch {
    // non-fatal
  }
}

/**
 * Resolve the user's position quickly:
 * 1) last-known OS fix (fast)
 * 2) fresh GPS (slower, more accurate)
 * Falls back to Orlando only if permission denied / GPS fails.
 */
export async function resolveUserLocation(): Promise<{
  coords: UserCoords;
  usingFallback: boolean;
}> {
  const cached = await readCachedCoords();

  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return {
        coords: cached ?? {
          latitude: FALLBACK_COORDS.latitude,
          longitude: FALLBACK_COORDS.longitude,
        },
        usingFallback: !cached,
      };
    }

    // Fast path: OS last-known (often instant)
    try {
      const last = await Location.getLastKnownPositionAsync({
        maxAge: 1000 * 60 * 30,
        requiredAccuracy: 1000,
      });
      if (last?.coords) {
        const quick = {
          latitude: last.coords.latitude,
          longitude: last.coords.longitude,
        };
        void writeCachedCoords(quick);

        // Refine in background-friendly way with a short timeout
        try {
          const fresh = await Promise.race([
            Location.getCurrentPositionAsync({
              accuracy: Location.Accuracy.Balanced,
            }),
            new Promise<null>((resolve) => setTimeout(() => resolve(null), 4000)),
          ]);
          if (fresh?.coords) {
            const refined = {
              latitude: fresh.coords.latitude,
              longitude: fresh.coords.longitude,
            };
            void writeCachedCoords(refined);
            return { coords: refined, usingFallback: false };
          }
        } catch {
          // keep quick fix
        }

        return { coords: quick, usingFallback: false };
      }
    } catch {
      // fall through to current position
    }

    const position = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });
    const coords = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    void writeCachedCoords(coords);
    return { coords, usingFallback: false };
  } catch {
    return {
      coords: cached ?? {
        latitude: FALLBACK_COORDS.latitude,
        longitude: FALLBACK_COORDS.longitude,
      },
      usingFallback: !cached,
    };
  }
}

function normalizeQuery(query: string): string {
  return query.trim();
}

type NominatimHit = {
  lat?: string;
  lon?: string;
  display_name?: string;
  class?: string;
  type?: string;
  importance?: number;
  boundingbox?: [string, string, string, string];
};

/** Soft Florida preference for this app — never blocks worldwide results */
function looksLikeFlorida(lat: number, lon: number): boolean {
  return lat >= 24.3 && lat <= 31.2 && lon >= -87.8 && lon <= -79.8;
}

function scoreHit(hit: NominatimHit, query: string): number {
  const cls = hit.class ?? '';
  const typ = hit.type ?? '';
  let score = hit.importance ?? 0;

  if (cls === 'place' && /city|town|village|hamlet|municipality|suburb/.test(typ)) {
    score += 5;
  } else if (cls === 'boundary' && typ === 'administrative') {
    score += 4;
  } else if (cls === 'place') {
    score += 2;
  } else if (cls === 'highway' || cls === 'building' || cls === 'amenity') {
    score -= 3;
  }

  const name = (hit.display_name ?? '').toLowerCase();
  const q = query.trim().toLowerCase();
  if (name.startsWith(q) || name.includes(`${q},`)) score += 1.5;

  const latitude = hit.lat != null ? Number(hit.lat) : NaN;
  const longitude = hit.lon != null ? Number(hit.lon) : NaN;
  // Prefer Florida only when the query doesn't already specify another place
  const mentionsElsewhere =
    /\b(usa|united states|uk|canada|mexico|europe|asia|africa|australia)\b/i.test(query) ||
    /,/.test(query);
  if (
    !mentionsElsewhere &&
    Number.isFinite(latitude) &&
    Number.isFinite(longitude) &&
    looksLikeFlorida(latitude, longitude)
  ) {
    score += 1.25;
  }
  if (name.includes('florida')) score += 0.5;

  return score;
}

function pickBestHit(hits: NominatimHit[], query: string): NominatimHit | null {
  if (!hits.length) return null;
  return [...hits].sort((a, b) => scoreHit(b, query) - scoreHit(a, query))[0] ?? null;
}

function coordsFromHit(hit: NominatimHit): UserCoords | null {
  // Prefer the official point — bbox centers of large admin areas can land far from downtown
  const latitude = hit.lat != null ? Number(hit.lat) : NaN;
  const longitude = hit.lon != null ? Number(hit.lon) : NaN;
  if (Number.isFinite(latitude) && Number.isFinite(longitude)) {
    return { latitude, longitude };
  }
  if (hit.boundingbox?.length === 4) {
    const south = Number(hit.boundingbox[0]);
    const north = Number(hit.boundingbox[1]);
    const west = Number(hit.boundingbox[2]);
    const east = Number(hit.boundingbox[3]);
    if ([south, north, west, east].every(Number.isFinite)) {
      return {
        latitude: (south + north) / 2,
        longitude: (west + east) / 2,
      };
    }
  }
  return null;
}

function shortLabel(displayName: string | undefined, fallback: string): string {
  if (!displayName) return fallback;
  return displayName.split(',').slice(0, 2).join(',').trim() || fallback;
}

async function geocodeWithNominatim(
  query: string
): Promise<{ coords: UserCoords; label: string } | null> {
  const q = normalizeQuery(query);
  const url =
    `https://nominatim.openstreetmap.org/search?format=json&limit=8&addressdetails=0` +
    `&q=${encodeURIComponent(q)}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'GeraSheriffApp/1.0 (legal education; city search)',
      },
      signal: controller.signal,
    });
    if (!response.ok) return null;
    const data = (await response.json()) as NominatimHit[];
    const hit = pickBestHit(data, q);
    if (!hit) return null;
    const coords = coordsFromHit(hit);
    if (!coords) return null;
    return {
      coords,
      label: shortLabel(hit.display_name, q),
    };
  } finally {
    clearTimeout(timer);
  }
}

async function geocodeWithExpo(
  query: string
): Promise<{ coords: UserCoords; label: string } | null> {
  try {
    const results = await Location.geocodeAsync(normalizeQuery(query));
    const hit = results[0];
    if (!hit) return null;
    return {
      coords: { latitude: hit.latitude, longitude: hit.longitude },
      label: query.trim(),
    };
  } catch {
    return null;
  }
}

/** Turn a city / ZIP / place name into coordinates (worldwide). */
export async function geocodePlaceQuery(
  query: string
): Promise<{ coords: UserCoords; label: string } | null> {
  const trimmed = normalizeQuery(query);
  if (!trimmed) return null;

  try {
    const nominatim = await geocodeWithNominatim(trimmed);
    if (nominatim) return nominatim;
  } catch {
    // try native geocoder next
  }

  return geocodeWithExpo(trimmed);
}
