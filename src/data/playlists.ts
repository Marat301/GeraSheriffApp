export type PlaylistItem = {
  id: string;
  youtubePlaylistId: string;
  titleEn: string;
  titleRu: string;
  emoji: string;
};

/** Gera Sheriff channel playlists — https://www.youtube.com/@GeraSheriff/playlists */
export const playlists: PlaylistItem[] = [
  {
    id: 'police-rights',
    youtubePlaylistId: 'PLWgVX3VrNrIbTAn__R1ghW5eGrUj-VH6x',
    titleEn: 'Police stopped you — your rights',
    titleRu: 'Вас остановила полиция. Ваши права',
    emoji: '👮',
  },
  {
    id: 'crime-news',
    youtubePlaylistId: 'PLWgVX3VrNrIaReJTZJpE1rTnaCrBemt6t',
    titleEn: 'Another Florida — weekly crime news',
    titleRu: 'Другая Флорида. Криминальные новости за неделю',
    emoji: '📰',
  },
  {
    id: 'bodycam',
    youtubePlaylistId: 'PLWgVX3VrNrIau8AL2SD2YjZGeBmV-oQzm',
    titleEn: 'Police bodycam video reviews',
    titleRu: 'Разбор записей полицейских видеокамер',
    emoji: '📹',
  },
  {
    id: 'gangs',
    youtubePlaylistId: 'PLWgVX3VrNrIbJUQY-7seJ-5NIUZB5RWdR',
    titleEn: 'Gangs & organized crime',
    titleRu: 'Банды, ОПГ и МС',
    emoji: '⚠️',
  },
  {
    id: 'firearms',
    youtubePlaylistId: 'PLWgVX3VrNrIZdfAdPus3ajImDf6LaTu9l',
    titleEn: 'Firearms & the 2nd Amendment',
    titleRu: 'Оружие, прощай?',
    emoji: '🔫',
  },
  {
    id: 'cdl',
    youtubePlaylistId: 'PLWgVX3VrNrIZ5kP2FIwi5N8V5UjbPqlNZ',
    titleEn: 'CDL / truck drivers info',
    titleRu: 'Информация для водителей большегрузов (CDL)',
    emoji: '🚛',
  },
  {
    id: 'crime-ru',
    youtubePlaylistId: 'PLWgVX3VrNrIY_NlAbjCwSpp86gUdnKlii',
    titleEn: 'Crime stories (Russian language)',
    titleRu: 'Криминал с русским языком',
    emoji: '🕵️',
  },
  {
    id: 'florida-life',
    youtubePlaylistId: 'PLWgVX3VrNrIZeQcZACHnEb4y3K3WZ31Rl',
    titleEn: 'Florida — life without filters',
    titleRu: 'Флорида. Жизнь без прикрас',
    emoji: '🌴',
  },
  {
    id: 'detective-life',
    youtubePlaylistId: 'PLWgVX3VrNrIYDB28er1GQZWjFAwuPafUW',
    titleEn: 'Life of a retired detective in Florida',
    titleRu: 'Флорида. Как живется полицейскому детективу в отставке',
    emoji: '⭐',
  },
  {
    id: 'events',
    youtubePlaylistId: 'PLWgVX3VrNrIZg-3VOSj-ktJLL8LSpmOm3',
    titleEn: 'Events & current affairs',
    titleRu: 'События',
    emoji: '📅',
  },
  {
    id: 'qa',
    youtubePlaylistId: 'PLWgVX3VrNrIbO3VRUE3ZFhrnst5ZE4_1d',
    titleEn: 'Q&A',
    titleRu: 'Вопросы и ответы',
    emoji: '❓',
  },
  {
    id: 'interviews',
    youtubePlaylistId: 'PLWgVX3VrNrIYOpCiaQLyQe5lD-agd6cHv',
    titleEn: 'Interviews & meetings',
    titleRu: 'Мои встречи и интервью с интересными людьми',
    emoji: '🎙️',
  },
  {
    id: 'about',
    youtubePlaylistId: 'PLWgVX3VrNrIZ_RaAF1qnmgqeeozcBNAaT',
    titleEn: 'About Gera Sheriff',
    titleRu: 'Рассказываю о себе',
    emoji: '👤',
  },
  {
    id: 'movies',
    youtubePlaylistId: 'PLWgVX3VrNrIZUtSAcoJPRcWqvjoQB0bkO',
    titleEn: 'Movie reviews',
    titleRu: 'Разбор фильмов',
    emoji: '🎬',
  },
  {
    id: 'thailand',
    youtubePlaylistId: 'PLWgVX3VrNrIYvUL5I2awGB-jY3rYX6PHG',
    titleEn: 'Thailand',
    titleRu: 'Тайланд',
    emoji: '🇹🇭',
  },
];

export function getPlaylist(id: string) {
  return playlists.find((p) => p.id === id || p.youtubePlaylistId === id);
}

export function youtubePlaylistUrl(playlistId: string) {
  return `https://www.youtube.com/playlist?list=${playlistId}`;
}
