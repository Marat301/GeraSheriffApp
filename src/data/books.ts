import { BookItem } from '../types';

export const books: BookItem[] = [
  {
    id: 'b1',
    titleEn: 'Know Your Rights in Florida',
    titleRu: 'Знайте свои права во Флориде',
    author: 'Gera Sheriff',
    descriptionEn:
      'A practical guide for immigrants on interacting with police, traffic stops, and basic Florida law.',
    descriptionRu:
      'Практическое руководство для иммигрантов о общении с полицией, дорожных остановках и основах права Флориды.',
    amazonUrl: 'https://www.amazon.com/s?k=florida+know+your+rights',
    ibooksUrl: 'https://books.apple.com/us/search?term=florida%20know%20your%20rights',
  },
  {
    id: 'b2',
    titleEn: 'Starting Life in the USA',
    titleRu: 'Начало жизни в США',
    author: 'Various',
    descriptionEn:
      'Orientation for newcomers: documents, banking, healthcare, driving, and community resources.',
    descriptionRu:
      'Ориентация для новичков: документы, банки, медицина, вождение и ресурсы сообщества.',
    amazonUrl: 'https://www.amazon.com/s?k=immigrant+guide+usa',
    ibooksUrl: 'https://books.apple.com/us/search?term=immigrant%20guide%20usa',
  },
  {
    id: 'b3',
    titleEn: 'Florida Driver Handbook Essentials',
    titleRu: 'Основы справочника водителя Флориды',
    author: 'FLHSMV',
    descriptionEn: 'Key rules of the road every new Florida driver should know.',
    descriptionRu: 'Ключевые правила дорожного движения для новых водителей Флориды.',
    amazonUrl: 'https://www.amazon.com/s?k=florida+driver+handbook',
    ibooksUrl: 'https://books.apple.com/us/search?term=florida%20driver%20handbook',
  },
];
