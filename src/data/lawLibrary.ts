import { LawLibraryArticle, LawLibraryCategory } from '../types';

export const lawLibraryCategories: LawLibraryCategory[] = [
  {
    id: 'criminal',
    titleEn: 'Criminal Law',
    titleRu: 'Уголовное право',
    icon: 'shield',
    summaryEn: 'Arrests, charges, rights, and how Florida criminal cases generally work.',
    summaryRu: 'Арест, обвинения, права и как обычно проходит уголовное дело во Флориде.',
  },
  {
    id: 'traffic',
    titleEn: 'Traffic Law',
    titleRu: 'Дорожное право',
    icon: 'car',
    summaryEn: 'Tickets, DUI, license points, and what to do after a stop or crash.',
    summaryRu: 'Штрафы, DUI, баллы, остановка и ДТП во Флориде.',
  },
  {
    id: 'firearms',
    titleEn: 'Firearms',
    titleRu: 'Огнестрельное оружие',
    icon: 'flash',
    summaryEn: 'Ownership, carry rules, prohibited places, and basic Florida firearm laws.',
    summaryRu: 'Владение, ношение, запрещённые места и основы законов Флориды об оружии.',
  },
  {
    id: 'selfDefense',
    titleEn: 'Self-Defense',
    titleRu: 'Самооборона',
    icon: 'hand-left',
    summaryEn: 'When force may be justified, Stand Your Ground basics, and what to say after an incident.',
    summaryRu: 'Когда сила может быть оправдана, Stand Your Ground и что говорить после инцидента.',
  },
  {
    id: 'domesticViolence',
    titleEn: 'Domestic Violence',
    titleRu: 'Домашнее насилие',
    icon: 'heart',
    summaryEn: 'Protection orders, arrests, evidence, and safety resources in Florida.',
    summaryRu: 'Охранные ордера, аресты, доказательства и помощь во Флориде.',
  },
  {
    id: 'immigration',
    titleEn: 'Immigration-related issues',
    titleRu: 'Иммиграционные вопросы',
    icon: 'globe',
    summaryEn: 'How local police, courts, and ICE can intersect — and what rights you still have.',
    summaryRu: 'Как пересекаются полиция, суды и ICE — и какие права у вас остаются.',
  },
  {
    id: 'courtProcedures',
    titleEn: 'Court procedures',
    titleRu: 'Судебные процедуры',
    icon: 'business',
    summaryEn: 'Arraignment, bail, hearings, interpreters, and how to show up prepared.',
    summaryRu: 'Arraignment, залог, слушания, переводчик и как прийти подготовленным.',
  },
];

export const lawLibraryArticles: LawLibraryArticle[] = [
  // —— Criminal Law ——
  {
    id: 'cr-arrest',
    categoryId: 'criminal',
    titleEn: 'Arrest vs. detention',
    titleRu: 'Арест и задержание',
    summaryEn: 'Know whether you are free to leave.',
    summaryRu: 'Поймите, свободны ли вы уйти.',
    bodyEn:
      'If you are not free to leave, you are being detained or arrested. Ask: “Am I free to leave?” You may remain silent and ask for a lawyer. Physical resistance can lead to extra charges. After booking, note time, location, and officer names.',
    bodyRu:
      'Если вы не свободны уйти — это задержание или арест. Спросите: “Am I free to leave?” Можете молчать и просить адвоката. Физическое сопротивление может дать новые обвинения. После booking запишите время, место и имена офицеров.',
  },
  {
    id: 'cr-miranda',
    categoryId: 'criminal',
    titleEn: 'Miranda & silence',
    titleRu: 'Миранда и право молчать',
    summaryEn: 'You do not have to explain the incident.',
    summaryRu: 'Не обязаны объяснять ситуацию.',
    bodyEn:
      'Miranda warnings apply to custodial interrogation. Even before warnings, you can say: “I choose to remain silent. I want an attorney.” Do not guess, joke, or “clear things up” without counsel. Silence itself is generally not an admission of guilt.',
    bodyRu:
      'Предупреждения Миранды нужны при допросе в статусе задержанного. Даже раньше можно сказать: “I choose to remain silent. I want an attorney.” Не угадывайте и не «проясняйте» без адвоката. Молчание само по себе обычно не признание вины.',
  },
  {
    id: 'cr-felony-misdemeanor',
    categoryId: 'criminal',
    titleEn: 'Felony vs. misdemeanor',
    titleRu: 'Felony и misdemeanor',
    summaryEn: 'Charge level changes court and consequences.',
    summaryRu: 'Уровень обвинения меняет суд и последствия.',
    bodyEn:
      'In Florida, misdemeanors are generally less serious (often county court); felonies are more serious (often circuit court) and can mean prison, firearm restrictions, and long-term record issues. Ask your lawyer what the exact statute and maximum penalties are for your charge.',
    bodyRu:
      'Во Флориде misdemeanor обычно легче (часто county court); felony серьёзнее (часто circuit court) и может означать тюрьму, ограничения по оружию и долгий след в записи. Уточните у адвоката точный статут и максимум наказания.',
  },
  {
    id: 'cr-search',
    categoryId: 'criminal',
    titleEn: 'Searches & consent',
    titleRu: 'Обыск и согласие',
    summaryEn: 'Clear refusal matters.',
    summaryRu: 'Чёткий отказ важен.',
    bodyEn:
      'Police may search with a warrant, certain exceptions, or your consent. You can say: “I do not consent to any search.” Do not physically block officers. If they search anyway, stay calm and tell your lawyer later — do not argue on the scene.',
    bodyRu:
      'Полиция может обыскивать по ордеру, при исключениях или с вашего согласия. Можно сказать: “I do not consent to any search.” Не блокируйте офицеров физически. Если обыск всё равно идёт — сохраняйте спокойствие и расскажите адвокату позже.',
  },

  // —— Traffic Law ——
  {
    id: 'tr-stop',
    categoryId: 'traffic',
    titleEn: 'Traffic stop basics',
    titleRu: 'Основы дорожной остановки',
    summaryEn: 'License, registration, insurance.',
    summaryRu: 'Права, регистрация, страховка.',
    bodyEn:
      'Pull over safely, keep hands visible, and provide license, registration, and proof of insurance when asked. You may remain silent about where you are going. If you do not understand English, say so and ask for an interpreter. Do not argue the ticket on the roadside.',
    bodyRu:
      'Остановитесь безопасно, держите руки на виду и предъявите права, регистрацию и страховку по требованию. Можете не рассказывать, куда едете. Если не понимаете английский — скажите и попросите переводчика. Не спорьте о штрафе на обочине.',
  },
  {
    id: 'tr-ticket',
    categoryId: 'traffic',
    titleEn: 'Tickets & points',
    titleRu: 'Штрафы и баллы',
    summaryEn: 'Pay, dispute, or take a course — deadlines matter.',
    summaryRu: 'Оплатить, оспорить или курс — важны сроки.',
    bodyEn:
      'Florida traffic citations can add points to your license. Options may include paying, requesting a hearing, or (for some tickets) a driver improvement course. Read the citation for deadlines. Ignoring a ticket can suspend your license.',
    bodyRu:
      'Штрафы во Флориде могут добавить баллы. Варианты: оплата, слушание или (для части билетов) курс водителя. Смотрите сроки на бланке. Игнорирование может привести к приостановке прав.',
  },
  {
    id: 'tr-dui',
    categoryId: 'traffic',
    titleEn: 'DUI overview',
    titleRu: 'DUI — обзор',
    summaryEn: 'Criminal case + DMV license action.',
    summaryRu: 'Уголовное дело и действия DMV.',
    bodyEn:
      'Driving under the influence is a criminal offense in Florida and can also trigger a separate DMV license suspension. Chemical tests and refusals have legal consequences. Ask for a lawyer before answering detailed questions. Act quickly on any DMV deadline papers you receive.',
    bodyRu:
      'Вождение в состоянии опьянения — уголовное правонарушение во Флориде и отдельно может затронуть права через DMV. Тесты и отказ от теста имеют последствия. Просите адвоката до подробных ответов. Сразу реагируйте на сроки в бумагах DMV.',
  },
  {
    id: 'tr-crash',
    categoryId: 'traffic',
    titleEn: 'After a crash',
    titleRu: 'После ДТП',
    summaryEn: 'Safety first, then exchange info.',
    summaryRu: 'Сначала безопасность, потом обмен данными.',
    bodyEn:
      'Call 911 if anyone is hurt. Move out of traffic if safe and required. Exchange names, insurance, and plate info. Take photos. Do not admit fault at the scene. Florida has reporting rules for certain crashes — follow the citation/report instructions and call your insurer promptly.',
    bodyRu:
      'При травмах звоните 911. Уберите авто с дороги, если безопасно и требуется. Обменяйтесь данными и страховкой. Сделайте фото. Не признавайте вину на месте. Во Флориде есть правила отчётов для части ДТП — следуйте инструкциям и сразу звоните в страховку.',
  },

  // —— Firearms ——
  {
    id: 'fa-own',
    categoryId: 'firearms',
    titleEn: 'Who may possess',
    titleRu: 'Кто может владеть',
    summaryEn: 'Status and history can ban possession.',
    summaryRu: 'Статус и прошлое могут запретить владение.',
    bodyEn:
      'Florida and federal law restrict firearm possession for certain people (for example, some felony convictions, certain domestic violence orders, or other disqualifiers). Immigration status and prior records can matter. If unsure, get advice from a qualified attorney before buying or carrying.',
    bodyRu:
      'Законы Флориды и федеральные законы ограничивают владение для ряда лиц (например, некоторые felony, ордера по DV и другие запреты). Иммиграционный статус и прошлое могут иметь значение. Если не уверены — спросите квалифицированного адвоката до покупки или ношения.',
  },
  {
    id: 'fa-carry',
    categoryId: 'firearms',
    titleEn: 'Carry rules (high level)',
    titleRu: 'Ношение (кратко)',
    summaryEn: 'Open/concealed rules change — verify current law.',
    summaryRu: 'Правила меняются — проверяйте актуальный закон.',
    bodyEn:
      'Florida firearm carry rules have changed in recent years. Always verify current statutes before carrying. Even when carry is lawful, you must still follow prohibited-place rules and lawful orders from police. Never brandish a firearm to intimidate during an argument.',
    bodyRu:
      'Правила ношения во Флориде менялись в последние годы. Перед ношением проверяйте актуальные статуты. Даже при законном ношении действуют запрещённые места и законные приказы полиции. Не демонстрируйте оружие для запугивания в ссоре.',
  },
  {
    id: 'fa-places',
    categoryId: 'firearms',
    titleEn: 'Prohibited places',
    titleRu: 'Запрещённые места',
    summaryEn: 'Schools, courthouses, and posted locations.',
    summaryRu: 'Школы, суды и места с запретом.',
    bodyEn:
      'Firearms are restricted or banned in many places (for example, schools, courthouses, and some government buildings). Private property owners may also prohibit firearms. Ignore signs and rules at your legal risk. When in doubt, leave the firearm secured lawfully elsewhere.',
    bodyRu:
      'Оружие ограничено или запрещено во многих местах (школы, суды, часть госучреждений). Частные владельцы тоже могут запрещать. Игнорирование — на ваш риск. Если сомневаетесь — оставьте оружие законно и безопасно в другом месте.',
  },
  {
    id: 'fa-police',
    categoryId: 'firearms',
    titleEn: 'If stopped while armed',
    titleRu: 'Если остановили с оружием',
    summaryEn: 'Hands visible; follow lawful orders.',
    summaryRu: 'Руки на виду; выполняйте законные команды.',
    bodyEn:
      'Keep hands visible. Follow lawful instructions. If you are required to disclose that you are armed, do so calmly. Do not reach for the firearm unless directed. Ask for a lawyer if the stop becomes an investigation beyond a routine traffic matter.',
    bodyRu:
      'Держите руки на виду. Следуйте законным указаниям. Если обязаны сообщить, что вооружены — скажите спокойно. Не тянитесь к оружию без команды. Просите адвоката, если остановка переходит в расследование.',
  },

  // —— Self-Defense ——
  {
    id: 'sd-force',
    categoryId: 'selfDefense',
    titleEn: 'When force may be justified',
    titleRu: 'Когда сила может быть оправдана',
    summaryEn: 'Threat, necessity, and proportionality matter.',
    summaryRu: 'Важны угроза, необходимость и соразмерность.',
    bodyEn:
      'Florida self-defense law generally focuses on whether you reasonably believed force was necessary to prevent imminent harm. Deadly force has stricter limits. Self-defense is a legal defense evaluated with facts — it is not a blank license to fight. Educational only; get case-specific advice from a lawyer.',
    bodyRu:
      'Закон Флориды о самообороне обычно смотрит, разумно ли вы считали силу необходимой против неминуемой угрозы. Смертельная сила ограничена строже. Самооборона — защита в суде по фактам, а не «разрешение драться». Только обучение; по делу — к адвокату.',
  },
  {
    id: 'sd-syg',
    categoryId: 'selfDefense',
    titleEn: 'Stand Your Ground (basics)',
    titleRu: 'Stand Your Ground (основы)',
    summaryEn: 'No duty to retreat in some situations — still fact-heavy.',
    summaryRu: 'В части ситуаций нет обязанности отступать — всё по фактам.',
    bodyEn:
      'Florida’s Stand Your Ground framework can remove a duty to retreat in certain circumstances when you are where you have a right to be and are not engaged in criminal activity. It does not protect unlawful aggression. These cases are highly fact-specific — speak with a defense attorney promptly after any use-of-force incident.',
    bodyRu:
      'Stand Your Ground во Флориде в части ситуаций снимает обязанность отступать, если вы законно находитесь на месте и не совершаете преступление. Это не защищает незаконную агрессию. Дела очень зависят от фактов — после применения силы сразу к адвокату.',
  },
  {
    id: 'sd-after',
    categoryId: 'selfDefense',
    titleEn: 'After a self-defense incident',
    titleRu: 'После инцидента самообороны',
    summaryEn: 'Call 911, request help, then lawyer.',
    summaryRu: '911, помощь, затем адвокат.',
    bodyEn:
      'Call 911 if anyone is hurt. Move to safety. Give location and that you need help. Avoid long narratives on scene; request a lawyer. Preserve evidence (do not alter the scene). Seek medical care and document injuries. Do not post about the incident on social media.',
    bodyRu:
      'При травмах звоните 911. Уйдите в безопасность. Назовите адрес и что нужна помощь. Не давайте длинных объяснений на месте; просите адвоката. Не меняйте место происшествия. Обратитесь к врачу и зафиксируйте травмы. Не пишите об этом в соцсетях.',
  },

  // —— Domestic Violence ——
  {
    id: 'dv-911',
    categoryId: 'domesticViolence',
    titleEn: 'Immediate danger',
    titleRu: 'Непосредственная опасность',
    summaryEn: 'Safety first — call 911.',
    summaryRu: 'Сначала безопасность — 911.',
    bodyEn:
      'If you or children are in danger now, call 911. Go to a safe place when possible. National DV Hotline: 1-800-799-7233. You can ask police for a Russian interpreter. Keep a packed bag and important documents ready if you need to leave quickly.',
    bodyRu:
      'Если сейчас опасность вам или детям — звоните 911. Уйдите в безопасное место. Нац. линия: 1-800-799-7233. Можете попросить русского переводчика. Держите собранную сумку и документы на случай срочного ухода.',
  },
  {
    id: 'dv-arrest',
    categoryId: 'domesticViolence',
    titleEn: 'Police response in Florida',
    titleRu: 'Реакция полиции во Флориде',
    summaryEn: 'Arrest may happen even if you later feel pressured to stop the case.',
    summaryRu: 'Арест возможен, даже если потом уговаривают «забрать заявление».',
    bodyEn:
      'Florida officers may arrest when they find probable cause that domestic violence occurred. Tell them clearly what happened, when, and any injuries or threats. Photos, messages, and medical records can matter. Ask for the case/report number.',
    bodyRu:
      'Во Флориде полиция может арестовать при вероятной причине домашнего насилия. Чётко скажите, что и когда произошло, есть ли травмы или угрозы. Важны фото, сообщения и медзаписи. Попросите номер дела/отчёта.',
  },
  {
    id: 'dv-injunction',
    categoryId: 'domesticViolence',
    titleEn: 'Injunctions (protective orders)',
    titleRu: 'Injunction (охранный ордер)',
    summaryEn: 'Court orders that can limit contact and proximity.',
    summaryRu: 'Судебный ордер может ограничить контакт и приближение.',
    bodyEn:
      'You may petition the court for an injunction for protection. If granted, violations can lead to arrest. Keep a copy with you. If you are served with an injunction, obey it and contact a lawyer immediately — do not contact the protected person to “work it out.”',
    bodyRu:
      'Можно подать в суд на injunction for protection. При нарушении возможен арест. Держите копию при себе. Если вам вручили injunction — соблюдайте и сразу к адвокату; не пишите защищаемому лицу «помириться».',
  },
  {
    id: 'dv-evidence',
    categoryId: 'domesticViolence',
    titleEn: 'Evidence & support',
    titleRu: 'Доказательства и поддержка',
    summaryEn: 'Document safely; use victim services.',
    summaryRu: 'Фиксируйте безопасно; используйте помощь жертвам.',
    bodyEn:
      'Save threatening messages, voicemails, and photos of injuries or damage if it is safe to do so. Ask about victim advocates at the courthouse or through local shelters. Educational info only — an attorney or advocate can help with your specific situation.',
    bodyRu:
      'Сохраняйте угрожающие сообщения, голосовые и фото травм/повреждений, если это безопасно. Спросите об адвокатах жертв в суде или приютах. Только обучение — по вашей ситуации помогут адвокат или advocate.',
  },

  // —— Immigration ——
  {
    id: 'im-rights',
    categoryId: 'immigration',
    titleEn: 'Rights during encounters',
    titleRu: 'Права при контактах',
    summaryEn: 'Silence, lawyer, no false papers.',
    summaryRu: 'Молчание, адвокат, без поддельных бумаг.',
    bodyEn:
      'You generally have the right to remain silent and to ask for a lawyer. Do not lie or present false documents. Ask: “Am I free to leave?” If ICE or police ask about status, you may decline to answer until you speak with counsel. Carry a family emergency plan with attorney contacts.',
    bodyRu:
      'Обычно есть право молчать и просить адвоката. Не лгите и не показывайте поддельные документы. Спросите: “Am I free to leave?” На вопросы о статусе можете не отвечать до разговора с адвокатом. Держите план ЧП с контактами адвоката.',
  },
  {
    id: 'im-warrants',
    categoryId: 'immigration',
    titleEn: 'Warrants at the door',
    titleRu: 'Ордера у двери',
    summaryEn: 'Judicial vs. administrative warrants.',
    summaryRu: 'Судебный и административный ордер.',
    bodyEn:
      'You can ask officers to slip a warrant under the door or hold it to a window. A warrant signed by a judge for your address is different from an administrative ICE warrant (such as Form I-200 / I-205). Do not open the door based only on verbal demands. Contact an immigration attorney as soon as possible.',
    bodyRu:
      'Можно попросить просунуть ордер под дверь или показать в окно. Ордер судьи на ваш адрес — не то же самое, что административный ордер ICE (например Form I-200 / I-205). Не открывайте дверь только по устному требованию. Срочно свяжитесь с иммиграционным адвокатом.',
  },
  {
    id: 'im-local',
    categoryId: 'immigration',
    titleEn: 'Local police & immigration',
    titleRu: 'Местная полиция и иммиграция',
    summaryEn: 'A traffic stop is not automatically deportation — but risk exists.',
    summaryRu: 'Остановка ≠ автоматически депортация, но риск есть.',
    bodyEn:
      'Local police handle state crimes and traffic. Immigration enforcement is primarily federal (ICE). Still, arrests and fingerprints can create immigration consequences. Do not discuss immigration status casually with officers. Get lawyer advice after any arrest or ICE contact.',
    bodyRu:
      'Местная полиция ведёт штатные преступления и трафик. Иммиграция в основном федеральная (ICE). Но арест и отпечатки могут иметь иммиграционные последствия. Не обсуждайте статус «между делом». После ареста или контакта с ICE — к адвокату.',
  },
  {
    id: 'im-court',
    categoryId: 'immigration',
    titleEn: 'Criminal court & immigration',
    titleRu: 'Уголовный суд и иммиграция',
    summaryEn: 'Pleas can affect status — ask before pleading.',
    summaryRu: 'Сделки могут затронуть статус — спросите до признания.',
    bodyEn:
      'Some criminal convictions or pleas can affect visas, green cards, or naturalization. Before accepting a plea, ask your criminal lawyer about immigration consequences (or consult an immigration attorney). Never skip court dates.',
    bodyRu:
      'Некоторые приговоры или сделки влияют на визу, грин-карту или натурализацию. Перед plea спросите уголовного адвоката об иммиграционных последствиях (или иммиграционного адвоката). Никогда не пропускайте суд.',
  },

  // —— Court procedures ——
  {
    id: 'ct-arraign',
    categoryId: 'courtProcedures',
    titleEn: 'Arraignment',
    titleRu: 'Arraignment (первое предъявление)',
    summaryEn: 'Charges are read; you enter a plea.',
    summaryRu: 'Зачитывают обвинения; вы делаете plea.',
    bodyEn:
      'At arraignment the court tells you the charges and you typically enter a plea (often not guilty at the start). Dress neatly, arrive early, and bring ID. If you need a Russian interpreter, tell the clerk or judge immediately.',
    bodyRu:
      'На arraignment суд сообщает обвинения, и вы обычно делаете plea (часто сначала not guilty). Оденьтесь аккуратно, придите заранее, возьмите ID. Нужен русский переводчик — сразу скажите клерку или судье.',
  },
  {
    id: 'ct-bail',
    categoryId: 'courtProcedures',
    titleEn: 'Bail / bond',
    titleRu: 'Bail / bond (залог)',
    summaryEn: 'Conditions can include no-contact orders.',
    summaryRu: 'Условия могут включать запрет контакта.',
    bodyEn:
      'Bail or bond may allow release before trial with conditions (for example, no contact with a victim, travel limits, or check-ins). Violating conditions can mean re-arrest. Ask your lawyer what each condition means before you leave custody.',
    bodyRu:
      'Bail/bond может дать освобождение до суда с условиями (запрет контакта, лимиты поездок, явки). Нарушение — повторный арест. Уточните у адвоката каждое условие до выхода.',
  },
  {
    id: 'ct-hearing',
    categoryId: 'courtProcedures',
    titleEn: 'Hearings & appearance',
    titleRu: 'Слушания и явка',
    summaryEn: 'Missing court can create a warrant.',
    summaryRu: 'Пропуск суда может дать ордер.',
    bodyEn:
      'Know your courtroom, date, and time. Missing a hearing can lead to a bench warrant. Turn off your phone, do not interrupt the judge, and speak only when asked. Bring paperwork your lawyer told you to bring. If you cannot attend, contact your lawyer before the hearing — do not just skip it.',
    bodyRu:
      'Знайте зал, дату и время. Пропуск может привести к bench warrant. Телефон выключите, не перебивайте судью, говорите когда спросят. Возьмите документы, которые сказал адвокат. Если не можете прийти — свяжитесь с адвокатом заранее, не просто пропускайте.',
  },
  {
    id: 'ct-interpreter',
    categoryId: 'courtProcedures',
    titleEn: 'Interpreters & documents',
    titleRu: 'Переводчик и документы',
    summaryEn: 'You can ask for language help.',
    summaryRu: 'Можно просить языковую помощь.',
    bodyEn:
      'Florida courts can provide interpreters for many hearings. Ask early. Do not sign documents you do not understand. Keep copies of all charging documents, bond papers, and court notices in one folder. When in doubt, pause and ask your attorney.',
    bodyRu:
      'Суды Флориды часто дают переводчика — просите заранее. Не подписывайте то, чего не понимаете. Храните копии обвинений, bond и повесток в одной папке. При сомнении — остановитесь и спросите адвоката.',
  },
];

export function getLawLibraryCategory(id: string) {
  return lawLibraryCategories.find((c) => c.id === id);
}

export function getLawLibraryArticlesForCategory(categoryId: string) {
  return lawLibraryArticles.filter((a) => a.categoryId === categoryId);
}

export function getLawLibraryArticle(id: string) {
  return lawLibraryArticles.find((a) => a.id === id);
}
