export type PreferredLanguage = 'ru' | 'es' | 'pt' | 'ht';

/** Active UI language — English or the user's preferred non-English language */
export type Language = 'en' | PreferredLanguage;

export type USState = 'FL' | 'CA' | 'NY';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  password: string;
  /** Preferred non-English language paired with EN in the top toggle */
  language: PreferredLanguage;
  state: USState;
  createdAt: string;
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  titleEn: string;
  titleRu: string;
  category: VideoCategory;
}

export type VideoCategory =
  | 'police'
  | 'law'
  | 'immigration'
  | 'traffic'
  | 'firearms'
  | 'selfDefense'
  | 'news';

export interface BookStoreLink {
  id: string;
  labelEn: string;
  labelRu: string;
  url: string;
}

export interface BookItem {
  id: string;
  titleEn: string;
  titleRu: string;
  author: string;
  descriptionEn: string;
  descriptionRu: string;
  stores: BookStoreLink[];
}

export interface ArticleItem {
  id: string;
  titleEn: string;
  titleRu: string;
  summaryEn: string;
  summaryRu: string;
  bodyEn: string;
  bodyRu: string;
  category: string;
}

export interface EmergencyGuide {
  id: string;
  titleEn: string;
  titleRu: string;
  icon: string;
  stepsEn: string[];
  stepsRu: string[];
}

export interface PoliceCardVariant {
  id: string;
  titleEn: string;
  titleRu: string;
  phraseEn: string;
  phraseRu: string;
}

export interface PoliceCard {
  id: string;
  titleEn: string;
  titleRu: string;
  phraseEn: string;
  phraseRu: string;
  color: string;
  /** Extra phrases on the same card (e.g. help + medical help) */
  variants?: PoliceCardVariant[];
}

export type LawLibraryCategoryId =
  | 'criminal'
  | 'traffic'
  | 'firearms'
  | 'selfDefense'
  | 'domesticViolence'
  | 'immigration'
  | 'courtProcedures';

export interface LawLibraryCategory {
  id: LawLibraryCategoryId;
  titleEn: string;
  titleRu: string;
  icon: string;
  summaryEn: string;
  summaryRu: string;
}

export interface LawLibraryArticle {
  id: string;
  categoryId: LawLibraryCategoryId;
  titleEn: string;
  titleRu: string;
  summaryEn: string;
  summaryRu: string;
  bodyEn: string;
  bodyRu: string;
}

export interface CriminalStatute {
  code: string;
  titleEn: string;
  titleRu: string;
  levelEn: string;
  levelRu: string;
  explanationEn: string;
  explanationRu: string;
  penaltiesEn: string;
  penaltiesRu: string;
  processEn: string;
  processRu: string;
  observationsEn: string;
  observationsRu: string;
}

export interface GlossaryTerm {
  id: string;
  termEn: string;
  termRu: string;
  definitionEn: string;
  definitionRu: string;
}
