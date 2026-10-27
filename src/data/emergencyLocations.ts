export type LocationCategoryId =
  | 'hospitals'
  | 'poisonControl'
  | 'fireStations'
  | 'police'
  | 'sheriff'
  | 'domesticViolence'
  | 'shelters'
  | 'fema'
  | 'clinics'
  | 'pharmacies'
  | 'childCare'
  | 'legalAid'
  | 'courthouses'
  | 'clerkOfCourts'
  | 'immigration'
  | 'embassies'
  | 'dmv'
  | 'libraries';

export type CuratedPlace = {
  name: string;
  latitude: number;
  longitude: number;
  address?: string;
  phone?: string;
};

/**
 * Nominatim search config (OpenStreetMap, no API key).
 * Prefer a single `amenity` special-phrase when possible — one request per open.
 */
export type LocationSearch = {
  /** Nominatim amenity= special phrase (hospital, police, …) */
  amenity?: string;
  /** Free-text q= fallback(s); used when amenity is missing or returns too few hits */
  queries?: string[];
  /** Optional substrings the place name should contain (any match keeps it) */
  nameIncludes?: string[];
  /** Drop if name contains any of these */
  nameExcludes?: string[];
};

export type LocationCategory = {
  id: LocationCategoryId;
  emoji: string;
  nameEn: string;
  nameRu: string;
  search: LocationSearch;
  /** Seeded POIs when OSM is sparse — always merged by distance */
  curated?: CuratedPlace[];
};

/** Central Florida fallback when location permission is denied */
export const FALLBACK_COORDS = {
  latitude: 28.5383,
  longitude: -81.3792,
  labelEn: 'Orlando, FL (approximate)',
  labelRu: 'Орландо, Флорида (примерно)',
};

export const SEARCH_RADIUS_METERS = 20000;
export const MAX_RESULTS = 25;

/** Ordered by urgency — most emergency-critical categories first */
export const locationCategories: LocationCategory[] = [
  {
    id: 'hospitals',
    emoji: '🏥',
    nameEn: 'Hospitals',
    nameRu: 'Больницы',
    search: { amenity: 'hospital' },
  },
  {
    id: 'poisonControl',
    emoji: '☠️',
    nameEn: 'Poison Control',
    nameRu: 'Токсикологическая помощь',
    search: {
      queries: ['poison control center', 'poison information center'],
      nameIncludes: ['poison'],
      nameExcludes: ['pest', 'termite', 'tower'],
    },
    curated: [
      {
        name: 'Florida Poison Information Center – Miami',
        latitude: 25.7916,
        longitude: -80.2105,
        address: '1611 NW 12th Ave, Miami, FL 33136',
        phone: '1-800-222-1222',
      },
      {
        name: 'Florida Poison Information Center – Jacksonville',
        latitude: 30.3487,
        longitude: -81.6632,
        address: '655 W 8th St, Jacksonville, FL 32209',
        phone: '1-800-222-1222',
      },
      {
        name: 'Florida Poison Information Center – Tampa',
        latitude: 28.0547,
        longitude: -82.4214,
        address: '2 Tampa General Circle, Tampa, FL 33606',
        phone: '1-800-222-1222',
      },
    ],
  },
  {
    id: 'fireStations',
    emoji: '🚒',
    nameEn: 'Fire Stations',
    nameRu: 'Пожарные станции',
    search: { amenity: 'fire_station' },
  },
  {
    id: 'police',
    emoji: '👮',
    nameEn: 'Police',
    nameRu: 'Полиция',
    search: { amenity: 'police' },
  },
  {
    id: 'sheriff',
    emoji: '⭐',
    nameEn: "Sheriff's Offices",
    nameRu: 'Офисы шерифа',
    search: {
      queries: ['sheriff office', 'sheriff department'],
      nameIncludes: ['sheriff'],
    },
  },
  {
    id: 'domesticViolence',
    emoji: '💜',
    nameEn: 'Domestic Violence Resources',
    nameRu: 'Помощь при домашнем насилии',
    search: {
      queries: ['domestic violence shelter', 'women in distress'],
      nameIncludes: ['domestic violence', 'women in distress', 'victim', 'abuse'],
      nameExcludes: ['kids in distress', 'detention'],
    },
    curated: [
      {
        name: 'Women in Distress of Broward County (crisis line)',
        latitude: 26.15088,
        longitude: -80.21238,
        address: 'Plantation / Broward County, FL',
        phone: '954-761-1133',
      },
      {
        name: 'The Lodge / Victim Response (Miami-Dade)',
        latitude: 25.7617,
        longitude: -80.1918,
        address: 'Miami-Dade County, FL',
        phone: '305-693-0300',
      },
      {
        name: 'Florida Domestic Violence Hotline',
        latitude: 26.1224,
        longitude: -80.1434,
        address: 'Statewide hotline',
        phone: '1-800-500-1119',
      },
    ],
  },
  {
    id: 'shelters',
    emoji: '🏠',
    nameEn: 'Shelters',
    nameRu: 'Приюты',
    search: {
      queries: ['homeless shelter', 'Salvation Army'],
      nameIncludes: ['homeless', 'salvation army', 'rescue mission', 'chapman'],
      nameExcludes: ['bus', 'picnic', 'animal', 'restaurant', 'store', 'day care'],
    },
    curated: [
      {
        name: 'The Salvation Army Fort Lauderdale Corps',
        latitude: 26.1224,
        longitude: -80.1434,
        address: 'Fort Lauderdale, FL',
        phone: '954-524-6991',
      },
      {
        name: 'Chapman Partnership for the Homeless',
        latitude: 25.7907,
        longitude: -80.1957,
        address: '1550 N Miami Ave, Miami, FL 33136',
        phone: '305-329-3000',
      },
    ],
  },
  {
    id: 'fema',
    emoji: '🆘',
    nameEn: 'FEMA / Emergency Mgmt',
    nameRu: 'FEMA / ЧС управление',
    search: {
      queries: ['emergency management', 'FEMA'],
      nameIncludes: ['emergency management', 'fema', 'disaster'],
    },
    curated: [
      {
        name: 'Broward County Emergency Management Division',
        latitude: 26.1224,
        longitude: -80.1434,
        address: '201 NW 84th Ave, Plantation, FL 33324',
        phone: '954-831-3900',
      },
    ],
  },
  {
    id: 'clinics',
    emoji: '🩺',
    nameEn: 'Clinics',
    nameRu: 'Клиники',
    search: { amenity: 'clinic' },
  },
  {
    id: 'pharmacies',
    emoji: '💊',
    nameEn: 'Pharmacies',
    nameRu: 'Аптеки',
    search: { amenity: 'pharmacy' },
  },
  {
    id: 'childCare',
    emoji: '👶',
    nameEn: 'Child Care',
    nameRu: 'Уход за детьми',
    search: {
      amenity: 'kindergarten',
      queries: ['childcare', 'daycare'],
    },
  },
  {
    id: 'legalAid',
    emoji: '🛡️',
    nameEn: 'Legal Aid',
    nameRu: 'Бесплатная юрпомощь',
    search: {
      queries: ['legal aid'],
      nameIncludes: ['legal aid', 'legal services', 'pro bono'],
    },
    curated: [
      {
        name: 'Legal Aid Service of Broward County',
        latitude: 26.12756,
        longitude: -80.2038,
        address: '491 N State Road 7, Plantation, FL 33317',
        phone: '954-765-8950',
      },
      {
        name: 'Coast to Coast Legal Aid of South Florida',
        latitude: 26.1224,
        longitude: -80.1434,
        address: 'Fort Lauderdale, FL',
        phone: '954-736-2400',
      },
      {
        name: 'Legal Services of Greater Miami',
        latitude: 25.7753,
        longitude: -80.2089,
        address: '4343 W Flagler St, Miami, FL 33134',
        phone: '305-576-0080',
      },
    ],
  },
  {
    id: 'courthouses',
    emoji: '⚖️',
    nameEn: 'Courthouses',
    nameRu: 'Суды',
    search: { amenity: 'courthouse' },
  },
  {
    id: 'clerkOfCourts',
    emoji: '📋',
    nameEn: 'Clerk of Courts',
    nameRu: 'Clerk of Courts (суд. канцелярия)',
    search: {
      queries: ['clerk of court', 'clerk of courts'],
      nameIncludes: ['clerk'],
    },
    curated: [
      {
        name: 'Broward County Clerk of Courts',
        latitude: 26.1205,
        longitude: -80.1436,
        address: '201 SE 6th St, Fort Lauderdale, FL 33301',
        phone: '954-831-6565',
      },
    ],
  },
  {
    id: 'immigration',
    emoji: '🛂',
    nameEn: 'Immigration / USCIS',
    nameRu: 'Иммиграция / USCIS',
    search: {
      queries: ['USCIS', 'US Citizenship and Immigration Services'],
      nameIncludes: ['uscis', 'immigration', 'citizenship'],
    },
    curated: [
      {
        name: 'USCIS Miami Field Office',
        latitude: 25.9257,
        longitude: -80.3095,
        address: '16755 NW 67th Ave, Miami Lakes, FL 33014',
      },
      {
        name: 'USCIS Application Support Center – North Miami',
        latitude: 25.8901,
        longitude: -80.1867,
        address: 'North Miami, FL',
      },
    ],
  },
  {
    id: 'embassies',
    emoji: '🏛️',
    nameEn: 'Consulates & Embassies',
    nameRu: 'Консульства и посольства',
    search: {
      queries: ['consulate', 'embassy'],
      nameIncludes: ['consulate', 'embassy'],
      nameExcludes: ['boulevard', 'drive', 'street', 'road', 'ave'],
    },
  },
  {
    id: 'dmv',
    emoji: '🚗',
    nameEn: 'DMV / Driver License',
    nameRu: 'DMV / Водительские права',
    search: {
      queries: ['FLHSMV', 'driver license', 'DMV'],
      nameIncludes: ['flhsmv', 'driver license', 'dmv', 'motor vehicle', 'highway safety'],
      nameExcludes: ['school', 'fleet'],
    },
  },
  {
    id: 'libraries',
    emoji: '📚',
    nameEn: 'Public Libraries',
    nameRu: 'Публичные библиотеки',
    search: { amenity: 'library' },
  },
];

export function getLocationCategory(id: string): LocationCategory | undefined {
  return locationCategories.find((c) => c.id === id);
}
