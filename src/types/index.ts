export type Language = 'en' | 'ru';

export type USState = 'FL' | 'CA' | 'NY';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  password: string;
  language: Language;
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

export interface BookItem {
  id: string;
  titleEn: string;
  titleRu: string;
  author: string;
  descriptionEn: string;
  descriptionRu: string;
  amazonUrl: string;
  ibooksUrl: string;
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

export interface PoliceCard {
  id: string;
  titleEn: string;
  titleRu: string;
  phraseEn: string;
  phraseRu: string;
  color: string;
}

export interface GlossaryTerm {
  id: string;
  termEn: string;
  termRu: string;
  definitionEn: string;
  definitionRu: string;
}
