import { Language } from '../types';

export const CONSULTATION_EMAIL = 'gerasheriff@pm.me';

export type ConsultationTopicId =
  | 'consultation'
  | 'classPolice'
  | 'classSafety'
  | 'classFirearms'
  | 'classGroup'
  | 'collaboration'
  | 'general';

export type ConsultationTopic = {
  id: ConsultationTopicId;
  labelEn: string;
  labelRu: string;
  labelEs: string;
  labelPt: string;
  labelHt: string;
};

/** Same topic list as https://gerasheriff.us/#consultations */
export const consultationTopics: ConsultationTopic[] = [
  {
    id: 'consultation',
    labelEn: 'Consultation',
    labelRu: 'Консультация',
    labelEs: 'Consulta',
    labelPt: 'Consulta',
    labelHt: 'Konsiltasyon',
  },
  {
    id: 'classPolice',
    labelEn: 'Class: talking with police',
    labelRu: 'Класс: общение с полицией',
    labelEs: 'Clase: comunicación con la policía',
    labelPt: 'Aula: comunicação com a polícia',
    labelHt: 'Klas: kominike ak lapolis',
  },
  {
    id: 'classSafety',
    labelEn: 'Class: personal safety',
    labelRu: 'Класс: личная безопасность',
    labelEs: 'Clase: seguridad personal',
    labelPt: 'Aula: segurança pessoal',
    labelHt: 'Klas: sekirite pèsonèl',
  },
  {
    id: 'classFirearms',
    labelEn: 'Class: firearms and responsibility',
    labelRu: 'Класс: оружие и ответственность',
    labelEs: 'Clase: armas y responsabilidad',
    labelPt: 'Aula: armas e responsabilidade',
    labelHt: 'Klas: zam ak responsablite',
  },
  {
    id: 'classGroup',
    labelEn: 'Organize a class for a group',
    labelRu: 'Организация класса для группы',
    labelEs: 'Organizar una clase para un grupo',
    labelPt: 'Organizar uma aula para um grupo',
    labelHt: 'Òganize yon klas pou yon gwoup',
  },
  {
    id: 'collaboration',
    labelEn: 'Collaboration',
    labelRu: 'Сотрудничество',
    labelEs: 'Colaboración',
    labelPt: 'Colaboração',
    labelHt: 'Kolaborasyon',
  },
  {
    id: 'general',
    labelEn: 'General question',
    labelRu: 'Общий вопрос',
    labelEs: 'Pregunta general',
    labelPt: 'Pergunta geral',
    labelHt: 'Kesyon jeneral',
  },
];

export function consultationTopicLabel(
  topic: ConsultationTopic,
  language: Language
): string {
  switch (language) {
    case 'ru':
      return topic.labelRu;
    case 'es':
      return topic.labelEs;
    case 'pt':
      return topic.labelPt;
    case 'ht':
      return topic.labelHt;
    default:
      return topic.labelEn;
  }
}

export function buildConsultationDraft(params: {
  language: Language;
  topicLabel: string;
  name: string;
  location: string;
  message: string;
}): { subject: string; body: string } {
  const { language, topicLabel, name, location, message } = params;
  const loc = location.trim();

  if (language === 'ru') {
    return {
      subject: `${topicLabel} — заявка из приложения Gera Sheriff`,
      body: [
        'Здравствуйте, Гера!',
        '',
        `Тема: ${topicLabel}`,
        `Имя: ${name.trim()}`,
        loc ? `Город / часовой пояс: ${loc}` : null,
        '',
        message.trim(),
        '',
        'Прошу сообщить о возможном формате, времени и стоимости.',
        '',
        'Спасибо!',
      ]
        .filter((line) => line !== null)
        .join('\n'),
    };
  }

  if (language === 'es') {
    return {
      subject: `${topicLabel} — solicitud desde la app Gera Sheriff`,
      body: [
        'Hola, Gera:',
        '',
        `Tema: ${topicLabel}`,
        `Nombre: ${name.trim()}`,
        loc ? `Ciudad / zona horaria: ${loc}` : null,
        '',
        message.trim(),
        '',
        'Por favor indíqueme el formato, horario y costo posibles.',
        '',
        '¡Gracias!',
      ]
        .filter((line) => line !== null)
        .join('\n'),
    };
  }

  if (language === 'pt') {
    return {
      subject: `${topicLabel} — pedido pelo app Gera Sheriff`,
      body: [
        'Olá, Gera!',
        '',
        `Assunto: ${topicLabel}`,
        `Nome: ${name.trim()}`,
        loc ? `Cidade / fuso horário: ${loc}` : null,
        '',
        message.trim(),
        '',
        'Peço que informe o formato, horário e custo possíveis.',
        '',
        'Obrigado!',
      ]
        .filter((line) => line !== null)
        .join('\n'),
    };
  }

  if (language === 'ht') {
    return {
      subject: `${topicLabel} — demann nan aplikasyon Gera Sheriff`,
      body: [
        'Bonjou, Gera!',
        '',
        `Sijè: ${topicLabel}`,
        `Non: ${name.trim()}`,
        loc ? `Vil / zon lè: ${loc}` : null,
        '',
        message.trim(),
        '',
        'Tanpri fè m konnen posib fòma, lè ak pri.',
        '',
        'Mèsi!',
      ]
        .filter((line) => line !== null)
        .join('\n'),
    };
  }

  return {
    subject: `${topicLabel} — inquiry from the Gera Sheriff app`,
    body: [
      'Hello, Gera!',
      '',
      `Topic: ${topicLabel}`,
      `Name: ${name.trim()}`,
      loc ? `City / time zone: ${loc}` : null,
      '',
      message.trim(),
      '',
      'Please let me know about possible format, timing, and cost.',
      '',
      'Thank you!',
    ]
      .filter((line) => line !== null)
      .join('\n'),
  };
}
