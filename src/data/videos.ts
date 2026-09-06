import { VideoCategory, VideoItem } from '../types';

/** Channel: https://www.youtube.com/@GeraSheriff */
export const CHANNEL_URL = 'https://www.youtube.com/@GeraSheriff';
export const CHANNEL_ID = 'UCfs30KXj2Iynp-sP9Z8dILg';
/** Fallback featured id if live YouTube fetch cannot be reached */
export const FEATURED_VIDEO_ID = 'CKMpI4k8uWo';


export const videoCategories: VideoCategory[] = [
  'police',
  'law',
  'immigration',
  'traffic',
  'firearms',
  'selfDefense',
  'news',
];

export const videos: VideoItem[] = [
  {
    id: 'v1',
    youtubeId: 'hPDfZk8wE_A',
    titleEn: 'Total surveillance begins — regardless of immigration status',
    titleRu: 'Начинается тотальная слежка — независимо от иммиграционного статуса',
    category: 'immigration',
  },
  {
    id: 'v2',
    youtubeId: 'hPDfZk8wE_A',
    titleEn: 'How police stops work in Florida',
    titleRu: 'Как проходят остановки полицией во Флориде',
    category: 'police',
  },
  {
    id: 'v3',
    youtubeId: 'hPDfZk8wE_A',
    titleEn: 'Your rights when talking to law enforcement',
    titleRu: 'Ваши права при общении с полицией',
    category: 'law',
  },
  {
    id: 'v4',
    youtubeId: 'hPDfZk8wE_A',
    titleEn: 'Traffic stop: what to do and say',
    titleRu: 'Дорожная остановка: что делать и говорить',
    category: 'traffic',
  },
  {
    id: 'v5',
    youtubeId: 'hPDfZk8wE_A',
    titleEn: 'Florida firearms rules for residents',
    titleRu: 'Правила оружия во Флориде для жителей',
    category: 'firearms',
  },
  {
    id: 'v6',
    youtubeId: 'hPDfZk8wE_A',
    titleEn: 'Self-defense basics under Florida law',
    titleRu: 'Основы самообороны по законам Флориды',
    category: 'selfDefense',
  },
  {
    id: 'v7',
    youtubeId: 'hPDfZk8wE_A',
    titleEn: 'Florida crime & law news roundup',
    titleRu: 'Обзор новостей о криминале и законах Флориды',
    category: 'news',
  },
  {
    id: 'v8',
    youtubeId: 'hPDfZk8wE_A',
    titleEn: 'Detective tips: what officers look for',
    titleRu: 'Советы детектива: на что смотрят полицейские',
    category: 'police',
  },
  {
    id: 'v9',
    youtubeId: 'hPDfZk8wE_A',
    titleEn: 'Immigration encounters and your documents',
    titleRu: 'Иммиграционные проверки и ваши документы',
    category: 'immigration',
  },
  {
    id: 'v10',
    youtubeId: 'hPDfZk8wE_A',
    titleEn: 'DUI and traffic law essentials',
    titleRu: 'Основы закона о DUI и дорожных нарушениях',
    category: 'traffic',
  },
];

export function videosByCategory(category: VideoCategory) {
  return videos.filter((v) => v.category === category);
}

export function youtubeWatchUrl(youtubeId: string) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export function youtubeEmbedUrl(youtubeId: string) {
  return `https://www.youtube.com/embed/${youtubeId}?playsinline=1&rel=0`;
}
