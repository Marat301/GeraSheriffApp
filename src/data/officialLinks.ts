import { Ionicons } from '@expo/vector-icons';

export type OfficialLinkCategoryId =
  | 'findPeople'
  | 'immigration'
  | 'courts'
  | 'licenses';

export type OfficialLink = {
  id: string;
  categoryId: OfficialLinkCategoryId;
  titleEn: string;
  titleRu: string;
  subtitleEn: string;
  subtitleRu: string;
  url: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export type OfficialLinkCategory = {
  id: OfficialLinkCategoryId;
  titleKey:
    | 'officialLinksFindPeople'
    | 'officialLinksImmigration'
    | 'officialLinksCourts'
    | 'officialLinksLicenses';
};

export const officialLinkCategories: OfficialLinkCategory[] = [
  { id: 'findPeople', titleKey: 'officialLinksFindPeople' },
  { id: 'immigration', titleKey: 'officialLinksImmigration' },
  { id: 'courts', titleKey: 'officialLinksCourts' },
  { id: 'licenses', titleKey: 'officialLinksLicenses' },
];

export const officialLinks: OfficialLink[] = [
  // —— Find people in custody ——
  {
    id: 'ice-locator',
    categoryId: 'findPeople',
    titleEn: 'ICE Detainee Locator',
    titleRu: 'Поиск задержанных ICE',
    subtitleEn: 'Online Detainee Locator System (locator.ice.gov)',
    subtitleRu: 'Система поиска задержанных ICE (locator.ice.gov)',
    url: 'https://locator.ice.gov/',
    icon: 'globe',
  },
  {
    id: 'bop-inmate',
    categoryId: 'findPeople',
    titleEn: 'Federal Inmate Locator',
    titleRu: 'Поиск федеральных заключённых',
    subtitleEn: 'Bureau of Prisons Inmate Locator (bop.gov)',
    subtitleRu: 'Поиск заключённых BOP (bop.gov)',
    url: 'https://www.bop.gov/inmateloc/',
    icon: 'business',
  },
  {
    id: 'fdc-offender',
    categoryId: 'findPeople',
    titleEn: 'Florida Offender Search',
    titleRu: 'Поиск заключенных в тюрьмах Флориды',
    subtitleEn: 'Florida Department of Corrections (fdc.myflorida.com)',
    subtitleRu: 'Департамент исправительных учреждений Флориды (fdc.myflorida.com)',
    url: 'https://fdc.myflorida.com/OffenderSearch/',
    icon: 'search',
  },
  {
    id: 'broward-inmate',
    categoryId: 'findPeople',
    titleEn: 'Broward County Inmate Search',
    titleRu: 'Поиск арестованных в тюрьмах Округа Бровард',
    subtitleEn: 'BSO Arrest Search (apps.sheriff.org)',
    subtitleRu: 'Поиск арестов BSO (apps.sheriff.org)',
    url: 'https://apps.sheriff.org/ArrestSearch/',
    icon: 'shield',
  },
  {
    id: 'mdcr-inmate',
    categoryId: 'findPeople',
    titleEn: 'Miami-Dade Inmate Search',
    titleRu: 'Поиск арестованных в тюрьмах Округа Майами-Дейд',
    subtitleEn: 'MDCR Inmate Search (miamidade.gov)',
    subtitleRu: 'Поиск заключённых MDCR (miamidade.gov)',
    url: 'https://www.miamidade.gov/Apps/mdcr/inmateSearch/',
    icon: 'people',
  },
  {
    id: 'fdle-sex-offender',
    categoryId: 'findPeople',
    titleEn: 'Florida Sex Offender Registry',
    titleRu: 'Реестр сексуальных правонарушителей Флориды',
    subtitleEn: 'FDLE public offender / predator search (offender.fdle.state.fl.us)',
    subtitleRu: 'Публичный поиск FDLE (offender.fdle.state.fl.us)',
    url: 'https://offender.fdle.state.fl.us/offender/sops/search.jsf',
    icon: 'alert-circle',
  },
  {
    id: 'vine-florida',
    categoryId: 'findPeople',
    titleEn: 'VINE Custody Notifications',
    titleRu: 'Уведомления VINE о содержании',
    subtitleEn: 'Register for custody status alerts (vinelink.com)',
    subtitleRu: 'Подписка на статус содержания (vinelink.com)',
    url: 'https://vinelink.vineapps.com/state/FL',
    icon: 'notifications',
  },

  // —— Immigration ——
  {
    id: 'uscis-case-status',
    categoryId: 'immigration',
    titleEn: 'USCIS Case Status',
    titleRu: 'Статус дела USCIS',
    subtitleEn: 'Check a receipt number online (egov.uscis.gov)',
    subtitleRu: 'Проверка по номеру квитанции (egov.uscis.gov)',
    url: 'https://egov.uscis.gov/',
    icon: 'document-text',
  },
  {
    id: 'eoir-case-info',
    categoryId: 'immigration',
    titleEn: 'Immigration Court Case Info',
    titleRu: 'Информация по делу в иммиграционном суде',
    subtitleEn: 'EOIR Automated Case Information (acis.eoir.justice.gov)',
    subtitleRu: 'Автоматическая система EOIR (acis.eoir.justice.gov)',
    url: 'https://acis.eoir.justice.gov/en/',
    icon: 'briefcase',
  },
  {
    id: 'uscis-homepage',
    categoryId: 'immigration',
    titleEn: 'USCIS Official Site',
    titleRu: 'Официальный сайт USCIS',
    subtitleEn: 'Forms, appointments, and immigration services (uscis.gov)',
    subtitleRu: 'Формы, записи и иммиграционные услуги (uscis.gov)',
    url: 'https://www.uscis.gov/',
    icon: 'flag',
  },

  // —— Courts & cases ——
  {
    id: 'my-fl-court-access',
    categoryId: 'courts',
    titleEn: 'My Florida Court Access',
    titleRu: 'My Florida Court Access',
    subtitleEn: 'Florida Courts E-Filing Portal / CaseAccess (myflcourtaccess.com)',
    subtitleRu: 'Портал электронной подачи и CaseAccess (myflcourtaccess.com)',
    url: 'https://www.myflcourtaccess.com/',
    icon: 'library',
  },
  {
    id: 'fl-clerks',
    categoryId: 'courts',
    titleEn: 'Florida Court Clerks',
    titleRu: 'Клерки судов Флориды',
    subtitleEn: 'Find your county clerk of court (flclerks.com)',
    subtitleRu: 'Найти клерка вашего округа (flclerks.com)',
    url: 'https://www.flclerks.com/',
    icon: 'business-outline',
  },
  {
    id: 'online-sunshine',
    categoryId: 'courts',
    titleEn: 'Florida Statutes (Online Sunshine)',
    titleRu: 'Законы и УК Флориды',
    subtitleEn: 'Official Florida Legislature statute text (leg.state.fl.us)',
    subtitleRu: 'Официальный текст законов Легислатуры Флориды (leg.state.fl.us)',
    url: 'https://www.leg.state.fl.us/statutes/',
    icon: 'book',
  },

  // —— Licenses & IDs ——
  {
    id: 'flhsmv-id',
    categoryId: 'licenses',
    titleEn: 'Driver Licenses & ID Cards',
    titleRu: 'Водительские права и ID',
    subtitleEn: 'Florida Highway Safety and Motor Vehicles (flhsmv.gov)',
    subtitleRu: 'Права и удостоверения Флориды (flhsmv.gov)',
    url: 'https://www.flhsmv.gov/driver-licenses-id-cards/',
    icon: 'card',
  },
  {
    id: 'flhsmv-vehicles',
    categoryId: 'licenses',
    titleEn: 'Vehicle Tags & Titles',
    titleRu: 'Госзнаки и документы на автомобили',
    subtitleEn: 'Registration, titles, and tags (flhsmv.gov)',
    subtitleRu: 'Регистрация, титулы и номера (flhsmv.gov)',
    url: 'https://www.flhsmv.gov/motor-vehicles-tags-titles/',
    icon: 'car',
  },
  {
    id: 'fdacs-cwl',
    categoryId: 'licenses',
    titleEn: 'Concealed Weapon License',
    titleRu: 'Лицензия на скрытое ношение оружия',
    subtitleEn: 'Apply / renew via FDACS (fdacs.gov)',
    subtitleRu: 'Подача / продление через FDACS (fdacs.gov)',
    url: 'https://www.fdacs.gov/consumer-resources/concealed-weapon-license/applying-for-a-concealed-weapon-license',
    icon: 'lock-closed',
  },
  {
    id: 'fwc-fishing',
    categoryId: 'licenses',
    titleEn: 'Fishing & Hunting Licenses',
    titleRu: 'Рыболовные и охотничьи лицензии',
    subtitleEn: 'Fish & Wildlife Conservation Commission (myfwc.com)',
    subtitleRu: 'Комиссия по охране дикой природы (myfwc.com)',
    url: 'https://myfwc.com/license/',
    icon: 'fish',
  },
  {
    id: 'dbpr-licenses',
    categoryId: 'licenses',
    titleEn: 'Professional Licenses',
    titleRu: 'Профессиональные лицензии',
    subtitleEn: 'Verify or apply via DBPR (myfloridalicense.com)',
    subtitleRu: 'Проверка и подача через DBPR (myfloridalicense.com)',
    url: 'https://www.myfloridalicense.com/',
    icon: 'construct',
  },
];
