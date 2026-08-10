export type LocationCategoryId =
  | 'hospitals'
  | 'urgentCare'
  | 'pharmacies'
  | 'police'
  | 'sheriff'
  | 'fireStations'
  | 'courthouses'
  | 'clerkOfCourts'
  | 'childCare'
  | 'attorneys'
  | 'legalAid'
  | 'shelters'
  | 'domesticViolence'
  | 'dmv'
  | 'immigration'
  | 'embassies'
  | 'fema'
  | 'libraries'
  | 'poisonControl';

export type LocationCategory = {
  id: LocationCategoryId;
  emoji: string;
  nameEn: string;
  nameRu: string;
  /** Overpass QL filters inside an (around:...) block — without the around itself */
  overpassFilters: string[];
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

export const locationCategories: LocationCategory[] = [
  {
    id: 'hospitals',
    emoji: '🏥',
    nameEn: 'Hospitals',
    nameRu: 'Больницы',
    overpassFilters: [
      'node["amenity"="hospital"]',
      'way["amenity"="hospital"]',
      'node["healthcare"="hospital"]',
      'way["healthcare"="hospital"]',
    ],
  },
  {
    id: 'urgentCare',
    emoji: '🩺',
    nameEn: 'Urgent Care',
    nameRu: 'Срочные клиники',
    overpassFilters: [
      'node["amenity"="clinic"]',
      'way["amenity"="clinic"]',
      'node["healthcare"="clinic"]',
      'way["healthcare"="clinic"]',
      'node["healthcare"="urgent_care"]',
      'way["healthcare"="urgent_care"]',
    ],
  },
  {
    id: 'pharmacies',
    emoji: '💊',
    nameEn: 'Pharmacies',
    nameRu: 'Аптеки',
    overpassFilters: [
      'node["amenity"="pharmacy"]',
      'way["amenity"="pharmacy"]',
      'node["healthcare"="pharmacy"]',
      'way["healthcare"="pharmacy"]',
    ],
  },
  {
    id: 'police',
    emoji: '👮',
    nameEn: 'Police',
    nameRu: 'Полиция',
    overpassFilters: [
      'node["amenity"="police"]',
      'way["amenity"="police"]',
    ],
  },
  {
    id: 'sheriff',
    emoji: '⭐',
    nameEn: "Sheriff's Offices",
    nameRu: 'Офисы шерифа',
    overpassFilters: [
      'node["amenity"="police"]["name"~"[Ss]heriff"]',
      'way["amenity"="police"]["name"~"[Ss]heriff"]',
      'node["office"="government"]["name"~"[Ss]heriff"]',
      'way["office"="government"]["name"~"[Ss]heriff"]',
      'node["name"~"[Ss]heriff.?s? [Oo]ffice"]',
      'way["name"~"[Ss]heriff.?s? [Oo]ffice"]',
    ],
  },
  {
    id: 'fireStations',
    emoji: '🚒',
    nameEn: 'Fire Stations',
    nameRu: 'Пожарные станции',
    overpassFilters: [
      'node["amenity"="fire_station"]',
      'way["amenity"="fire_station"]',
    ],
  },
  {
    id: 'courthouses',
    emoji: '⚖️',
    nameEn: 'Courthouses',
    nameRu: 'Суды',
    overpassFilters: [
      'node["amenity"="courthouse"]',
      'way["amenity"="courthouse"]',
    ],
  },
  {
    id: 'clerkOfCourts',
    emoji: '📋',
    nameEn: 'Clerk of Courts',
    nameRu: 'Клерк суда',
    overpassFilters: [
      'node["office"="government"]["name"~"[Cc]lerk"]',
      'way["office"="government"]["name"~"[Cc]lerk"]',
      'node["name"~"[Cc]lerk of [Cc]ourt"]',
      'way["name"~"[Cc]lerk of [Cc]ourt"]',
      'node["amenity"="courthouse"]',
      'way["amenity"="courthouse"]',
    ],
  },
  {
    id: 'childCare',
    emoji: '👶',
    nameEn: 'Child Care',
    nameRu: 'Детский уход',
    overpassFilters: [
      'node["amenity"="childcare"]',
      'way["amenity"="childcare"]',
      'node["amenity"="kindergarten"]',
      'way["amenity"="kindergarten"]',
      'node["amenity"="nursery"]',
      'way["amenity"="nursery"]',
    ],
  },
  {
    id: 'attorneys',
    emoji: '👔',
    nameEn: 'Attorneys',
    nameRu: 'Адвокаты',
    overpassFilters: [
      'node["office"="lawyer"]',
      'way["office"="lawyer"]',
      'node["office"="attorney"]',
      'way["office"="attorney"]',
    ],
  },
  {
    id: 'legalAid',
    emoji: '🛡️',
    nameEn: 'Legal Aid',
    nameRu: 'Бесплатная юрпомощь',
    overpassFilters: [
      'node["office"="lawyer"]["name"~"[Ll]egal [Aa]id"]',
      'way["office"="lawyer"]["name"~"[Ll]egal [Aa]id"]',
      'node["name"~"[Ll]egal [Aa]id"]',
      'way["name"~"[Ll]egal [Aa]id"]',
      'node["office"="ngo"]["name"~"[Ll]egal"]',
      'way["office"="ngo"]["name"~"[Ll]egal"]',
    ],
  },
  {
    id: 'shelters',
    emoji: '🏠',
    nameEn: 'Shelters',
    nameRu: 'Приюты',
    overpassFilters: [
      'node["amenity"="shelter"]',
      'way["amenity"="shelter"]',
      'node["social_facility"="shelter"]',
      'way["social_facility"="shelter"]',
      'node["social_facility"="homeless_shelter"]',
      'way["social_facility"="homeless_shelter"]',
    ],
  },
  {
    id: 'domesticViolence',
    emoji: '💜',
    nameEn: 'Domestic Violence Resources',
    nameRu: 'Помощь при домашнем насилии',
    overpassFilters: [
      'node["social_facility"="shelter"]["social_facility:for"="domestic_violence"]',
      'way["social_facility"="shelter"]["social_facility:for"="domestic_violence"]',
      'node["name"~"[Dd]omestic [Vv]iolence"]',
      'way["name"~"[Dd]omestic [Vv]iolence"]',
      'node["name"~"[Cc]risis [Cc]enter"]',
      'way["name"~"[Cc]risis [Cc]enter"]',
      'node["social_facility"="crisis_centre"]',
      'way["social_facility"="crisis_centre"]',
    ],
  },
  {
    id: 'dmv',
    emoji: '🚗',
    nameEn: 'DMV / Driver License',
    nameRu: 'DMV / Водительские права',
    overpassFilters: [
      'node["name"~"\\bDMV\\b"]',
      'way["name"~"\\bDMV\\b"]',
      'node["name"~"[Dd]river.?s? [Ll]icense"]',
      'way["name"~"[Dd]river.?s? [Ll]icense"]',
      'node["name"~"[Hh]ighway [Ss]afety"]',
      'way["name"~"[Hh]ighway [Ss]afety"]',
      'node["government"="transportation"]',
      'way["government"="transportation"]',
    ],
  },
  {
    id: 'immigration',
    emoji: '🛂',
    nameEn: 'Immigration / USCIS',
    nameRu: 'Иммиграция / USCIS',
    overpassFilters: [
      'node["office"="immigration"]',
      'way["office"="immigration"]',
      'node["name"~"USCIS"]',
      'way["name"~"USCIS"]',
      'node["name"~"[Ii]mmigration"]',
      'way["name"~"[Ii]mmigration"]',
      'node["government"="immigration"]',
      'way["government"="immigration"]',
    ],
  },
  {
    id: 'embassies',
    emoji: '🏛️',
    nameEn: 'Consulates & Embassies',
    nameRu: 'Консульства и посольства',
    overpassFilters: [
      'node["amenity"="embassy"]',
      'way["amenity"="embassy"]',
      'node["office"="diplomatic"]',
      'way["office"="diplomatic"]',
      'node["amenity"="consulate"]',
      'way["amenity"="consulate"]',
      'node["name"~"[Cc]onsulat"]',
      'way["name"~"[Cc]onsulat"]',
    ],
  },
  {
    id: 'fema',
    emoji: '🆘',
    nameEn: 'FEMA / Emergency Mgmt',
    nameRu: 'FEMA / ЧС управление',
    overpassFilters: [
      'node["name"~"\\bFEMA\\b"]',
      'way["name"~"\\bFEMA\\b"]',
      'node["name"~"[Ee]mergency [Mm]anagement"]',
      'way["name"~"[Ee]mergency [Mm]anagement"]',
      'node["office"="government"]["name"~"[Ee]mergency"]',
      'way["office"="government"]["name"~"[Ee]mergency"]',
    ],
  },
  {
    id: 'libraries',
    emoji: '📚',
    nameEn: 'Public Libraries',
    nameRu: 'Публичные библиотеки',
    overpassFilters: [
      'node["amenity"="library"]',
      'way["amenity"="library"]',
    ],
  },
  {
    id: 'poisonControl',
    emoji: '☠️',
    nameEn: 'Poison Control',
    nameRu: 'Токсикологическая помощь',
    overpassFilters: [
      'node["name"~"[Pp]oison"]',
      'way["name"~"[Pp]oison"]',
      'node["healthcare"="poison_control"]',
      'way["healthcare"="poison_control"]',
    ],
  },
];

export function getLocationCategory(id: string): LocationCategory | undefined {
  return locationCategories.find((c) => c.id === id);
}
