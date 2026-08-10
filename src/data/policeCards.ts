import { PoliceCard } from '../types';
import { colors } from '../theme/colors';

export const policeCards: PoliceCard[] = [
  {
    id: 'pc1',
    titleEn: 'I want an attorney',
    titleRu: 'Я хочу адвоката',
    phraseEn: 'I want an attorney. I will not answer questions without my lawyer present.',
    phraseRu: 'Я хочу адвоката. Я не буду отвечать на вопросы без присутствия моего адвоката.',
    color: colors.blue,
  },
  {
    id: 'pc2',
    titleEn: 'I choose to remain silent',
    titleRu: 'Я выбираю хранить молчание',
    phraseEn: 'I choose to remain silent. I invoke my right to remain silent.',
    phraseRu: 'Я выбираю хранить молчание. Я пользуюсь своим правом хранить молчание.',
    color: colors.blueBright,
  },
  {
    id: 'pc3',
    titleEn: 'I do not consent to a search',
    titleRu: 'Я не согласен на обыск',
    phraseEn: 'I do not consent to any search of my person, vehicle, or belongings.',
    phraseRu: 'Я не даю согласия на обыск меня, моего автомобиля или моих вещей.',
    color: colors.blueDeep,
  },
  {
    id: 'pc4',
    titleEn: "I don't understand English",
    titleRu: 'Я не понимаю английский',
    phraseEn: "I don't understand English. Please provide a Russian interpreter.",
    phraseRu: 'Я не понимаю английский. Пожалуйста, предоставьте русского переводчика.',
    color: colors.danger,
  },
];
