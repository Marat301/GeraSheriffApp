import { BookItem } from '../types';

const APPLE_BOOKS_RU =
  'https://books.apple.com/us/book/%D1%8D%D0%BD%D1%86%D0%B8%D0%BA%D0%BB%D0%BE%D0%BF%D0%B5%D0%B4%D0%B8%D1%8F-%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B5%D0%B3%D0%BE-%D0%BD%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F-%D0%B2-%D1%81%D1%88%D0%B0/id6793154864';

const APPLE_BOOKS_ES =
  'https://books.apple.com/us/book/violencia-dom%C3%A9stica-en-estados-unidos/id6798546637';

/** Print edition link promoted on the Gera Sheriff YouTube channel */
const INGRAMSPARK_PRINT =
  'https://shop.ingramspark.com/b/084?params=UJgSI3rKQqWk9RNzEx89YbPBz2Dy2AIEd75wsAeuu5f';

const AMAZON_SEARCH =
  'https://www.amazon.com/s?k=%D0%AD%D0%BD%D1%86%D0%B8%D0%BA%D0%BB%D0%BE%D0%BF%D0%B5%D0%B4%D0%B8%D1%8F+%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B5%D0%B3%D0%BE+%D0%BD%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F+%D0%B2+%D0%A1%D0%A8%D0%90+German+Bickbau';

const KINDLE_SEARCH =
  'https://www.amazon.com/s?k=German+Bickbau+%D0%AD%D0%BD%D1%86%D0%B8%D0%BA%D0%BB%D0%BE%D0%BF%D0%B5%D0%B4%D0%B8%D1%8F+%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B5%D0%B3%D0%BE+%D0%BD%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F&i=digital-text';

const EVERAND_AUTHOR = 'https://www.everand.com/author/1006828660/German-Bickbau';

const GOOGLE_PLAY_SEARCH =
  'https://play.google.com/store/search?q=%D0%AD%D0%BD%D1%86%D0%B8%D0%BA%D0%BB%D0%BE%D0%BF%D0%B5%D0%B4%D0%B8%D1%8F%20%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%BD%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F%20%D0%B2%20%D0%A1%D0%A8%D0%90%20German%20Bickbau&c=books';

export const books: BookItem[] = [
  {
    id: 'domestic-violence-usa',
    titleEn: 'Encyclopedia of Domestic Violence in the USA',
    titleRu: 'Энциклопедия домашнего насилия в США',
    author: 'German Bickbau (Gera Sheriff)',
    descriptionEn:
      'A plain-language guide to how police, prosecutors, and courts in the USA handle domestic violence — including protective orders, stalking, immigration, firearms, children, and common mistakes.',
    descriptionRu:
      'Простым языком о том, как в США работают полиция, прокуратура и суды по делам о домашнем насилии — запреты, преследование, иммиграция, оружие, дети и типичные ошибки.',
    stores: [
      {
        id: 'apple',
        labelEn: 'Apple Books',
        labelRu: 'Apple Books',
        url: APPLE_BOOKS_RU,
      },
      {
        id: 'apple-es',
        labelEn: 'Apple Books (Spanish)',
        labelRu: 'Apple Books (исп.)',
        url: APPLE_BOOKS_ES,
      },
      {
        id: 'print',
        labelEn: 'Paperback (IngramSpark)',
        labelRu: 'Бумага (IngramSpark)',
        url: INGRAMSPARK_PRINT,
      },
      {
        id: 'amazon',
        labelEn: 'Amazon',
        labelRu: 'Amazon',
        url: AMAZON_SEARCH,
      },
      {
        id: 'kindle',
        labelEn: 'Kindle / Amazon eBook',
        labelRu: 'Kindle / Amazon eBook',
        url: KINDLE_SEARCH,
      },
      {
        id: 'google-play',
        labelEn: 'Google Play Books',
        labelRu: 'Google Play Книги',
        url: GOOGLE_PLAY_SEARCH,
      },
      {
        id: 'everand',
        labelEn: 'Everand / Scribd',
        labelRu: 'Everand / Scribd',
        url: EVERAND_AUTHOR,
      },
    ],
  },
];
