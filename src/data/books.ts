import { BookItem, Language } from '../types';

const COVER = {
  ice: 'https://gerasheriff.us/assets/book-ice.jpg',
  police1: 'https://gerasheriff.us/assets/book-police-1.jpg',
  /** Front cover only — remote asset is a full jacket wrap */
  police2: require('../../assets/book-previews/police-usa-2-cover.jpg'),
  weapons: 'https://gerasheriff.us/assets/book-weapons.jpg',
  dv: require('../../assets/book-previews/dv-usa-cover.jpg'),
} as const;

const PREVIEW = {
  ice: [
    require('../../assets/book-previews/ice-usa-page-1.png'),
    require('../../assets/book-previews/ice-usa-page-2.png'),
  ],
  police1: [
    require('../../assets/book-previews/police-usa-1-page-1.png'),
  ],
  weapons: [
    require('../../assets/book-previews/weapons-usa-page-1.png'),
    require('../../assets/book-previews/weapons-usa-page-2.png'),
  ],
  dv: [
    require('../../assets/book-previews/dv-usa-page-1.png'),
    require('../../assets/book-previews/dv-usa-page-2.png'),
  ],
} as const;

const amazon = (url: string): BookItem['stores'][number] => ({
  id: 'amazon',
  labelEn: 'Amazon',
  labelRu: 'Amazon',
  labelEs: 'Amazon',
  labelPt: 'Amazon',
  labelHt: 'Amazon',
  url,
});

const ingramSpark = (url?: string): BookItem['stores'][number] => ({
  id: 'ingramspark',
  labelEn: 'Buy from author via IngramSpark',
  labelRu: 'Купить у автора через IngramSpark',
  labelEs: 'Comprar al autor vía IngramSpark',
  labelPt: 'Comprar do autor via IngramSpark',
  labelHt: 'Achte nan men otè a atravè IngramSpark',
  url,
});

/** Matches https://gerasheriff.us/#books — cover + Amazon / IngramSpark */
export const books: BookItem[] = [
  {
    id: 'ice-usa',
    titleEn: 'ICE in the USA',
    titleRu: 'ICE в США',
    author: 'German Bickbau (Gera Sheriff)',
    descriptionEn: 'Immigration control and dealing with ICE.',
    descriptionRu: 'Иммиграционный контроль и взаимодействие с ICE.',
    coverUrl: COVER.ice,
    previewPages: [...PREVIEW.ice],
    categoryEn: 'Immigration',
    categoryRu: 'Иммиграция',
    stores: [
      amazon('https://www.amazon.com/s?i=stripbooks&k=German+Bickbau+ICE+%D0%92+%D0%A1%D0%A8%D0%90'),
      ingramSpark(),
    ],
  },
  {
    id: 'police-usa-1',
    titleEn: 'Police in the USA',
    titleRu: 'Полиция в США',
    author: 'German Bickbau (Gera Sheriff)',
    descriptionEn: 'How an ordinary encounter can become a criminal case.',
    descriptionRu: 'Как обычный контакт может стать уголовным делом.',
    coverUrl: COVER.police1,
    previewPages: [...PREVIEW.police1],
    categoryEn: 'Police · Book One',
    categoryRu: 'Полиция · Книга первая',
    stores: [
      amazon('https://www.amazon.com/s?i=stripbooks&k=9798234198464'),
      ingramSpark(
        'https://shop.ingramspark.com/b/084?params=bplxwhIjTKnEHLWtlw0gNziUYpiHPJw7v3chlfnDpnA'
      ),
    ],
  },
  {
    id: 'police-usa-2',
    titleEn: 'Police in the USA',
    titleRu: 'Полиция в США',
    author: 'German Bickbau (Gera Sheriff)',
    descriptionEn: 'Continuation of the practical guide.',
    descriptionRu: 'Продолжение практического руководства.',
    coverUrl: COVER.police2,
    categoryEn: 'Police · Book Two',
    categoryRu: 'Полиция · Книга вторая',
    stores: [
      amazon(
        'https://www.amazon.com/s?i=stripbooks&k=German+Bickbau+%D0%9F%D0%BE%D0%BB%D0%B8%D1%86%D0%B8%D1%8F+%D0%B2+%D0%A1%D0%A8%D0%90+%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0+%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F'
      ),
      ingramSpark(
        'https://shop.ingramspark.com/b/084?params=MI3ndeY0aiv72YiTABxDurgNXFdf9NXfjq4QZGUXva2'
      ),
    ],
  },
  {
    id: 'weapons-usa',
    titleEn: 'Firearms in the USA',
    titleRu: 'Оружие в США',
    author: 'German Bickbau (Gera Sheriff)',
    descriptionEn: 'Owner responsibility and safety.',
    descriptionRu: 'Ответственность владельца и вопросы безопасности.',
    coverUrl: COVER.weapons,
    previewPages: [...PREVIEW.weapons],
    categoryEn: 'Firearms · Book Three',
    categoryRu: 'Оружие · Книга третья',
    stores: [
      amazon('https://www.amazon.com/s?i=stripbooks&k=9798234227812'),
      ingramSpark(),
    ],
  },
  {
    id: 'domestic-violence-usa',
    titleEn: 'Domestic Violence in the USA',
    titleRu: 'Домашнее насилие в США',
    author: 'German Bickbau (Gera Sheriff)',
    descriptionEn: 'An encyclopedia for understanding the issue and its consequences.',
    descriptionRu: 'Энциклопедия для понимания проблемы и её последствий.',
    coverUrl: COVER.dv,
    previewPages: [...PREVIEW.dv],
    categoryEn: 'Domestic Violence · First book in series',
    categoryRu: 'Домашнее насилие · Первая книга серии',
    stores: [
      amazon('https://www.amazon.com/s?i=stripbooks&k=9798234153555'),
      ingramSpark(
        'https://shop.ingramspark.com/b/084?params=UJgSI3rKQqWk9RNzEx89YbPBz2Dy2AIEd75wsAeuu5f'
      ),
    ],
  },
];

export function bookCoverSource(book: BookItem) {
  return typeof book.coverUrl === 'number' ? book.coverUrl : { uri: book.coverUrl };
}

export function bookPreviewSource(page: string | number) {
  return typeof page === 'number' ? page : { uri: page };
}

/** Cover first, then interior sample pages (if any). */
export function getBookPreviewPages(book: BookItem): Array<string | number> {
  const interior = book.previewPages ?? [];
  if (!interior.length) return [];
  return [book.coverUrl, ...interior];
}

export function bookStoreLabel(
  store: BookItem['stores'][number],
  language: Language
): string {
  switch (language) {
    case 'ru':
      return store.labelRu;
    case 'es':
      return store.labelEs;
    case 'pt':
      return store.labelPt;
    case 'ht':
      return store.labelHt;
    default:
      return store.labelEn;
  }
}

export function bookTitle(book: BookItem, language: Language): string {
  if (language === 'ru') return book.titleRu;
  return book.titleEn;
}

export function bookDescription(book: BookItem, language: Language): string {
  if (language === 'ru') return book.descriptionRu;
  return book.descriptionEn;
}

export function bookCategory(book: BookItem, language: Language): string {
  if (language === 'ru') return book.categoryRu;
  return book.categoryEn;
}
