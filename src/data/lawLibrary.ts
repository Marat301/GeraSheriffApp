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
    summaryEn:
      'Voluntary encounter, temporary detention, arrest, silence, counsel, searches, booking, and what to document.',
    summaryRu:
      'Добровольный контакт, временное задержание, арест, молчание, адвокат, обыски, booking и что фиксировать.',
    bodyEn: `1. Voluntary Encounter, Detention, and Arrest

Voluntary Encounter (Consensual Encounter)

A police officer may approach you in public, ask questions, or request identification without necessarily detaining you. If the encounter is voluntary, you generally have the right to refuse to answer questions and walk away.

The simplest way to clarify your situation is to ask:

“Officer, am I free to leave?”

If the officer says yes, you may calmly leave. Do not run or make sudden movements.

Temporary Detention (Investigative Stop)

An officer may temporarily detain you when there is reasonable, articulable suspicion that you are involved in criminal activity.

Reasonable suspicion requires specific, objective facts. It is a lower legal standard than probable cause, which is generally necessary for an arrest.

During a lawful detention:

• You are temporarily not free to leave.
• Officers may ask questions related to their investigation.
• You generally have the right to remain silent, subject to identification requirements under applicable state law.
• Officers may conduct a limited pat-down of your outer clothing when they reasonably suspect you are armed and dangerous.
• Detention must be limited in duration and scope to what is legally justified.

Detention does not automatically mean you will be arrested. If the investigation does not establish grounds for further lawful restraint, you must be released.

Arrest

An arrest is a more significant restriction of your freedom and generally requires probable cause to believe you committed a crime.

Officers may place you in handcuffs, search you within lawful limits, transport you to a detention facility, and initiate booking procedures.

However, handcuffs alone do not always establish that an arrest has occurred. Courts examine the circumstances, including the degree and duration of restraint.

Likewise, an officer’s description of an encounter as merely a detention does not necessarily make it legally one. An excessively intrusive or prolonged detention can become an arrest requiring probable cause.

2. Your Right to Remain Silent

The Fifth Amendment protects against compelled self-incrimination.

You may clearly state:

“I am exercising my right to remain silent.”

You generally do not have to explain where you are going, where you have been, whom you were meeting, or what you were doing.

However, some states require individuals lawfully detained under specified circumstances to identify themselves.

During traffic stops, drivers are generally required to provide a driver’s license, vehicle registration, and proof of insurance.

Never provide false identification or deliberately misleading information.

3. Your Right to an Attorney

If you are arrested or questioned while in police custody, clearly state:

“I want to speak with an attorney. I do not wish to answer questions without legal counsel.”

Police generally must provide Miranda warnings before conducting a custodial interrogation if they intend to use the resulting statements in their prosecution.

Contrary to a common misconception, police are not automatically required to read Miranda warnings at the moment of arrest.

You can invoke your right to remain silent without waiting for officers to read those warnings.

The constitutional right to appointed counsel in qualifying criminal proceedings does not mean an attorney must immediately be provided during every temporary street detention.

4. Searches and Physical Resistance

If officers request permission to search your person, belongings, or vehicle, you may state:

“I do not consent to any searches.”

Your refusal does not necessarily prevent a search. Officers may have independent legal authority to conduct one, including certain searches incident to a lawful arrest.

Never physically interfere with an officer conducting a search or attempting to make an arrest.

Even if you believe the detention or arrest is unlawful, physical resistance may expose you to additional criminal charges and create serious safety risks.

Keep your hands visible, avoid sudden movements, and comply with lawful physical instructions while verbally asserting your rights.

Challenges to an unlawful detention, arrest, or search should generally be handled through legal proceedings, not physical confrontation.

5. What Happens After an Arrest?

Following an arrest, you may be transported to a police station, county jail, or another detention facility for booking.

Booking commonly includes:

• Verification of personal information and identification.
• Fingerprinting and photographing.
• Recording the alleged offense and arrest information.
• Inventorying personal belongings.
• Processing for release, bail consideration, or a court appearance.

The procedures and timing depend on the jurisdiction and circumstances.

If you cannot afford an attorney, ask about eligibility for appointed counsel. You should also request medical attention if you are injured or require necessary medication.

Do not discuss the allegations with other detainees or over recorded telephone lines. Communications with your attorney generally receive special legal protections.

6. What Information Should You Document?

As soon as reasonably possible after your release, write down everything you remember about the encounter.

Record:

• Exact date, time, and location of the stop or arrest.
• Names, badge numbers, and agencies of involved officers, if known.
• What officers said about the reason for the stop.
• Whether you asked if you were free to leave and how officers responded.
• Whether you were searched, handcuffed, or transported.
• Names and contact information of witnesses.
• Any injuries, property damage, or missing belongings.
• Arrest report numbers, booking information, court dates, and release conditions.

Preserve relevant photographs, messages, video recordings, and other evidence. An attorney can help request body-camera footage, dispatch records, and other official documentation.

If you believe your rights were violated, consult a qualified criminal defense attorney promptly.

7. Special Considerations for Non-U.S. Citizens

An arrest can have immigration consequences, even when criminal charges are later dismissed or reduced.

Noncitizens should avoid making statements about immigration status or signing agreements they do not understand without obtaining appropriate legal advice.

Consult both criminal defense and immigration counsel before accepting a plea agreement, because immigration law may treat certain convictions differently from state criminal law.

Final Advice

The most important question during an uncertain police encounter is: “Am I free to leave?”

If the answer is no, remain calm, do not physically resist, clearly assert your right to remain silent, and request an attorney.

Remember: a police detention is not necessarily an arrest, an arrest is not a conviction, and exercising your constitutional rights should not involve confrontation.

Disclaimer: This information is provided for general educational purposes and is not legal advice. Police procedures, identification requirements, and other applicable rules may vary by jurisdiction and circumstances.

Verified legal foundations: Fourth and Fifth Amendments to the U.S. Constitution; Terry v. Ohio (1968); Miranda v. Arizona (1966); applicable state law.

Useful sources: ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police); Cornell Law — Terry Stop (https://www.law.cornell.edu/wex/terry_stop/stop_and_frisk); Florida Statutes § 901.151 (https://www.flsenate.gov/Laws/Statutes/2026/901.151).`,
    bodyRu: `1. Добровольный контакт, задержание и арест

Добровольный контакт (consensual encounter)

Полицейский может подойти к вам в общественном месте, задавать вопросы или попросить документы, не обязательно задерживая вас. Если контакт добровольный, вы обычно вправе не отвечать на вопросы и уйти.

Самый простой способ прояснить ситуацию — спросить:

“Officer, am I free to leave?” («Офицер, я свободен уйти?»)

Если офицер говорит «да», спокойно уходите. Не бегите и не делайте резких движений.

Временное задержание (investigative stop)

Офицер может временно задержать вас при разумном, конкретно обоснованном подозрении (reasonable suspicion), что вы причастны к преступлению.

Reasonable suspicion требует конкретных, объективных фактов. Это более низкий правовой стандарт, чем probable cause (вероятная причина), которая обычно нужна для ареста.

Во время законного задержания:

• Вы временно не свободны уйти.
• Офицеры могут задавать вопросы, связанные с расследованием.
• Вы обычно вправе хранить молчание, с учётом требований штата о предъявлении личности в определённых случаях.
• Офицеры могут провести ограниченный pat-down верхней одежды, если обоснованно подозревают, что вы вооружены и опасны.
• Задержание должно быть ограничено по времени и объёму тем, что юридически оправдано.

Задержание само по себе не означает, что вас арестуют. Если расследование не даёт оснований для дальнейшего законного ограничения свободы, вас должны отпустить.

Арест

Арест — более серьёзное ограничение свободы и обычно требует probable cause полагать, что вы совершили преступление.

Офицеры могут надеть наручники, обыскать вас в рамках закона, доставить в учреждение и начать процедуру booking.

Однако одни только наручники не всегда означают, что произошёл арест. Суды смотрят на обстоятельства, включая степень и длительность ограничения свободы.

Точно так же слова офицера, что это «просто задержание», не всегда делают ситуацию задержанием по закону. Чрезмерно жёсткое или затянутое задержание может стать арестом, для которого нужна probable cause.

2. Право хранить молчание

Пятая поправка защищает от принуждения давать показания против себя.

Вы можете чётко сказать:

“I am exercising my right to remain silent.” («Я пользуюсь правом хранить молчание.»)

Обычно вам не обязаны объяснять, куда вы идёте, где были, с кем встречались и чем занимались.

Однако в некоторых штатах при законном задержании в определённых ситуациях требуется назвать себя.

При остановке транспорта водитель обычно обязан предъявить водительские права, регистрацию автомобиля и страховку.

Никогда не давайте ложные документы и не вводите в заблуждение намеренно.

3. Право на адвоката

Если вас арестовали или допрашивают в полицейском custody, чётко скажите:

“I want to speak with an attorney. I do not wish to answer questions without legal counsel.” («Я хочу адвоката. Без адвоката отвечать не буду.»)

Как правило, полиция должна зачитать Miranda перед custodial interrogation, если намерена использовать ваши слова в обвинении.

Вопреки распространённому мнению, Miranda не обязаны читать в сам момент ареста автоматически.

Вы можете заявить право молчать, не дожидаясь предупреждений Miranda.

Конституционное право на назначенного адвоката в подходящих уголовных делах не означает, что адвокат обязан появиться немедленно при каждом временном уличном задержании.

4. Обыски и физическое сопротивление

Если офицеры просят разрешения обыскать вас, вещи или машину, вы можете сказать:

“I do not consent to any searches.” («Я не даю согласия на обыски.»)

Отказ сам по себе не всегда останавливает обыск. У офицеров может быть независимое правовое основание, в том числе обыск при законном аресте.

Никогда физически не мешайте офицеру при обыске или попытке ареста.

Даже если вы считаете задержание или арест незаконными, физическое сопротивление может привести к дополнительным обвинениям и создать серьёзную опасность.

Держите руки на виду, избегайте резких движений и выполняйте законные физические указания, при этом устно заявляя свои права.

Оспаривать незаконное задержание, арест или обыск обычно нужно через суд и адвоката, а не через физическое противостояние.

5. Что происходит после ареста?

После ареста вас могут доставить в полицейский участок, окружную тюрьму или другое учреждение для booking.

Booking обычно включает:

• Проверку личных данных и личности.
• Снятие отпечатков и фотографирование.
• Фиксацию предполагаемого правонарушения и сведений об аресте.
• Опись личных вещей.
• Оформление освобождения, вопроса о залоге (bail) или явки в суд.

Процедуры и сроки зависят от юрисдикции и обстоятельств.

Если вы не можете нанять адвоката, спросите о праве на назначенного counsel. Также просите медицинскую помощь при травмах или необходимости в лекарствах.

Не обсуждайте обвинения с другими задержанными и по записываемым телефонным линиям. Общение с адвокатом обычно имеет особую правовую защиту.

6. Какую информацию фиксировать?

Как можно скорее после освобождения запишите всё, что помните о контакте.

Зафиксируйте:

• Точные дату, время и место остановки или ареста.
• Имена, номера бейджей и ведомства офицеров, если известны.
• Что офицеры говорили о причине остановки.
• Спрашивали ли вы, свободны ли уйти, и что они ответили.
• Были ли обыск, наручники или транспортировка.
• Имена и контакты свидетелей.
• Травмы, повреждение имущества или пропавшие вещи.
• Номера отчётов об аресте, booking, даты суда и условия освобождения.

Сохраняйте фото, сообщения, видео и другие доказательства. Адвокат может помочь запросить body-camera, записи диспетчера и другие официальные материалы.

Если вы считаете, что права нарушены, как можно скорее обратитесь к квалифицированному адвокату по уголовным делам.

7. Особые моменты для лиц без гражданства США

Арест может иметь иммиграционные последствия, даже если уголовные обвинения потом снимут или снизят.

Негражданам не следует делать заявления об иммиграционном статусе и подписывать то, чего они не понимают, без надлежащей юридической консультации.

Перед принятием plea agreement консультируйтесь и с уголовным, и с иммиграционным адвокатом: иммиграционное право может оценивать некоторые судимости иначе, чем штатное уголовное право.

Итог

Главный вопрос при неясном контакте с полицией: “Am I free to leave?”

Если ответ «нет» — сохраняйте спокойствие, не сопротивляйтесь физически, чётко заявите право молчать и попросите адвоката.

Помните: полицейское задержание — не обязательно арест, арест — не приговор, а осуществление конституционных прав не должно превращаться в конфронтацию.

Отказ от ответственности: эта информация дана в образовательных целях и не является юридической консультацией. Процедуры полиции, требования к идентификации и другие правила могут отличаться в зависимости от юрисдикции и обстоятельств.

Проверенные правовые основания: Четвёртая и Пятая поправки к Конституции США; Terry v. Ohio (1968); Miranda v. Arizona (1966); законодательство штатов.

Полезные источники: ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police); Cornell Law — Terry Stop (https://www.law.cornell.edu/wex/terry_stop/stop_and_frisk); Florida Statutes § 901.151 (https://www.flsenate.gov/Laws/Statutes/2026/901.151).`,
  },
  {
    id: 'cr-miranda',
    categoryId: 'criminal',
    titleEn: 'Miranda & silence',
    titleRu: 'Миранда и право молчать',
    summaryEn:
      'When Miranda applies, how to invoke silence and counsel, and what to avoid during questioning.',
    summaryRu:
      'Когда действует Miranda, как заявить о молчании и адвокате и чего избегать при допросе.',
    bodyEn: `1. What Miranda Means

Police generally must give Miranda warnings before custodial interrogation: you must be in custody and officers must ask questions reasonably likely to produce an incriminating response. An arrest without questioning does not automatically require an immediate warning, and roadside or voluntary questions may occur without one.

A Miranda violation usually affects whether a statement can be used in court; it does not automatically erase an arrest or dismiss a case.

2. Invoke Your Rights Clearly

Do not wait for warnings. Say plainly:

“I am exercising my right to remain silent.”

“I want an attorney. I will not answer questions without my attorney.”

Then stop discussing the incident. An unclear phrase such as “Maybe I need a lawyer” may not invoke counsel. Providing identification required by law is different from answering investigative questions.

3. What Not to Do

• Do not guess, joke, lie, or try to “clear things up.”
• Do not discuss the case in a patrol car, jail call, text, or with other detainees.
• Do not assume an informal conversation is off the record.
• Do not physically resist or argue about admissibility at the scene.

Police may use lawful interview tactics and generally need not correct every mistaken assumption you make. Ask for an interpreter (Russian or your language) before answering if you do not fully understand.

4. Florida and Immigration Concerns

Florida officers may ask routine booking questions, and limited public-safety questions can fall outside Miranda. For noncitizens, even a short admission about drugs, conduct, or status can create separate immigration risk. Speak with criminal-defense and immigration counsel before any plea.

5. Document and Get Legal Help

Write down when custody began, who questioned you, the exact warnings, your exact request for counsel, whether questioning continued, and whether an interpreter was available. Preserve paperwork and identify recordings or witnesses.

Contact a criminal-defense lawyer promptly after custodial questioning, especially if you spoke before or after invoking your rights.

Final Advice

Silence must be asserted calmly and clearly. Give required identifying information, request counsel, and do not restart the conversation yourself.

Disclaimer: Educational information only, not legal advice. Application of Miranda depends on custody, questioning, and case-specific facts.

Verified legal foundations: U.S. Constitution, Fifth and Sixth Amendments; Miranda v. Arizona (1966); Edwards v. Arizona (1981); Davis v. United States (1994).

Useful sources: U.S. Courts — Miranda rights (https://www.uscourts.gov/about-federal-courts/educational-resources/about-educational-outreach/activity-resources/what-does); ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police).`,
    bodyRu: `1. Что означает Miranda

Полиция обычно обязана предупредить о правах Miranda перед допросом в custody: человек должен быть фактически лишён свободы, а вопросы — быть способны вызвать самообвиняющий ответ. Сам арест без допроса не требует немедленного предупреждения; вопросы на дороге или при добровольной беседе иногда задают без него.

Нарушение Miranda обычно влияет на допустимость слов в суде, но не отменяет автоматически арест и не прекращает дело.

2. Заявите права чётко

Не ждите предупреждения. Скажите:

“I am exercising my right to remain silent.” («Я пользуюсь правом хранить молчание.»)

“I want an attorney. I will not answer questions without my attorney.” («Мне нужен адвокат. Без адвоката я отвечать не буду.»)

После этого не обсуждайте событие. Неясная фраза вроде «Наверное, мне нужен адвокат» может оказаться недостаточной. Предъявление обязательных документов — не то же самое, что ответы по существу расследования.

3. Чего не делать

• Не угадывайте, не шутите, не лгите и не пытайтесь «всё объяснить».
• Не обсуждайте дело в патрульной машине, по тюремному телефону, в сообщениях или с сокамерниками.
• Не считайте неформальную беседу конфиденциальной.
• Не сопротивляйтесь и не спорьте на месте о допустимости доказательств.

Полиция может применять законные тактики опроса и не обязана исправлять каждое ваше заблуждение. Если вы не всё понимаете, до ответов попросите переводчика — русского или на вашем языке.

4. Флорида и иммиграционные риски

Офицеры могут задавать обычные вопросы при booking; отдельные вопросы ради немедленной безопасности могут не подпадать под Miranda. Для неграждан даже короткое признание о наркотиках, поступке или статусе способно создать иммиграционный риск. До сделки нужны консультации уголовного и иммиграционного адвокатов.

5. Что записать и когда нужен адвокат

Зафиксируйте, когда вас лишили свободы, кто задавал вопросы, точный текст предупреждений и просьбы об адвокате, продолжился ли допрос и был ли переводчик. Сохраните документы и сведения о записях и свидетелях.

После допроса в custody быстро свяжитесь с уголовным адвокатом, особенно если вы отвечали до или после заявления своих прав.

Итог

Право молчать нужно заявить спокойно и недвусмысленно. Предъявите обязательные документы, попросите адвоката и сами не возобновляйте разговор.

Отказ от ответственности: материал дан только в образовательных целях и не является юридической консультацией. Miranda зависит от фактического custody, вопросов и обстоятельств.

Проверенные правовые основания: Пятая и Шестая поправки к Конституции США; Miranda v. Arizona (1966); Edwards v. Arizona (1981); Davis v. United States (1994).

Полезные источники: U.S. Courts — Miranda rights (https://www.uscourts.gov/about-federal-courts/educational-resources/about-educational-outreach/activity-resources/what-does); ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police).`,
  },
  {
    id: 'cr-felony-misdemeanor',
    categoryId: 'criminal',
    titleEn: 'Felony vs. misdemeanor',
    titleRu: 'Felony и misdemeanor',
    summaryEn:
      'Florida charge levels, possible penalties, collateral consequences, court process, and first steps.',
    summaryRu:
      'Уровни обвинений во Флориде, наказания, дополнительные последствия, суд и первые шаги.',
    bodyEn: `1. The Basic Difference

Florida misdemeanors are generally handled in county court and can authorize up to one year in county jail. Felonies are generally handled in circuit court and can authorize state prison or more serious sanctions. The exact statute and degree—not the everyday name of the offense—control.

Common maximum terms include:

• Second-degree misdemeanor: up to 60 days in jail.
• First-degree misdemeanor: up to 1 year in jail.
• Third-degree felony: generally up to 5 years in prison.
• Second-degree felony: generally up to 15 years.
• First-degree felony: generally up to 30 years, with special rules for life or capital felonies.

Fines, enhancements, and mandatory minimums may also apply.

2. Consequences Beyond Jail

A conviction can affect employment, housing, professional licenses, driving, firearm rights, voting eligibility, education, and immigration. A withheld adjudication is not the same as a dismissal and may still matter under federal or immigration law.

3. What to Do

• Read the charging document and note the statute number and degree.
• Attend every court date and obey bond/no-contact conditions.
• Preserve messages, receipts, location records, photos, and witness contacts.
• Tell your lawyer about prior cases in every state and country.
• Ask before entering a plea, even if the offer sounds like “time served.”

Do not contact an alleged victim or witness if prohibited, delete evidence, or discuss facts online.

4. Florida Procedure

The initial arrest label can change after prosecutors review the evidence. An information or indictment states formal charges. Prosecutors may amend, reduce, or dismiss counts; only the court can impose sentence. Eligibility for diversion, sealing, or expunction is technical and not automatic.

5. When to Get a Lawyer

Seek counsel immediately for any felony, possible jail sentence, probation violation, firearm issue, or immigration concern. If you cannot afford counsel, ask the court about a public defender. Noncitizens should obtain immigration advice before pleading.

Final Advice

Ask: “What exact statute and degree am I charged with, what is the maximum exposure, and what collateral consequences apply?”

Disclaimer: Educational only, not legal advice. Penalties can change through enhancements, sentencing rules, and individual facts.

Verified legal foundations: Florida Statutes §§ 775.081, 775.082, 775.083; Florida Rules of Criminal Procedure.

Useful sources: Florida Senate — Chapter 775 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter775); Florida Courts (https://www.flcourts.gov/).`,
    bodyRu: `1. Основное различие

Misdemeanor во Флориде обычно рассматривает county court; возможное наказание — до одного года в окружной тюрьме. Felony обычно рассматривает circuit court; возможны тюрьма штата и более серьёзные санкции. Решающее значение имеют точный статут и степень, а не бытовое название нарушения.

Типичные максимальные сроки:

• Misdemeanor второй степени — до 60 дней.
• Misdemeanor первой степени — до 1 года.
• Felony третьей степени — обычно до 5 лет.
• Felony второй степени — обычно до 15 лет.
• Felony первой степени — обычно до 30 лет; для life и capital felony действуют особые правила.

Также возможны штрафы, усиление наказания и обязательные минимумы.

2. Последствия помимо тюрьмы

Судимость может затронуть работу, жильё, профессиональные лицензии, водительские права, оружие, избирательные права, учёбу и иммиграцию. Withhold of adjudication — не прекращение дела; он всё равно может учитываться федеральным и иммиграционным правом.

3. Что делать

• Найдите в обвинительном документе номер статута и степень.
• Приходите на все заседания и соблюдайте условия bond и no-contact.
• Сохраните сообщения, чеки, геолокацию, фото и контакты свидетелей.
• Сообщите адвокату о прежних делах во всех штатах и странах.
• Советуйтесь до любого plea, даже если предлагают “time served”.

Не связывайтесь с предполагаемой жертвой или свидетелем вопреки запрету, не удаляйте материалы и не обсуждайте факты в интернете.

4. Процедура во Флориде

Первоначальная квалификация после ареста может измениться после проверки прокурором. Формальные обвинения указываются в information или indictment. Прокурор может изменить, снизить или снять пункты; наказание назначает только суд. Diversion, sealing и expunction доступны не всем и не происходят автоматически.

5. Когда нужен адвокат

Немедленно ищите counsel при любом felony, угрозе тюрьмы, нарушении probation, вопросе об оружии или иммиграции. Если нет денег, спросите суд о public defender. Негражданам до plea нужна отдельная иммиграционная консультация.

Итог

Спросите: «Каковы точный статут и степень, максимальное наказание и дополнительные последствия?»

Отказ от ответственности: только образовательная информация, не юридическая консультация. Наказание меняется из-за усилений, правил sentencing и конкретных фактов.

Проверенные правовые основания: Florida Statutes §§ 775.081, 775.082, 775.083; Florida Rules of Criminal Procedure.

Полезные источники: Florida Senate — Chapter 775 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter775); Florida Courts (https://www.flcourts.gov/).`,
  },
  {
    id: 'cr-search',
    categoryId: 'criminal',
    titleEn: 'Searches & consent',
    titleRu: 'Обыск и согласие',
    summaryEn:
      'Warrants, consent, common exceptions, vehicle and home searches, and preserving a challenge.',
    summaryRu:
      'Ордера, согласие, исключения, обыск машины и дома и сохранение права на оспаривание.',
    bodyEn: `1. When Police May Search

The Fourth Amendment generally requires reasonableness. A search may be based on a valid warrant, voluntary consent, probable cause plus an exception, a search incident to arrest, exigent circumstances, or another recognized rule. Each doctrine has limits.

2. Consent Is a Choice

If asked for permission, say calmly:

“I do not consent to any search.”

“Do you have a warrant?”

Do not sign a consent form you do not understand. A roommate or other person may sometimes consent to areas they have authority over, but not automatically to every private space. You can withdraw consent clearly, although officers may claim another legal basis to continue.

3. Homes, Cars, and Phones

A home receives strong protection. Ask to see a warrant through a window or doorway and check the address, judge’s signature, scope, and date; do not obstruct execution. Vehicles have different rules, and probable cause may permit a search without a warrant. A traffic violation alone does not automatically authorize a full vehicle search.

Digital devices contain especially private information. Police generally need a warrant to search the contents of a seized phone, subject to narrow exceptions. Do not volunteer passcodes without legal advice.

4. Stay Safe and Preserve the Issue

• Keep hands visible and do not touch officers or evidence.
• Do not run, hide, destroy, or delete anything.
• Repeat non-consent once if necessary; do not argue.
• Ask for an interpreter (Russian or your language) if needed.
• Never lie about ownership or contents.

5. Document and Call Counsel

Record the time, location, officers, words used to request or refuse consent, warrant details, areas searched, property seized, witnesses, and any damage. Keep the inventory or receipt. A lawyer can seek the warrant materials, body-camera video, and suppression of unlawfully obtained evidence.

Final Advice

Refusing consent does not authorize resistance. State “I do not consent,” remain calm, and challenge legality later through counsel.

Disclaimer: Educational only, not legal advice. Search law is fact-specific and changes by location and circumstance.

Verified legal foundations: U.S. Constitution, Fourth Amendment; Florida Constitution art. I, § 12; Riley v. California (2014); Florida Statutes Chapters 933 and 901.

Useful sources: Florida Senate — Chapter 933 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter933); ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police).`,
    bodyRu: `1. Когда полиция может проводить обыск

Четвёртая поправка требует, чтобы обыск был разумным. Основанием может быть действительный ордер, добровольное согласие, probable cause вместе с исключением, обыск при аресте, экстренные обстоятельства или иное признанное правило. У каждого основания есть пределы.

2. Согласие — это выбор

Если просят разрешение, спокойно скажите:

“I do not consent to any search.” («Я не даю согласия на обыск.»)

“Do you have a warrant?” («У вас есть ордер?»)

Не подписывайте непонятную форму согласия. Сосед по жилью иногда может разрешить осмотр общей зоны, которой вправе распоряжаться, но не автоматически любого личного пространства. Согласие можно явно отозвать, хотя офицеры могут ссылаться на другое основание.

3. Дом, автомобиль и телефон

Дом защищён особенно строго. Попросите показать ордер через окно или дверь; проверьте адрес, подпись судьи, пределы и дату, но не мешайте исполнению. Для автомобиля правила иные: probable cause иногда позволяет обыск без ордера. Одно дорожное нарушение не даёт автоматического права обыскать всю машину.

Телефоны содержат особо личные данные. Для просмотра содержимого изъятого телефона полиции обычно нужен ордер, кроме узких исключений. Не сообщайте код без совета адвоката.

4. Безопасность и сохранение возражений

• Держите руки на виду, не касайтесь офицеров и предметов.
• Не убегайте, не прячьте, не уничтожайте и не удаляйте данные.
• При необходимости один раз повторите отказ; не спорьте.
• Если нужно, попросите переводчика — русского или на вашем языке.
• Не лгите о владельце или содержимом.

5. Что фиксировать и когда звонить адвокату

Запишите время, место, данные офицеров, точные слова просьбы и отказа, реквизиты ордера, осмотренные места, изъятые вещи, свидетелей и ущерб. Сохраните опись или квитанцию. Адвокат может запросить ордер, body-camera и исключение незаконно полученных доказательств.

Итог

Отказ в согласии не разрешает сопротивляться. Скажите “I do not consent”, сохраняйте спокойствие и оспаривайте законность позже через адвоката.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Правила обыска зависят от фактов, места и обстоятельств.

Проверенные правовые основания: Четвёртая поправка к Конституции США; Florida Constitution art. I, § 12; Riley v. California (2014); Florida Statutes Chapters 933 и 901.

Полезные источники: Florida Senate — Chapter 933 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter933); ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police).`,
  },

  // —— Traffic Law ——
  {
    id: 'tr-stop',
    categoryId: 'traffic',
    titleEn: 'Traffic stop basics',
    titleRu: 'Основы дорожной остановки',
    summaryEn:
      'Safe roadside steps, required documents, silence, searches, language help, and documentation.',
    summaryRu:
      'Безопасные действия, обязательные документы, молчание, обыск, перевод и фиксация остановки.',
    bodyEn: `1. Pull Over Safely

Signal, slow down, and stop at the first reasonably safe place. At night, turn on interior lights. Stay in the vehicle unless directed otherwise, lower the window enough to communicate, keep hands visible, and tell the officer before reaching for documents.

2. Documents and Questions

Florida drivers must present a valid driver license and, when requested, registration and proof of insurance. Passengers are not automatically required to provide driving documents, though identification rules can depend on a lawful detention.

You may say:

“Officer, I will provide my documents, but I choose to remain silent.”

“Am I free to leave?”

Do not lie. If you need language help, say: “I need an interpreter in Russian [or my language].”

3. Searches and Safety

You may state, “I do not consent to a search.” Do not physically interfere if officers search anyway. Do not reach toward a weapon or glove box unexpectedly. Follow clear safety directions and challenge an unlawful stop or search later.

4. Citation, Arrest, or Warning

Signing a Florida citation is generally a promise to respond, not an admission of guilt. Refusing required acknowledgment can create additional problems. Read whether the citation requires payment, a court appearance, or another response. A routine stop may become an arrest if officers develop probable cause or discover a warrant.

5. Document the Stop

Afterward record:

• Date, time, road, patrol agency, and vehicle number.
• Officer name/badge number and stated reason.
• Length of stop and questions asked.
• Any search, consent request, test, citation, or property seizure.
• Witnesses, dashcam files, injuries, and court deadlines.

Contact a traffic or criminal-defense lawyer promptly if you were arrested, searched, injured, accused of DUI, lack valid status/documents, or face license suspension.

Final Advice

Be calm and visible, provide required driving documents, do not volunteer an explanation, and never argue the case on the roadside.

Disclaimer: Educational only, not legal advice. Duties differ for drivers, passengers, and lawfully detained persons.

Verified legal foundations: U.S. Constitution, Fourth and Fifth Amendments; Florida Statutes §§ 316.123, 316.646, 322.15, 901.151.

Useful sources: FLHSMV — Traffic Citations (https://www.flhsmv.gov/traffic-citations/); ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police).`,
    bodyRu: `1. Остановитесь безопасно

Включите поворотник, снизьте скорость и остановитесь в первом разумно безопасном месте. Ночью включите свет в салоне. Не выходите без указания, приоткройте окно для общения, держите руки на виду и предупреждайте, прежде чем тянуться за документами.

2. Документы и вопросы

Водитель во Флориде обязан предъявить действующие права, а по требованию — регистрацию и подтверждение страховки. Пассажиру водительские документы не нужны автоматически; обязанность назвать себя зависит от наличия законного задержания.

Можно сказать:

“Officer, I will provide my documents, but I choose to remain silent.” («Офицер, я дам документы, но пользуюсь правом молчать.»)

“Am I free to leave?” («Я свободен уйти?»)

Не лгите. Если нужна языковая помощь, скажите: “I need an interpreter in Russian [or my language].”

3. Обыск и безопасность

Можно сказать: “I do not consent to a search.” Не мешайте физически, если обыск всё же проводят. Не тянитесь неожиданно к оружию или бардачку. Выполняйте ясные команды безопасности, а незаконность остановки или обыска оспаривайте позже.

4. Citation, арест или предупреждение

Подпись под дорожным citation во Флориде обычно означает обещание ответить, а не признание вины. Отказ от обязательного подтверждения может создать новые проблемы. Проверьте, требуется ли оплата, явка в суд или иной ответ. Обычная остановка может перейти в арест при probable cause или обнаружении ордера.

5. Что зафиксировать

После остановки запишите:

• Дату, время, дорогу, ведомство и номер патрульной машины.
• Имя/номер офицера и названную причину.
• Длительность и заданные вопросы.
• Обыск, просьбу о согласии, тест, citation или изъятие.
• Свидетелей, запись регистратора, травмы и сроки суда.

Быстро свяжитесь с traffic или criminal-defense lawyer при аресте, обыске, травме, DUI, проблемах с документами/статусом или угрозе приостановки прав.

Итог

Сохраняйте спокойствие, держите руки на виду, предъявите обязательные документы, не давайте лишних объяснений и не спорьте о деле на дороге.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Обязанности водителя, пассажира и законно задержанного различаются.

Проверенные правовые основания: Четвёртая и Пятая поправки к Конституции США; Florida Statutes §§ 316.123, 316.646, 322.15, 901.151.

Полезные источники: FLHSMV — Traffic Citations (https://www.flhsmv.gov/traffic-citations/); ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police).`,
  },
  {
    id: 'tr-ticket',
    categoryId: 'traffic',
    titleEn: 'Tickets & points',
    titleRu: 'Штрафы и баллы',
    summaryEn:
      'Deadlines, payment versus contesting, points, driver school, license effects, and recordkeeping.',
    summaryRu:
      'Сроки, оплата или оспаривание, баллы, школа вождения, права и хранение документов.',
    bodyEn: `1. Read the Citation

Florida citations identify the alleged violation, county, court or clerk, response deadline, and whether a court appearance is mandatory. Verify your name, address, statute number, and deadline. Update your address with the proper agencies; missing mailed notice may not excuse nonresponse.

2. Understand the Options

Depending on the offense, you may be able to:

• Pay the civil penalty—often treated as a conviction.
• Request a hearing to contest or seek relief.
• Elect an approved Basic Driver Improvement course if eligible.
• Provide proof that a document or equipment issue was corrected.

Do not assume traffic school is available. Elections are limited, deadlines apply, and commercial-driver rules differ.

3. Points and License Consequences

Moving convictions may add Florida license points. Accumulating points within specified periods can trigger suspension. Some offenses carry separate mandatory consequences. Out-of-state licenses and immigration documents do not make the citation disappear; information may be shared with the licensing state.

4. What Not to Do

Do not ignore the ticket, miss a mandatory appearance, pay before understanding immigration or license consequences, or rely on an unofficial online payment site. Failure to respond can cause added fees, collection, suspension, or a warrant in criminal traffic cases.

5. Prepare and Document

Keep the citation, envelope, payment receipt, course certificate, photos, dashcam video, witness contacts, repair receipts, and all clerk notices. Confirm disposition directly with the county clerk and verify your driving record afterward.

Consult a lawyer for criminal traffic charges, crashes with injury, suspended-license allegations, CDL consequences, repeat offenses, or any mandatory court appearance.

Final Advice

Calendar the deadline immediately and obtain the official county-clerk instructions before choosing payment, hearing, or school.

Disclaimer: Educational only, not legal advice. Eligibility, deadlines, points, and local procedures vary.

Verified legal foundations: Florida Statutes Chapters 318 and 322; Florida Rules of Traffic Court.

Useful sources: FLHSMV — Traffic Citations (https://www.flhsmv.gov/traffic-citations/); Florida Courts — Traffic (https://help.flcourts.gov/Traffic-Tickets).`,
    bodyRu: `1. Прочитайте citation

В citation во Флориде указаны предполагаемое нарушение, округ, суд или clerk, срок ответа и обязательность явки. Проверьте имя, адрес, номер статута и дату. Обновляйте адрес в нужных ведомствах: неполученное письмо не всегда оправдывает отсутствие ответа.

2. Разберитесь с вариантами

В зависимости от нарушения можно:

• Оплатить civil penalty — это часто считается conviction.
• Попросить hearing для оспаривания или смягчения.
• Выбрать одобренный Basic Driver Improvement course, если есть право.
• Представить доказательство исправления документов или оборудования.

Не считайте traffic school гарантированным: число выборов ограничено, есть сроки, а для commercial drivers правила иные.

3. Баллы и водительские права

За moving convictions могут начисляться баллы. Их накопление за установленные периоды ведёт к suspension. У ряда нарушений есть отдельные обязательные последствия. Иностранные или выданные другим штатом права не отменяют citation; сведения могут передать выдавшему штату.

4. Чего не делать

Не игнорируйте билет, не пропускайте обязательную явку, не платите до понимания последствий для прав и иммиграции и не используйте сомнительный сайт. Отсутствие ответа может привести к сборам, взысканию, suspension, а в criminal traffic case — к ордеру.

5. Подготовка и документы

Храните citation, конверт, квитанцию, сертификат курса, фото, видео регистратора, контакты свидетелей, чеки ремонта и письма clerk. Подтвердите результат непосредственно у county clerk и затем проверьте driving record.

Адвокат особенно нужен при criminal traffic charge, ДТП с травмой, обвинении в езде с suspended license, последствиях для CDL, повторных нарушениях или обязательной явке.

Итог

Сразу внесите срок в календарь и получите официальные инструкции county clerk до выбора оплаты, hearing или школы.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Право на варианты, сроки, баллы и местные процедуры различаются.

Проверенные правовые основания: Florida Statutes Chapters 318 и 322; Florida Rules of Traffic Court.

Полезные источники: FLHSMV — Traffic Citations (https://www.flhsmv.gov/traffic-citations/); Florida Courts — Traffic (https://help.flcourts.gov/Traffic-Tickets).`,
  },
  {
    id: 'tr-dui',
    categoryId: 'traffic',
    titleEn: 'DUI overview',
    titleRu: 'DUI — обзор',
    summaryEn:
      'Florida DUI investigation, testing and refusal consequences, two-track deadlines, evidence, and counsel.',
    summaryRu:
      'Расследование DUI, тесты и отказ, два процесса и сроки, доказательства и адвокат.',
    bodyEn: `1. DUI Has Two Tracks

Florida DUI is a criminal case and may also create a separate administrative driver-license action. The court case and FLHSMV process have different rules and deadlines. Resolving one does not automatically resolve the other.

DUI may be alleged from impairment of normal faculties or an unlawful alcohol level; drugs, including prescriptions, can also be involved.

2. During the Stop

Provide required driving documents and follow safety directions. You may say:

“I choose to remain silent and want a lawyer.”

Do not lie about drinking, medication, or driving. Roadside exercises and chemical tests raise different legal issues. Florida’s implied-consent law can impose license consequences for refusing a lawful breath, urine, or blood test, and a refusal may be evidence. Never physically resist.

3. After Arrest or Notice

• Request counsel and necessary medical care.
• Read every license notice immediately.
• Preserve the citation, DUI packet, tow receipt, and bond conditions.
• Do not drive unless your license status legally permits it.
• Do not discuss the case on recorded jail calls or social media.

Administrative-review deadlines can be very short. Contact qualified counsel immediately rather than relying on a future court date.

4. Evidence to Preserve

Write down timing, location, food, sleep, medications, medical conditions, officer instructions, tests requested, exact refusal/consent language, observation periods, witnesses, and available video. Save receipts, phone location data, rideshare records, and medical documentation. Counsel may seek body-camera, dispatch, maintenance, calibration, and laboratory records.

5. Special Risks

Penalties increase with prior offenses, high alcohol level, a minor passenger, crash, injury, or death. DUI can affect employment, insurance, professional licenses, travel, and immigration. A plea with immigration effects requires informed criminal and immigration advice.

Final Advice

Treat every DUI paper as urgent: protect both the criminal case and the separate license process.

Disclaimer: Educational only, not legal advice. Test duties, review options, and defenses depend on the facts.

Verified legal foundations: Florida Statutes §§ 316.193 and 316.1932–316.1934; Chapter 322.

Useful sources: FLHSMV — DUI and Administrative Suspension (https://www.flhsmv.gov/driver-licenses-id-cards/education-courses/dui-and-iid/); Florida Senate — § 316.193 (https://www.flsenate.gov/Laws/Statutes/2026/316.193).`,
    bodyRu: `1. У DUI два параллельных процесса

DUI во Флориде — уголовное дело, которое также может вызвать отдельное административное действие против водительских прав. У суда и FLHSMV разные правила и сроки; результат одного процесса не закрывает автоматически другой.

DUI может основываться на нарушении normal faculties или запрещённом уровне алкоголя; причиной могут быть и наркотики, включая рецептурные лекарства.

2. Во время остановки

Предъявите обязательные документы и выполняйте команды безопасности. Можно сказать:

“I choose to remain silent and want a lawyer.” («Я пользуюсь правом молчать и хочу адвоката.»)

Не лгите об алкоголе, лекарствах или управлении. Roadside exercises и химические тесты — разные юридические вопросы. Florida implied-consent law может повлечь последствия для прав за отказ от законно требуемого анализа дыхания, мочи или крови; отказ могут использовать как доказательство. Не сопротивляйтесь.

3. После ареста или уведомления

• Попросите адвоката и необходимую медицинскую помощь.
• Немедленно прочитайте каждое уведомление о правах.
• Сохраните citation, DUI packet, tow receipt и bond conditions.
• Не водите, если текущий статус прав этого не разрешает.
• Не обсуждайте дело по записываемому телефону или в соцсетях.

Срок административного review может быть очень коротким. Сразу обращайтесь к квалифицированному counsel, не ждите будущего заседания.

4. Какие доказательства сохранить

Запишите время, место, еду, сон, лекарства, заболевания, команды офицера, предложенные тесты, точные слова согласия/отказа, периоды наблюдения, свидетелей и видео. Сохраните чеки, геолокацию телефона, rideshare и меддокументы. Адвокат может запросить body-camera, dispatch, обслуживание, calibration и лабораторные записи.

5. Особые риски

Наказание усиливают прежние DUI, высокий уровень алкоголя, ребёнок-пассажир, ДТП, травма или смерть. DUI влияет на работу, страховку, лицензии, поездки и иммиграцию. До plea нужна осознанная консультация уголовного и иммиграционного адвокатов.

Итог

Считайте каждый документ DUI срочным: защищайте и уголовное дело, и отдельный процесс по водительским правам.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Обязанность тестирования, review и защита зависят от фактов.

Проверенные правовые основания: Florida Statutes §§ 316.193 и 316.1932–316.1934; Chapter 322.

Полезные источники: FLHSMV — DUI and Administrative Suspension (https://www.flhsmv.gov/driver-licenses-id-cards/education-courses/dui-and-iid/); Florida Senate — § 316.193 (https://www.flsenate.gov/Laws/Statutes/2026/316.193).`,
  },
  {
    id: 'tr-crash',
    categoryId: 'traffic',
    titleEn: 'After a crash',
    titleRu: 'После ДТП',
    summaryEn:
      'Safety, Florida reporting duties, information exchange, evidence, insurance, and injury deadlines.',
    summaryRu:
      'Безопасность, обязанности во Флориде, обмен данными, доказательства, страховка и сроки.',
    bodyEn: `1. Protect Life and the Scene

Stop immediately. Call 911 for injury, danger, suspected intoxication, a blocked roadway, or major damage. Give the location and hazards. Do not move an injured person unless necessary for immediate safety. If vehicles can safely be moved and law requires clearing traffic, photograph positions first when possible.

2. Florida Duties

Drivers must remain, provide required identifying/vehicle information, show a license on request, and render reasonable aid. Florida requires prompt law-enforcement notice for specified crashes, including those involving injury, death, hit-and-run, intoxication, a disabled commercial vehicle, or apparent property damage meeting the statutory threshold.

Leaving can be a crime. If you hit an unattended vehicle or property, follow notice and reporting duties rather than simply leaving.

3. Exchange and Document

Collect:

• Names, addresses, phone numbers, licenses, plates, and insurance.
• Witness contacts and officer/report number.
• Wide and close photos of vehicles, road, signals, debris, weather, and injuries.
• Dashcam files, tow information, medical records, and receipts.

Give truthful required facts, but avoid guessing or saying “It was my fault.” Do not argue with others or post online.

4. Medical and Insurance Steps

Seek prompt medical evaluation; some injuries appear later. Florida no-fault/PIP rules and insurance policies contain notice and treatment deadlines. Notify your insurer accurately and promptly, but consider counsel before a recorded statement when injuries, disputed fault, or serious exposure exist.

5. When to Get a Lawyer

Contact counsel for injury, death, hit-and-run, DUI allegations, citation, uninsured drivers, commercial/rideshare vehicles, disputed fault, or an insurer requesting a release. Noncitizens should also ask about any criminal citation or arrest.

Final Advice

Safety first, then reporting, neutral information exchange, evidence preservation, medical care, and deadline tracking.

Disclaimer: Educational only, not legal advice. Reporting and insurance duties depend on crash facts and current law.

Verified legal foundations: Florida Statutes §§ 316.061–316.066, 316.062, and 627.736.

Useful sources: FLHSMV — What to Do at a Crash (https://www.flhsmv.gov/safety-center/driving-safety/what-to-do-and-expect-when-involved-in-a-crash/); Florida Highway Patrol (https://www.flhsmv.gov/florida-highway-patrol/).`,
    bodyRu: `1. Защитите людей и место ДТП

Немедленно остановитесь. Звоните 911 при травме, опасности, подозрении на опьянение, перекрытии дороги или серьёзном ущербе. Назовите место и угрозы. Не перемещайте пострадавшего без необходимости немедленно спасти его. Если машины можно безопасно убрать и закон требует освободить движение, по возможности сначала сфотографируйте их положение.

2. Обязанности во Флориде

Водитель обязан остаться, передать требуемые личные и автомобильные данные, показать права по запросу и оказать разумную помощь. О некоторых ДТП нужно немедленно сообщить полиции, включая травму, смерть, hit-and-run, опьянение, обездвиженный commercial vehicle или видимый ущерб выше установленного порога.

Уезд может быть преступлением. Задев пустую машину или имущество, выполните требования об уведомлении и отчёте, а не просто оставляйте место.

3. Обмен данными и фиксация

Соберите:

• Имена, адреса, телефоны, права, номера и страховки.
• Контакты свидетелей и номер отчёта полиции.
• Общие и крупные фото машин, дороги, знаков, обломков, погоды и травм.
• Запись регистратора, tow information, меддокументы и чеки.

Сообщайте правдивые обязательные факты, но не гадайте и не говорите «Это моя вина». Не спорьте и не публикуйте материалы в интернете.

4. Медицина и страховка

Быстро пройдите медицинский осмотр: часть травм проявляется позже. Florida no-fault/PIP и полис содержат сроки уведомления и лечения. Точно и своевременно известите страховщика, но при травмах, споре о вине или большом риске посоветуйтесь с адвокатом до recorded statement.

5. Когда нужен адвокат

Обращайтесь к counsel при травме, смерти, hit-and-run, обвинении DUI, citation, незастрахованном водителе, commercial/rideshare vehicle, споре о вине или просьбе подписать release. Негражданам нужна консультация и по любому уголовному citation или аресту.

Итог

Сначала безопасность, затем сообщение, нейтральный обмен данными, сохранение доказательств, медицинская помощь и контроль сроков.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Обязанности по отчёту и страховке зависят от фактов и действующего закона.

Проверенные правовые основания: Florida Statutes §§ 316.061–316.066, 316.062 и 627.736.

Полезные источники: FLHSMV — What to Do at a Crash (https://www.flhsmv.gov/safety-center/driving-safety/what-to-do-and-expect-when-involved-in-a-crash/); Florida Highway Patrol (https://www.flhsmv.gov/florida-highway-patrol/).`,
  },

  // —— Firearms ——
  {
    id: 'fa-own',
    categoryId: 'firearms',
    titleEn: 'Who may possess',
    titleRu: 'Кто может владеть',
    summaryEn:
      'Federal and Florida disqualifiers, purchasing, safe storage, immigration concerns, and record checks.',
    summaryRu:
      'Федеральные и флоридские запреты, покупка, хранение, иммиграционные риски и проверка записей.',
    bodyEn: `1. Possession Is Not Automatic

Federal and Florida law prohibit firearm or ammunition possession for various people, including many convicted felons, certain people under qualifying domestic-violence orders or convictions, unlawful users of controlled substances, and some people with specified mental-health or immigration statuses. A sealed, withheld, foreign, juvenile, or old case may still require analysis.

2. Before Buying or Handling

• Obtain your complete criminal and court history.
• Verify immigration status and federal eligibility.
• Read every purchase form truthfully; a false statement can be a separate crime.
• Do not “buy for” another person who is the true purchaser.
• Ask a firearms lawyer about restoration, clemency, or record relief before possession—not afterward.

Say to counsel: “Please check both Florida and federal disqualifiers.”

3. Florida Rules and Safe Storage

Florida regulates dealer transactions and imposes waiting-period rules subject to exceptions. Private transfers do not eliminate federal prohibited-person rules. Store firearms inaccessible to minors and unauthorized persons; Florida law penalizes unsafe access by children in specified circumstances.

4. What Not to Do

Do not borrow, hold, transport, or keep ammunition if you may be prohibited. Do not rely on a seller’s opinion, an expired permit, or the fact that a background check once approved. Never alter serial numbers or possess a firearm you know is stolen.

5. Documentation and Legal Help

Keep purchase records, serial numbers, training certificates, safe-storage information, and certified court dispositions. Photograph property records separately and securely. Get legal advice before purchase when any arrest, injunction, immigration issue, involuntary commitment, or prior conviction exists.

Final Advice

Eligibility is a two-law question: lawful under Florida law does not necessarily mean lawful under federal law.

Disclaimer: Educational only, not legal advice. Firearm law changes and depends on precise records and status.

Verified legal foundations: 18 U.S.C. §§ 922(g), 922(d); Florida Statutes §§ 790.065, 790.23, 790.174.

Useful sources: ATF — Prohibited Persons (https://www.atf.gov/firearms/identify-prohibited-persons); Florida Senate — Chapter 790 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter790).`,
    bodyRu: `1. Право владения не возникает автоматически

Федеральный закон и закон Флориды запрещают оружие и боеприпасы разным категориям лиц: многим осуждённым за felony, некоторым лицам под domestic-violence order или с соответствующей судимостью, незаконным потребителям controlled substances, а также при определённом психиатрическом или иммиграционном статусе. Даже sealed, withheld, иностранное, juvenile или старое дело требует проверки.

2. До покупки или любого обращения с оружием

• Получите полную criminal и court history.
• Проверьте иммиграционный статус и федеральное право.
• Правдиво заполните purchase form: ложный ответ — отдельное преступление.
• Не покупайте оружие вместо фактического покупателя.
• До владения спросите firearms lawyer о restoration, clemency или record relief.

Скажите адвокату: “Please check both Florida and federal disqualifiers.” («Проверьте запреты и Флориды, и федерального закона.»)

3. Правила Флориды и безопасное хранение

Флорида регулирует продажи дилеров и сроки ожидания с исключениями. Частная передача не отменяет федеральный запрет для prohibited person. Храните оружие недоступно для детей и посторонних; закон Флориды наказывает за небезопасный доступ ребёнка в установленных случаях.

4. Чего не делать

Не берите взаймы, не держите, не перевозите оружие или патроны, если возможен запрет. Не полагайтесь на мнение продавца, старое разрешение или прежнее одобрение background check. Не меняйте серийный номер и не храните заведомо краденое оружие.

5. Документы и адвокат

Храните документы покупки, серийные номера, training certificates, сведения о сейфе и заверенные решения судов. Отдельно и безопасно сохраните фото учётных данных. До покупки нужен совет при любом аресте, injunction, иммиграционном вопросе, involuntary commitment или судимости.

Итог

Право владения проверяется по двум системам: разрешение Флориды не всегда означает разрешение федерального закона.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Оружейное право меняется и зависит от точных записей и статуса.

Проверенные правовые основания: 18 U.S.C. §§ 922(g), 922(d); Florida Statutes §§ 790.065, 790.23, 790.174.

Полезные источники: ATF — Prohibited Persons (https://www.atf.gov/firearms/identify-prohibited-persons); Florida Senate — Chapter 790 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter790).`,
  },
  {
    id: 'fa-carry',
    categoryId: 'firearms',
    titleEn: 'Carry rules (high level)',
    titleRu: 'Ношение (кратко)',
    summaryEn:
      'Permitless concealed carry eligibility, open-carry limits, transport, reciprocity, and safe conduct.',
    summaryRu:
      'Скрытое ношение без лицензии, открытое ношение, перевозка, reciprocity и безопасность.',
    bodyEn: `1. Florida’s Current Framework

Florida allows many eligible adults to carry a concealed firearm without a Florida license if they satisfy statutory eligibility requirements. This is not unrestricted carry. A license can still matter for reciprocity and other legal benefits. Open carry remains generally prohibited except in listed activities and circumstances.

2. Check Eligibility Every Time

Before carrying, confirm:

• You are not prohibited under state or federal law.
• The location is lawful.
• Any out-of-state license is recognized and its conditions are met.
• Your method of vehicle transport and concealment complies with current law.
• Alcohol, medication, or conduct does not create another offense.

“Permitless” does not mean “no rules” or “no identification.”

3. Safe and Lawful Conduct

Keep the firearm securely holstered and under control. Do not display it to threaten, win an argument, or frighten someone. Florida’s improper-exhibition law can apply even when possession itself is lawful. Avoid handling a firearm in public unless necessary and lawful.

4. Newcomer and Travel Issues

Carry laws change at state lines; Florida permission does not travel automatically. Federal rules apply in airports, federal buildings, and interstate transport. Immigration status can independently prohibit possession. Research every destination and stop before travel.

5. Documentation and Counsel

Carry government identification and any license you rely on. Keep training and purchase records securely, note any police encounter, and obtain a receipt for seized property. Consult counsel before carrying if there is any prior case, injunction, immigration uncertainty, or medication/substance issue.

Final Advice

Verify the person, place, and manner of carry each time. When uncertain, leave the firearm lawfully secured.

Disclaimer: Educational only, not legal advice. Statutes and reciprocity change frequently.

Verified legal foundations: Florida Statutes §§ 790.01, 790.06, 790.053, 790.10, 790.25.

Useful sources: Florida Department of Agriculture — Concealed Weapon Licensing (https://www.fdacs.gov/Consumer-Resources/Concealed-Weapon-License); Florida Senate — Chapter 790 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter790).`,
    bodyRu: `1. Нынешняя система Флориды

Флорида разрешает многим подходящим взрослым скрыто носить оружие без лицензии Флориды, если соблюдены требования статута. Это не неограниченное право. Лицензия всё ещё важна для reciprocity и иных преимуществ. Open carry по-прежнему в основном запрещено, кроме перечисленных занятий и ситуаций.

2. Каждый раз проверяйте законность

До ношения убедитесь:

• Нет запрета по закону штата или федеральному закону.
• Место разрешено.
• Иностранная лицензия признаётся и её условия соблюдены.
• Перевозка в автомобиле и concealment соответствуют текущему закону.
• Алкоголь, лекарства или поведение не создают иного нарушения.

“Permitless” не означает «без правил» или «без удостоверения личности».

3. Безопасное и законное поведение

Держите оружие в надёжной кобуре и под контролем. Не показывайте его, чтобы угрожать, победить в споре или напугать. Florida improper-exhibition law может применяться, даже если само владение законно. Не манипулируйте оружием публично без законной необходимости.

4. Вопросы для приезжих и поездок

Правила меняются на границе штата; разрешение Флориды не действует автоматически везде. В аэропортах, федеральных зданиях и interstate transport действуют федеральные нормы. Иммиграционный статус может отдельно запрещать владение. До поездки проверьте каждый штат и остановку.

5. Документы и помощь

Имейте government ID и лицензию, на которую полагаетесь. Безопасно храните training и purchase records, фиксируйте контакт с полицией и берите квитанцию на изъятое. При старом деле, injunction, неясном статусе или вопросе о веществах советуйтесь до ношения.

Итог

Каждый раз проверяйте человека, место и способ ношения. При сомнении законно оставьте оружие в безопасном месте.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Статуты и reciprocity часто меняются.

Проверенные правовые основания: Florida Statutes §§ 790.01, 790.06, 790.053, 790.10, 790.25.

Полезные источники: Florida Department of Agriculture — Concealed Weapon Licensing (https://www.fdacs.gov/Consumer-Resources/Concealed-Weapon-License); Florida Senate — Chapter 790 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter790).`,
  },
  {
    id: 'fa-places',
    categoryId: 'firearms',
    titleEn: 'Prohibited places',
    titleRu: 'Запрещённые места',
    summaryEn:
      'Florida prohibited locations, federal property, schools, private-property rules, travel, and planning.',
    summaryRu:
      'Запрещённые места Флориды, федеральные объекты, школы, частная собственность и планирование.',
    bodyEn: `1. Location Rules Still Apply

Lawful ownership or permitless carry does not authorize firearms everywhere. Florida restricts carry in listed places such as police stations, detention facilities, courthouses and courtrooms, polling places, certain government meetings, specified school or college facilities/events, airport passenger terminals beyond lawful exceptions, and places barred by federal law.

2. Schools and Government Property

School-zone law is technical and includes federal and state rules with exceptions. Courthouses and federal facilities often use screening and may prohibit weapons in parking or adjacent areas. Never assume a vehicle creates a safe exception.

3. Private Property

Owners and lawful occupants may control entry and ask an armed person to leave. A sign’s direct criminal effect can depend on the location and law, but refusing a lawful request to leave may create trespass exposure. Businesses serving alcohol also require careful attention to the statutory restriction.

4. Plan Before Arrival

• Check the official policy and current statute.
• Identify secure, lawful storage before traveling.
• Do not leave a firearm visible or accessible to children.
• Do not carry into screening and ask afterward.
• If directed to leave, remain calm and comply.

Ask: “Is firearm possession permitted in this building and parking area?”

5. Documentation and Legal Help

Save event tickets, parking rules, posted notices, and any property receipt. If detained, do not explain your legal theory; remain silent and request counsel. Obtain immediate advice after seizure, arrest, school-related allegation, or federal-property incident.

Final Advice

Check the destination, building, event, parking area, and governing federal or state rule before bringing a firearm.

Disclaimer: Educational only, not legal advice. Location restrictions and exceptions are detailed and change.

Verified legal foundations: Florida Statutes §§ 790.06(12), 790.115, 790.25; 18 U.S.C. §§ 922(q), 930.

Useful sources: Florida Senate — Chapter 790 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter790); ATF — Firearms FAQs (https://www.atf.gov/firearms/firearms-guides-importation-verification-firearms-gun-control-act-definition-firearm).`,
    bodyRu: `1. Ограничения по месту сохраняются

Законное владение или permitless carry не разрешают оружие повсюду. Флорида ограничивает его в перечисленных местах: полицейских участках, detention facilities, судах и залах суда, местах голосования, некоторых заседаниях властей, определённых школьных/колледжных объектах и мероприятиях, пассажирских терминалах аэропортов вне исключений и местах, запрещённых федеральным законом.

2. Школы и государственные объекты

School-zone law сложен: действуют федеральные нормы и нормы штата с исключениями. В судах и федеральных зданиях часто есть досмотр; запрет может касаться парковки и соседних зон. Не считайте автомобиль автоматическим исключением.

3. Частная собственность

Владелец или законный пользователь может контролировать вход и потребовать от вооружённого человека уйти. Прямой уголовный эффект таблички зависит от места и закона, но отказ выполнить законное требование уйти может привести к trespass. Отдельно проверяйте ограничения в заведениях, где подают алкоголь.

4. Планируйте заранее

• Проверьте официальную политику и текущий статут.
• До поездки найдите законное безопасное хранение.
• Не оставляйте оружие на виду или доступным детям.
• Не проходите с оружием на досмотр, чтобы спросить потом.
• Если требуют уйти, спокойно выполните требование.

Спросите: “Is firearm possession permitted in this building and parking area?”

5. Документы и адвокат

Сохраните билет на мероприятие, правила парковки, фото знаков и квитанцию на имущество. При задержании не спорьте о своей трактовке: молчите и просите адвоката. Срочная помощь нужна после изъятия, ареста, школьного обвинения или инцидента на federal property.

Итог

До прибытия проверьте пункт назначения, здание, мероприятие, парковку и применимое федеральное право или право штата.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Запреты и исключения детальны и меняются.

Проверенные правовые основания: Florida Statutes §§ 790.06(12), 790.115, 790.25; 18 U.S.C. §§ 922(q), 930.

Полезные источники: Florida Senate — Chapter 790 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter790); ATF — Firearms FAQs (https://www.atf.gov/firearms/firearms-guides-importation-verification-firearms-gun-control-act-definition-firearm).`,
  },
  {
    id: 'fa-police',
    categoryId: 'firearms',
    titleEn: 'If stopped while armed',
    titleRu: 'Если остановили с оружием',
    summaryEn:
      'Safe disclosure, visible hands, lawful commands, searches, seizure records, and requesting counsel.',
    summaryRu:
      'Безопасное сообщение, руки на виду, команды, обыск, учёт изъятия и просьба об адвокате.',
    bodyEn: `1. Make Safety Obvious

During a stop, keep both hands visible and avoid sudden movements. At night, turn on the interior light. Do not reach toward the firearm, waistband, console, or documents until told how to proceed.

2. Communicate Calmly

Florida does not impose a universal duty on every lawfully armed person to volunteer disclosure at every encounter, but you must comply with applicable identification and lawful officer instructions. A safe phrase is:

“Officer, I want to cooperate safely. I have a lawfully carried firearm at [location]. How would you like me to proceed?”

Do not say “I have a gun” while reaching. If asked directly, do not lie.

3. During the Stop

• Follow commands about hands, occupants, and exiting.
• Tell the officer before reaching for a wallet near the firearm.
• Do not handle or unload the weapon unless specifically directed.
• State “I do not consent to a search” if appropriate, but never resist.
• Ask for an interpreter (Russian or your language) if commands are unclear.

4. If Questioning Expands

Provide required documents, then say: “I choose to remain silent and want an attorney.” Do not debate eligibility, ownership, immigration status, or where the firearm came from. A temporary safety seizure does not itself decide whether later retention is lawful.

5. Afterward

Record officers, time, location, commands, exact statements, searches, damage, witnesses, and body/dash-camera availability. Obtain an inventory or property receipt and instructions for return. Contact counsel promptly after arrest, citation, seizure, alleged improper exhibition, or any eligibility concern.

Final Advice

Visible hands, advance notice before movement, and calm compliance reduce danger; legal disputes belong with counsel afterward.

Disclaimer: Educational only, not legal advice. Disclosure and carry duties depend on status and circumstances.

Verified legal foundations: U.S. Constitution, Fourth and Fifth Amendments; Florida Statutes §§ 790.01, 790.06, 790.10.

Useful sources: ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police); Florida Senate — Chapter 790 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter790).`,
    bodyRu: `1. Сделайте безопасность очевидной

При остановке держите обе руки на виду и избегайте резких движений. Ночью включите свет в салоне. Не тянитесь к оружию, поясу, консоли или документам, пока офицер не объяснит порядок.

2. Говорите спокойно

Во Флориде нет универсальной обязанности каждому законно вооружённому человеку первым сообщать об оружии при любом контакте, но нужно выполнять применимые требования об идентификации и законные команды. Безопасная фраза:

“Officer, I want to cooperate safely. I have a lawfully carried firearm at [location]. How would you like me to proceed?” («Я хочу действовать безопасно. У меня законно находится оружие [где]. Что мне делать?»)

Не говорите резко “I have a gun”, одновременно протягивая руку. На прямой вопрос не лгите.

3. Во время остановки

• Выполняйте команды о руках, пассажирах и выходе.
• Предупредите, прежде чем доставать кошелёк рядом с оружием.
• Не берите и не разряжайте оружие без прямой команды.
• При необходимости скажите “I do not consent to a search”, но не сопротивляйтесь.
• Если команды непонятны, попросите переводчика — русского или на вашем языке.

4. Если вопросы выходят за рамки остановки

Предъявите обязательные документы, затем скажите: “I choose to remain silent and want an attorney.” Не спорьте о праве владения, собственнике, иммиграционном статусе или происхождении оружия. Временное изъятие ради безопасности само по себе не решает законность дальнейшего удержания.

5. После контакта

Запишите офицеров, время, место, команды, точные слова, обыск, ущерб, свидетелей и наличие body/dash camera. Получите inventory/property receipt и порядок возврата. Срочно обратитесь к counsel после ареста, citation, изъятия, обвинения в improper exhibition или сомнения в eligibility.

Итог

Руки на виду, предупреждение до движения и спокойное выполнение команд снижают опасность; юридический спор ведите позже через адвоката.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Обязанности зависят от статуса и обстоятельств.

Проверенные правовые основания: Четвёртая и Пятая поправки к Конституции США; Florida Statutes §§ 790.01, 790.06, 790.10.

Полезные источники: ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police); Florida Senate — Chapter 790 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter790).`,
  },

  // —— Self-Defense ——
  {
    id: 'sd-force',
    categoryId: 'selfDefense',
    titleEn: 'When force may be justified',
    titleRu: 'Когда сила может быть оправдана',
    summaryEn:
      'Imminence, necessity, proportionality, deadly-force limits, aggressor rules, and evidence.',
    summaryRu:
      'Неминуемость, необходимость, соразмерность, пределы deadly force, агрессор и доказательства.',
    bodyEn: `1. Force Must Be Legally Justified

Florida generally permits nondeadly force when a person reasonably believes it is necessary to defend against another’s imminent unlawful force. Deadly force has stricter requirements, such as a reasonable belief that it is necessary to prevent imminent death, great bodily harm, or a qualifying forcible felony.

Fear alone is not enough. Courts examine what happened, what you reasonably perceived, and whether the force used fit the threat.

2. Important Limits

Self-defense is not permission to punish, chase, retaliate, protect pride, or use force after danger ends. An initial aggressor may lose the defense unless statutory withdrawal or escalation rules apply. Words alone ordinarily do not justify violence. Property protection has separate limits.

3. Safer Choices

• Avoid and de-escalate when safely possible.
• Call 911 early and move toward safety.
• Do not display a weapon merely to intimidate.
• Stop using force when the threat stops.
• Never alter the scene or coordinate stories.

If police arrive, keep hands visible and say: “I will cooperate, but I want medical help and an attorney before a detailed statement.”

4. Evidence and Florida Procedure

Preserve injuries, clothing, damaged property, video, messages, 911 calls, witness contacts, and medical records. Note distances, lighting, exits, warnings, and the sequence of events. Florida law provides immunity procedures in some justified-use-of-force cases, but immunity is not automatic.

5. Get a Lawyer

Any use of force can produce arrest, civil claims, firearm seizure, immigration effects, or conflicting witness accounts. Contact a Florida criminal-defense lawyer immediately, especially after injury, weapon use, domestic conflict, or police questioning.

Final Advice

Use force only against an imminent unlawful threat, only as reasonably necessary, and stop when the danger ends.

Disclaimer: Educational only, not legal advice. Justification is intensely fact-specific.

Verified legal foundations: Florida Statutes §§ 776.012, 776.013, 776.031, 776.041, 776.032.

Useful sources: Florida Senate — Chapter 776 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter776); Florida Courts (https://www.flcourts.gov/).`,
    bodyRu: `1. Сила должна быть юридически оправдана

Во Флориде nondeadly force обычно допустима, если человек разумно считает её необходимой против неминуемой незаконной силы другого. Для deadly force условия строже: например, разумная необходимость предотвратить неминуемую смерть, тяжкий вред или определённый forcible felony.

Одного страха недостаточно. Суд оценивает событие, разумность вашего восприятия и соответствие применённой силы угрозе.

2. Важные пределы

Самооборона не разрешает наказывать, преследовать, мстить, защищать самолюбие или продолжать после окончания опасности. Первоначальный агрессор может потерять защиту, если не применимы правила об отходе или усилении угрозы. Одни слова обычно не оправдывают насилие. Для защиты имущества действуют отдельные пределы.

3. Более безопасные действия

• Избегайте и снижайте конфликт, когда это безопасно.
• Рано звоните 911 и уходите к безопасности.
• Не показывайте оружие только ради запугивания.
• Прекратите силу, когда угроза прекратилась.
• Не меняйте место и не согласовывайте рассказы.

При прибытии полиции держите руки на виду и скажите: “I will cooperate, but I want medical help and an attorney before a detailed statement.”

4. Доказательства и процедура Флориды

Сохраните сведения о травмах, одежду, повреждённые вещи, видео, сообщения, 911 calls, контакты свидетелей и медзаписи. Запишите расстояния, освещение, выходы, предупреждения и последовательность. Закон Флориды предусматривает процедуру immunity для некоторых оправданных случаев, но она не автоматическая.

5. Нужен адвокат

Любая сила может привести к аресту, civil claim, изъятию оружия, иммиграционным последствиям или противоречивым показаниям. Немедленно обращайтесь к Florida criminal-defense lawyer, особенно после травмы, оружия, семейного конфликта или вопросов полиции.

Итог

Применяйте силу только против неминуемой незаконной угрозы, только в разумно необходимом объёме и прекращайте с окончанием опасности.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Оправданность крайне зависит от фактов.

Проверенные правовые основания: Florida Statutes §§ 776.012, 776.013, 776.031, 776.041, 776.032.

Полезные источники: Florida Senate — Chapter 776 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter776); Florida Courts (https://www.flcourts.gov/).`,
  },
  {
    id: 'sd-syg',
    categoryId: 'selfDefense',
    titleEn: 'Stand Your Ground (basics)',
    titleRu: 'Stand Your Ground (основы)',
    summaryEn:
      'What no duty to retreat does—and does not—mean, immunity procedure, limits, and evidence.',
    summaryRu:
      'Что означает и не означает отсутствие обязанности отступать, immunity, пределы и доказательства.',
    bodyEn: `1. What “Stand Your Ground” Means

Florida law can remove a duty to retreat before justified force when a person is not engaged in criminal activity and is in a place where they have a right to be. It does not eliminate the need for a reasonable belief in an imminent threat or the other requirements for nondeadly or deadly force.

2. What It Does Not Mean

It is not a license to start a confrontation, pursue someone, use disproportionate force, or shoot merely because a person is on property. The initial-aggressor rule, firearm laws, and limits on defense of property still apply. A safe retreat may remain wise even when not legally required.

3. Home and Vehicle Presumptions

Florida has specific presumptions involving unlawful and forceful entry into a dwelling, residence, or occupied vehicle, with important exceptions. The presumption may not apply, for example, in some situations involving lawful residents, child custody, law enforcement, or criminal activity.

4. Immunity Is a Legal Process

Florida provides potential criminal and civil immunity for justified force. Police, prosecutors, and courts examine facts; saying “Stand Your Ground” does not end an investigation. Pretrial immunity procedure and burdens are technical and require counsel.

5. Preserve Facts, Not Conclusions

• Call 911 and request medical/police help.
• Preserve video, entry damage, warnings, witnesses, injuries, and scene layout.
• Do not move evidence or post online.
• Give essential safety information, then request counsel.

Say: “I was attacked, evidence and witnesses are present, and I want an attorney before a detailed statement.”

Final Advice

Focus on avoiding danger. After force, preserve evidence and let qualified counsel evaluate retreat, presumptions, and immunity.

Disclaimer: Educational only, not legal advice. Stand Your Ground outcomes turn on exact facts.

Verified legal foundations: Florida Statutes §§ 776.012, 776.013, 776.032, 776.041.

Useful sources: Florida Senate — Chapter 776 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter776); Florida Courts (https://www.flcourts.gov/).`,
    bodyRu: `1. Что означает Stand Your Ground

Закон Флориды может снимать обязанность отступать перед оправданным применением силы, если человек не участвует в преступной деятельности и законно находится в этом месте. Но сохраняются требования разумно воспринимать неминуемую угрозу и все иные условия nondeadly или deadly force.

2. Чего этот принцип не означает

Он не разрешает начинать конфликт, преследовать, применять несоразмерную силу или стрелять лишь потому, что кто-то находится на территории. Действуют правило initial aggressor, оружейные законы и пределы защиты имущества. Безопасный отход может быть разумным, даже когда юридически не обязателен.

3. Презумпции для дома и машины

Во Флориде есть специальные презумпции при незаконном насильственном проникновении в dwelling, residence или occupied vehicle и важные исключения. Например, презумпция может не действовать для законного жильца, вопросов custody ребёнка, полиции или преступной деятельности.

4. Immunity — юридическая процедура

Флорида предусматривает возможный уголовный и гражданский иммунитет за оправданную силу. Полиция, прокурор и суд изучают факты; фраза “Stand Your Ground” не прекращает расследование. Досудебная процедура и burdens сложны, поэтому нужен counsel.

5. Сохраняйте факты, а не выводы

• Позвоните 911 и просите медицинскую/полицейскую помощь.
• Сохраните видео, следы проникновения, предупреждения, свидетелей, травмы и схему места.
• Не перемещайте доказательства и не публикуйте материалы.
• Сообщите главное для безопасности, затем просите адвоката.

Скажите: “I was attacked, evidence and witnesses are present, and I want an attorney before a detailed statement.”

Итог

Главное — избегать опасности. После силы сохраните доказательства, а retreat, презумпции и immunity пусть оценивает квалифицированный адвокат.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Результат Stand Your Ground зависит от точных фактов.

Проверенные правовые основания: Florida Statutes §§ 776.012, 776.013, 776.032, 776.041.

Полезные источники: Florida Senate — Chapter 776 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter776); Florida Courts (https://www.flcourts.gov/).`,
  },
  {
    id: 'sd-after',
    categoryId: 'selfDefense',
    titleEn: 'After a self-defense incident',
    titleRu: 'После инцидента самообороны',
    summaryEn:
      'Emergency response, safe police contact, medical care, evidence preservation, silence, and counsel.',
    summaryRu:
      'Экстренная помощь, безопасный контакт с полицией, медицина, доказательства, молчание и адвокат.',
    bodyEn: `1. End the Danger and Call 911

Move to safety, stop using force when the threat ends, and call 911. Request police and medical help, identify the location, describe immediate hazards, and follow dispatcher safety instructions. Do not chase anyone.

2. When Police Arrive

Officers may not know who the aggressor is. Put down any weapon before they approach if safely possible, keep hands visible, and obey commands. Point out injured people, active dangers, evidence, and witnesses without giving a long narrative.

You may say:

“I was attacked. I will cooperate, but I want medical attention and an attorney before a detailed statement.”

Ask for an interpreter (Russian or your language) if needed. Do not lie or physically resist detention.

3. Preserve the Scene

• Do not move, clean, unload, delete, or stage evidence.
• Identify cameras and witnesses before they disappear.
• Photograph injuries when safe and seek prompt medical care.
• Preserve torn clothing, messages, calls, location data, and prior threats.
• Write a private chronology for your lawyer as soon as possible.

4. Avoid Damaging the Case

Do not post, livestream, contact the other side, coordinate stories, or discuss facts on recorded jail calls. Follow every no-contact, firearm-surrender, and release condition. Do not assume police will treat the event as justified immediately.

5. Get Counsel Quickly

A self-defense claim can involve criminal investigation, immunity litigation, civil liability, firearms, employment, and immigration. Contact a Florida defense lawyer immediately; noncitizens should also obtain immigration advice before any plea or statement.

Final Advice

Call for help, make the scene safe, preserve evidence, request medical care, and obtain counsel before a detailed interview.

Disclaimer: Educational only, not legal advice. Emergency safety always comes first.

Verified legal foundations: Florida Statutes Chapter 776; U.S. Constitution, Fifth and Sixth Amendments.

Useful sources: Florida Senate — Chapter 776 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter776); ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police).`,
    bodyRu: `1. Прекратите опасность и звоните 911

Перейдите в безопасное место, прекратите силу с окончанием угрозы и звоните 911. Попросите полицию и скорую, назовите место и непосредственные опасности, выполняйте команды диспетчера. Не преследуйте человека.

2. При прибытии полиции

Офицеры могут не знать, кто агрессор. Если безопасно, положите оружие до их подхода, держите руки на виду и выполняйте команды. Покажите пострадавших, активные угрозы, доказательства и свидетелей без длинного рассказа.

Можно сказать:

“I was attacked. I will cooperate, but I want medical attention and an attorney before a detailed statement.”

Если нужно, попросите переводчика — русского или на вашем языке. Не лгите и не сопротивляйтесь задержанию.

3. Сохраните место

• Не перемещайте, не убирайте, не разряжайте, не удаляйте и не подстраивайте доказательства.
• Найдите камеры и свидетелей, пока они доступны.
• Безопасно сфотографируйте травмы и быстро обратитесь к врачу.
• Сохраните порванную одежду, сообщения, звонки, геолокацию и прежние угрозы.
• Как можно раньше составьте личную хронологию для адвоката.

4. Не повредите делу

Не публикуйте, не ведите трансляцию, не связывайтесь с другой стороной, не согласовывайте истории и не обсуждайте факты по записываемому тюремному телефону. Соблюдайте no-contact, firearm-surrender и release conditions. Не рассчитывайте, что полиция сразу признает действия оправданными.

5. Быстро найдите адвоката

Самооборона затрагивает уголовное расследование, immunity, civil liability, оружие, работу и иммиграцию. Немедленно свяжитесь с Florida defense lawyer; негражданам также нужен immigration lawyer до plea или заявления.

Итог

Вызовите помощь, обезопасьте место, сохраните доказательства, просите медицинскую помощь и counsel до подробного допроса.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Экстренная безопасность всегда важнее.

Проверенные правовые основания: Florida Statutes Chapter 776; Пятая и Шестая поправки к Конституции США.

Полезные источники: Florida Senate — Chapter 776 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter776); ACLU — Stopped by Police (https://www.aclu.org/know-your-rights/stopped-by-police).`,
  },

  // —— Domestic Violence ——
  {
    id: 'dv-911',
    categoryId: 'domesticViolence',
    titleEn: 'Immediate danger',
    titleRu: 'Непосредственная опасность',
    summaryEn:
      'Emergency escape, calling 911 safely, children, language access, planning, and confidential support.',
    summaryRu:
      'Экстренный уход, безопасный звонок 911, дети, перевод, план и конфиденциальная поддержка.',
    bodyEn: `1. If Danger Is Immediate

Call 911, leave if you safely can, and go to a neighbor, public place, shelter, or locked room with an exit. Avoid kitchens, garages, and rooms with weapons. Tell the dispatcher your address, injuries, weapons, children present, and whether the aggressor is nearby.

Say: “I am in immediate danger. Send police and medical help.” Ask for an interpreter (Russian or your language).

2. If Calling Is Unsafe

Use text-to-911 only where available, a trusted person, or a safer device. Do not rely on a phone the abusive person monitors. The National Domestic Violence Hotline offers call, chat, and text support; clear history only if doing so will not increase danger.

3. Children and Medical Care

Teach children how to call 911 without intervening physically. Take identification, medicines, and essential items only if safe—do not delay escape. Request medical care and ask clinicians to document injuries accurately.

4. Safety Plan

Prepare:

• IDs, immigration papers, keys, cash, medicines, and children’s records.
• A code word and trusted contact.
• A safe destination and transport.
• Copies of orders, police reports, and emergency numbers.
• Digital-security steps for passwords, location sharing, and devices.

Immigration status does not remove the right to emergency police and medical help. Do not let threats about deportation prevent a safety call.

5. After the Emergency

Ask for the incident/report number and victim advocate. Photograph injuries and damage when safe. Contact a domestic-violence program or lawyer about shelter, injunctions, custody, housing, and immigration options.

Final Advice

Your immediate safety and children’s safety come first; documents and property can be recovered later.

Disclaimer: Educational only, not legal advice. If danger is immediate, contact 911.

Verified legal foundations: Florida Statutes Chapters 741 and 784; federal language-access and victim-protection laws may apply.

Useful sources: National Domestic Violence Hotline (https://www.thehotline.org/) — 1-800-799-7233, text START to 88788; Florida DCF Domestic Violence (https://www.myflfamilies.com/services/abuse/domestic-violence).`,
    bodyRu: `1. Если опасность непосредственная

Звоните 911, уходите, если это безопасно, и направляйтесь к соседям, в общественное место, shelter или запираемую комнату с выходом. Избегайте кухни, гаража и комнат с оружием. Сообщите адрес, травмы, оружие, присутствие детей и находится ли агрессор рядом.

Скажите: “I am in immediate danger. Send police and medical help.” Попросите переводчика — русского или на вашем языке.

2. Если звонить небезопасно

Используйте text-to-911 только там, где он доступен, доверенного человека или более безопасное устройство. Не полагайтесь на телефон, который контролирует обидчик. National Domestic Violence Hotline предлагает звонок, чат и текст; удаляйте историю только если это не увеличит опасность.

3. Дети и медицина

Научите детей звонить 911, но не вмешиваться физически. Возьмите документы, лекарства и самое необходимое, только если безопасно; не задерживайте уход. Просите медицинскую помощь и точную фиксацию травм.

4. План безопасности

Подготовьте:

• ID, иммиграционные документы, ключи, деньги, лекарства и документы детей.
• Кодовое слово и доверенный контакт.
• Безопасное место и транспорт.
• Копии ордеров, police reports и экстренные номера.
• Защиту паролей, location sharing и устройств.

Иммиграционный статус не лишает права на экстренную полицию и медицину. Не позволяйте угрозам депортацией остановить безопасный звонок.

5. После экстренной ситуации

Попросите номер incident/report и victim advocate. Когда безопасно, сфотографируйте травмы и ущерб. Свяжитесь с DV program или адвокатом по вопросам shelter, injunction, custody, жилья и иммиграционных вариантов.

Итог

Безопасность ваша и детей важнее; документы и имущество можно восстанавливать позже.

Отказ от ответственности: только образовательная информация, не юридическая консультация. При немедленной опасности звоните 911.

Проверенные правовые основания: Florida Statutes Chapters 741 и 784; могут применяться федеральные законы о языковом доступе и защите жертв.

Полезные источники: National Domestic Violence Hotline (https://www.thehotline.org/) — 1-800-799-7233, текст START на 88788; Florida DCF Domestic Violence (https://www.myflfamilies.com/services/abuse/domestic-violence).`,
  },
  {
    id: 'dv-arrest',
    categoryId: 'domesticViolence',
    titleEn: 'Police response in Florida',
    titleRu: 'Реакция полиции во Флориде',
    summaryEn:
      'How Florida police assess domestic violence, probable-cause arrests, no-contact rules, and next steps.',
    summaryRu:
      'Как полиция Флориды оценивает DV, арест, no-contact, доказательства и дальнейшие действия.',
    bodyEn: `1. Police Response

Florida officers investigate who may be the primary aggressor by considering injuries, threats, witness accounts, prior incidents, self-defense, and other evidence. With probable cause, an officer may make a warrantless arrest under Florida law. The reporting person does not personally “press” or later “drop” criminal charges; prosecutors decide.

2. Speaking With Officers

If seeking protection, state what happened in order, identify injuries, weapons, strangulation, threats, children, witnesses, and evidence. Ask for an interpreter (Russian or your language) and the report number. Do not exaggerate or guess.

If you may be accused, say: “I choose to remain silent and want an attorney.” Do not contact the other person to coordinate stories.

3. After an Arrest

Courts may impose no-contact, stay-away, firearm, residence, monitoring, or release conditions. “No contact” can include calls, messages, social media, third parties, and even invited contact. Only the court can change its order.

4. Preserve Evidence

• Photograph injuries over several days and obtain medical care.
• Save messages, voicemails, 911 calls, video, and witness contacts.
• Keep police, jail, bond, and court papers.
• Write a chronology and prior incident dates.
• Do not delete unfavorable material or alter the scene.

5. Legal and Immigration Help

Victims can ask for advocates, shelter, safety planning, and injunction information. An accused person needs criminal counsel immediately. Noncitizens on either side should obtain confidential immigration advice; arrests, pleas, and some victim-based remedies can affect status.

Final Advice

Follow every safety and court order exactly, preserve evidence, and use advocates and lawyers rather than private pressure.

Disclaimer: Educational only, not legal advice. Police and charging decisions depend on facts and current law.

Verified legal foundations: Florida Statutes §§ 741.28, 741.29, 901.15.

Useful sources: Florida Senate — § 741.29 (https://www.flsenate.gov/Laws/Statutes/2026/741.29); Florida DCF Domestic Violence (https://www.myflfamilies.com/services/abuse/domestic-violence).`,
    bodyRu: `1. Реакция полиции

Офицеры Флориды определяют возможного primary aggressor по травмам, угрозам, свидетелям, прежним эпизодам, самообороне и другим данным. При probable cause возможен арест без ордера. Заявитель сам не «выдвигает» и не «забирает» уголовное обвинение; решение принимает прокурор.

2. Разговор с офицерами

Если вы просите защиты, по порядку сообщите событие, травмы, оружие, strangulation, угрозы, присутствие детей, свидетелей и доказательства. Попросите переводчика — русского или на вашем языке — и номер отчёта. Не преувеличивайте и не гадайте.

Если обвинение возможно против вас, скажите: “I choose to remain silent and want an attorney.” Не связывайтесь с другой стороной для согласования рассказа.

3. После ареста

Суд может установить no-contact, stay-away, сдачу оружия, запрет возвращаться домой, monitoring и другие release conditions. “No contact” включает звонки, сообщения, соцсети, третьих лиц и даже приглашённый контакт. Изменить приказ может только суд.

4. Сохраните доказательства

• Фотографируйте травмы несколько дней и обратитесь к врачу.
• Сохраните сообщения, voicemail, 911 calls, видео и свидетелей.
• Храните police, jail, bond и court papers.
• Составьте хронологию и даты прежних эпизодов.
• Не удаляйте неудобные материалы и не меняйте место.

5. Юридическая и иммиграционная помощь

Жертва может просить advocate, shelter, safety plan и информацию об injunction. Обвиняемому немедленно нужен criminal lawyer. Негражданам с любой стороны нужна конфиденциальная immigration advice: арест, plea и некоторые victim remedies влияют на статус.

Итог

Точно соблюдайте приказы суда и меры безопасности, сохраняйте доказательства и используйте advocates и адвокатов, а не частное давление.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Решения полиции и прокурора зависят от фактов.

Проверенные правовые основания: Florida Statutes §§ 741.28, 741.29, 901.15.

Полезные источники: Florida Senate — § 741.29 (https://www.flsenate.gov/Laws/Statutes/2026/741.29); Florida DCF Domestic Violence (https://www.myflfamilies.com/services/abuse/domestic-violence).`,
  },
  {
    id: 'dv-injunction',
    categoryId: 'domesticViolence',
    titleEn: 'Injunctions (protective orders)',
    titleRu: 'Injunction (охранный ордер)',
    summaryEn:
      'Petitioning, temporary and final orders, service, hearings, enforcement, evidence, and strict compliance.',
    summaryRu:
      'Подача, временный и окончательный ордер, вручение, слушание, исполнение и соблюдение.',
    bodyEn: `1. What an Injunction Can Do

A Florida injunction for protection may order no contact, stay-away distances, exclusive use of a home, temporary child-related terms, firearm surrender, counseling, or other relief. Different statutes cover domestic, dating, repeat, sexual, and stalking violence.

2. Applying

Petitions are generally filed with the circuit-court clerk. Describe specific events, dates, threats, injuries, weapons, stalking, and why future harm is feared. Attach or identify supporting evidence. An advocate can assist, and filing generally does not require a lawyer or fee.

Ask early: “I need an interpreter in Russian [or my language] for filing and the hearing.”

3. Temporary and Final Orders

A judge may issue a temporary ex parte order before the other party is heard, then schedule a full hearing. Service matters. Bring organized evidence, witnesses, copies, and a timeline. Attend even if a related criminal case exists; coordinate testimony with counsel.

4. Compliance and Enforcement

Read every line. Keep a copy and provide it to schools or workplaces when appropriate. Report violations to law enforcement and preserve proof. If served as respondent, obey immediately—even if the protected person invites contact. Do not use friends, children, gifts, or social media to communicate. Only the court can modify or dissolve the order.

5. Get Legal Help

Seek counsel for custody, housing, firearms, immigration, criminal charges, cross-petitions, or contested facts. An injunction can have major consequences even though the proceeding is civil.

Final Advice

Use the court process, attend the hearing, document service and violations, and never privately renegotiate an order.

Disclaimer: Educational only, not legal advice. Forms and local procedures vary.

Verified legal foundations: Florida Statutes §§ 741.30, 784.046, 784.0485; Florida Family Law Rules.

Useful sources: Florida Courts — Injunctions for Protection (https://www.flcourts.gov/Resources-Services/Court-Improvement/Self-Help-Information/Family-Law-Forms-2); Florida Clerks (https://www.flclerks.com/).`,
    bodyRu: `1. Что может установить injunction

Florida injunction for protection может запретить контакт и приближение, предоставить одному лицу дом, временно урегулировать вопросы детей, потребовать сдачи оружия, counseling и иные меры. Отдельные статуты относятся к domestic, dating, repeat, sexual violence и stalking.

2. Подача

Petition обычно подают clerk circuit court. Укажите конкретные события, даты, угрозы, травмы, оружие, преследование и причину страха будущего вреда. Приложите или перечислите доказательства. Advocate может помочь; для подачи обычно не нужны адвокат и пошлина.

Заранее скажите: “I need an interpreter in Russian [or my language] for filing and the hearing.”

3. Временный и окончательный ордер

Судья может выдать temporary ex parte order до выслушивания другой стороны, затем назначить полное hearing. Важно надлежащее service. Принесите упорядоченные доказательства, свидетелей, копии и timeline. Приходите, даже если есть уголовное дело; согласуйте показания с counsel.

4. Соблюдение и исполнение

Прочитайте каждую строку. Носите копию и при необходимости дайте школе или работе. Сообщайте полиции о нарушениях и сохраняйте доказательства. Получив ордер как respondent, сразу соблюдайте его, даже если защищаемое лицо приглашает к контакту. Не используйте друзей, детей, подарки или соцсети. Изменить или отменить ордер может только суд.

5. Юридическая помощь

Counsel нужен при custody, жилье, оружии, иммиграции, уголовном деле, встречных petition или спорных фактах. Injunction может иметь большие последствия, хотя производство гражданское.

Итог

Используйте суд, приходите на hearing, фиксируйте service и нарушения и никогда не пересматривайте приказ частным соглашением.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Формы и местные процедуры различаются.

Проверенные правовые основания: Florida Statutes §§ 741.30, 784.046, 784.0485; Florida Family Law Rules.

Полезные источники: Florida Courts — Injunctions for Protection (https://www.flcourts.gov/Resources-Services/Court-Improvement/Self-Help-Information/Family-Law-Forms-2); Florida Clerks (https://www.flclerks.com/).`,
  },
  {
    id: 'dv-evidence',
    categoryId: 'domesticViolence',
    titleEn: 'Evidence & support',
    titleRu: 'Доказательства и поддержка',
    summaryEn:
      'Safe evidence preservation, medical records, digital security, advocates, court preparation, and confidentiality.',
    summaryRu:
      'Безопасное сохранение доказательств, медицина, цифровая защита, advocates и подготовка к суду.',
    bodyEn: `1. Safety Before Documentation

Do not collect evidence if doing so creates immediate danger. Use a safer device or trusted person, and store copies where the abusive person cannot access them. Emergency help is more important than obtaining a perfect record.

2. Useful Evidence

When safe, preserve:

• Photos of injuries, property damage, and the scene over time.
• Threatening texts, emails, social posts, voicemails, and call logs.
• 911/police report numbers and witness contacts.
• Medical records, bills, and clinician notes.
• Dates, locations, exact words, strangulation, weapons, and children present.
• Financial control, stalking, GPS trackers, and account-access alerts.

Keep originals and backups; screenshots alone may omit sender and date information.

3. Digital Security

Change passwords from a safe device, enable multifactor authentication, review location sharing and family accounts, and check connected devices. Do not remove a tracker or change an account if discovery could increase danger—ask an advocate to plan safely.

4. Working With Helpers

Victim advocates can assist with safety planning, shelters, compensation, injunction forms, and court accompaniment. Ask what is confidential: advocate, hotline, police, medical, and attorney communications have different privacy rules. Request an interpreter (Russian or your language).

5. Court and Legal Help

Organize a chronology and copies, not edited compilations. Do not coach witnesses or post evidence publicly. A lawyer can address subpoenas, custody, immigration remedies, housing, and preserving digital evidence.

Final Advice

Document consistently and safely, keep originals secure, and pair evidence collection with professional safety planning.

Disclaimer: Educational only, not legal advice. Evidence rules and confidentiality depend on context.

Verified legal foundations: Florida Statutes Chapters 741 and 960; Florida Evidence Code, Chapter 90.

Useful sources: National Domestic Violence Hotline (https://www.thehotline.org/); Florida DCF Domestic Violence (https://www.myflfamilies.com/services/abuse/domestic-violence).`,
    bodyRu: `1. Безопасность важнее фиксации

Не собирайте доказательства, если это создаёт непосредственную опасность. Используйте безопасное устройство или доверенного человека, храните копии вне доступа обидчика. Экстренная помощь важнее идеальной записи.

2. Полезные доказательства

Когда безопасно, сохраняйте:

• Фото травм, повреждений и места в разные дни.
• Угрозы в text/email/social media, voicemail и call logs.
• Номера 911/police report и контакты свидетелей.
• Медицинские записи, счета и clinician notes.
• Даты, места, точные слова, strangulation, оружие и присутствие детей.
• Финансовый контроль, stalking, GPS trackers и alerts доступа.

Храните оригиналы и резервные копии; screenshot может не показать отправителя и дату.

3. Цифровая безопасность

С безопасного устройства смените пароли, включите multifactor authentication, проверьте location sharing, family accounts и подключённые устройства. Не снимайте tracker и не меняйте аккаунт, если обнаружение увеличит риск; безопасный план составьте с advocate.

4. Работа с помощниками

Victim advocates помогают с safety plan, shelters, compensation, injunction forms и сопровождением в суде. Уточняйте конфиденциальность: у advocate, hotline, полиции, врача и адвоката разные правила. Попросите переводчика — русского или на вашем языке.

5. Суд и юридическая помощь

Подготовьте хронологию и копии, а не отредактированный монтаж. Не инструктируйте свидетелей и не публикуйте материалы. Адвокат поможет с subpoenas, custody, immigration remedies, жильём и сохранением digital evidence.

Итог

Фиксируйте последовательно и безопасно, храните оригиналы и совмещайте сбор материалов с профессиональным safety planning.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Правила доказательств и конфиденциальности зависят от контекста.

Проверенные правовые основания: Florida Statutes Chapters 741 и 960; Florida Evidence Code, Chapter 90.

Полезные источники: National Domestic Violence Hotline (https://www.thehotline.org/); Florida DCF Domestic Violence (https://www.myflfamilies.com/services/abuse/domestic-violence).`,
  },

  // —— Immigration ——
  {
    id: 'im-rights',
    categoryId: 'immigration',
    titleEn: 'Rights during encounters',
    titleRu: 'Права при контактах',
    summaryEn:
      'Silence, identification, counsel, document safety, language access, detention planning, and family preparation.',
    summaryRu:
      'Молчание, идентификация, адвокат, документы, перевод, detention и семейный план.',
    bodyEn: `1. Rights Apply Regardless of Status

You generally may remain silent about birthplace, citizenship, and how you entered the United States. Ask: “Am I free to leave?” If yes, leave calmly. If no, say: “I choose to remain silent. I want to speak with a lawyer.”

Some people must carry specific federal immigration registration documents, and drivers must provide required driving documents. Do not lie, claim U.S. citizenship falsely, or present false papers.

2. Police and ICE Encounters

Keep hands visible and do not run or resist. Do not sign a voluntary-departure, stipulated-removal, or other document you do not understand. Ask for an interpreter (Russian or your language). In immigration proceedings, the government generally does not provide free appointed counsel, but you may hire counsel or seek nonprofit help.

3. If Detained

• Give your full legal name if legally required.
• Request contact with counsel and your consulate when appropriate.
• Memorize important phone numbers.
• Do not discuss your case on recorded calls.
• Ask for necessary medication and medical care.
• Keep copies of all immigration and charging papers.

4. Family and Document Plan

Store copies of passports, A-numbers, receipts, court notices, birth certificates, medications, and lawyer contacts with a trusted person. Prepare lawful child-care authorization and emergency finances. Verify any notario or representative; only licensed attorneys and DOJ-accredited representatives may provide immigration legal services.

5. Get Individual Advice

Contact immigration counsel after any arrest, ICE contact, missed hearing, charging document, or status expiration. Criminal counsel should coordinate with immigration counsel before any plea.

Final Advice

Stay calm, do not lie or use false documents, clearly invoke silence and counsel, and keep a family emergency plan.

Disclaimer: Educational only, not legal advice. Duties and remedies vary by immigration category and facts.

Verified legal foundations: U.S. Constitution, Fourth and Fifth Amendments; 8 U.S.C. §§ 1229a and 1304; applicable state identification law.

Useful sources: ACLU — Immigrants’ Rights (https://www.aclu.org/know-your-rights/immigrants-rights); EOIR — Find Legal Representation (https://www.justice.gov/eoir/find-legal-representation).`,
    bodyRu: `1. Права действуют независимо от статуса

Обычно можно молчать о месте рождения, гражданстве и способе въезда в США. Спросите: “Am I free to leave?” Если да — спокойно уходите. Если нет, скажите: “I choose to remain silent. I want to speak with a lawyer.”

Некоторые лица обязаны носить определённые федеральные registration documents, а водитель — предъявлять обязательные дорожные документы. Не лгите, не заявляйте ложно гражданство США и не показывайте поддельные бумаги.

2. Контакт с полицией и ICE

Держите руки на виду, не убегайте и не сопротивляйтесь. Не подписывайте voluntary departure, stipulated removal или другой непонятный документ. Попросите переводчика — русского или на вашем языке. В immigration proceedings государство обычно не предоставляет бесплатного назначенного адвоката, но можно нанять counsel или найти nonprofit help.

3. Если вас задержали

• Назовите полное законное имя, когда это требуется законом.
• Просите связь с counsel и при необходимости с консульством.
• Запомните важные телефоны.
• Не обсуждайте дело по записываемым звонкам.
• Просите необходимые лекарства и медицинскую помощь.
• Храните копии immigration и charging papers.

4. Семейный план и документы

Оставьте доверенному лицу копии паспортов, A-number, receipts, court notices, свидетельств о рождении, списка лекарств и контактов адвоката. Подготовьте законные полномочия по уходу за детьми и экстренные деньги. Проверяйте notario или представителя: legal services вправе оказывать лицензированные адвокаты и DOJ-accredited representatives.

5. Индивидуальная консультация

Свяжитесь с immigration counsel после ареста, контакта ICE, пропуска слушания, charging document или окончания статуса. До любого plea уголовный адвокат должен координировать работу с immigration lawyer.

Итог

Сохраняйте спокойствие, не лгите и не используйте поддельные бумаги, ясно заявите о молчании и counsel и имейте семейный план.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Обязанности и средства защиты зависят от категории и фактов.

Проверенные правовые основания: Четвёртая и Пятая поправки к Конституции США; 8 U.S.C. §§ 1229a и 1304; применимое право об идентификации.

Полезные источники: ACLU — Immigrants’ Rights (https://www.aclu.org/know-your-rights/immigrants-rights); EOIR — Find Legal Representation (https://www.justice.gov/eoir/find-legal-representation).`,
  },
  {
    id: 'im-warrants',
    categoryId: 'immigration',
    titleEn: 'Warrants at the door',
    titleRu: 'Ордера у двери',
    summaryEn:
      'Judicial versus ICE administrative warrants, door safety, consent, scope, documentation, and counsel.',
    summaryRu:
      'Судебный и административный ордер ICE, безопасность у двери, согласие, пределы и адвокат.',
    bodyEn: `1. Do Not Open Immediately

You may speak through a closed door. Ask: “Who are you, what agency are you with, and do you have a judicial warrant?” Request that the document be slid under the door or shown through a window. Do not run, destroy records, or make false statements.

2. Check the Document

A judicial search or arrest warrant is generally signed by a judge or magistrate and should identify the person or address and authorized scope. ICE administrative forms such as I-200 or I-205 are typically signed by immigration officers, not judges; by themselves they generally do not authorize nonconsensual entry into a private home.

Say: “I do not consent to entry or search. Please leave the warrant for my lawyer.”

3. If Officers Enter

Do not physically block them. Keep hands visible, state non-consent, ask to observe from a safe place, and do not answer questions about status or others. Do not sign papers you do not understand. Ask for an interpreter (Russian or your language) and a lawyer.

4. Scope and Shared Housing

Consent by a person with authority can affect shared areas. Teach household members not to open the door without checking. A warrant may have limits on place, person, items, and time; legal challenges happen later, not through resistance.

5. Record and Get Help

When safe, note time, agency, names, badge numbers, vehicles, exact words, entry method, rooms searched, people taken, and property seized. Photograph damage and preserve camera footage. Obtain a copy of the warrant and inventory. Contact immigration and, if relevant, criminal-defense counsel immediately.

Final Advice

Keep the door closed while verifying judicial authority, refuse consent clearly, never resist physically, and preserve documents.

Disclaimer: Educational only, not legal advice. Warrant validity and entry authority are fact-specific.

Verified legal foundations: U.S. Constitution, Fourth Amendment; Payton v. New York (1980); ICE administrative authority under federal immigration law.

Useful sources: ACLU — Immigrants’ Rights (https://www.aclu.org/know-your-rights/immigrants-rights); NILC — Know Your Rights (https://www.nilc.org/resources/know-your-rights-what-to-do-if-arrested-detained-immigration/).`,
    bodyRu: `1. Не открывайте сразу

Можно говорить через закрытую дверь. Спросите: “Who are you, what agency are you with, and do you have a judicial warrant?” Попросите просунуть документ под дверь или показать в окно. Не убегайте, не уничтожайте бумаги и не делайте ложных заявлений.

2. Проверьте документ

Judicial search/arrest warrant обычно подписан судьёй или magistrate и указывает человека либо адрес и разрешённый объём. Административные формы ICE I-200 или I-205 обычно подписывает immigration officer, а не судья; сами по себе они, как правило, не разрешают вход в частный дом без согласия.

Скажите: “I do not consent to entry or search. Please leave the warrant for my lawyer.”

3. Если офицеры вошли

Не блокируйте их физически. Держите руки на виду, заявите об отсутствии согласия, попросите наблюдать с безопасного места и не отвечайте о статусе или других людях. Не подписывайте непонятные бумаги. Попросите переводчика — русского или на вашем языке — и адвоката.

4. Пределы и совместное жильё

Согласие лица с полномочиями может затронуть общие зоны. Объясните жильцам не открывать без проверки. Ордер может ограничивать место, человека, предметы и время; оспаривание происходит позже, без сопротивления.

5. Фиксация и помощь

Когда безопасно, запишите время, ведомство, имена, badge numbers, машины, точные слова, способ входа, осмотренные комнаты, уведённых людей и изъятые вещи. Сфотографируйте ущерб и сохраните видео. Получите копию warrant и inventory. Немедленно звоните immigration и, при необходимости, criminal-defense counsel.

Итог

Держите дверь закрытой при проверке judicial authority, ясно откажите в согласии, не сопротивляйтесь и сохраните документы.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Действительность ордера и право входа зависят от фактов.

Проверенные правовые основания: Четвёртая поправка к Конституции США; Payton v. New York (1980); административные полномочия ICE по федеральному праву.

Полезные источники: ACLU — Immigrants’ Rights (https://www.aclu.org/know-your-rights/immigrants-rights); NILC — Know Your Rights (https://www.nilc.org/resources/know-your-rights-what-to-do-if-arrested-detained-immigration/).`,
  },
  {
    id: 'im-local',
    categoryId: 'immigration',
    titleEn: 'Local police & immigration',
    titleRu: 'Местная полиция и иммиграция',
    summaryEn:
      'How local stops, jail fingerprints, ICE requests, state duties, silence, and immigration risk can intersect.',
    summaryRu:
      'Как пересекаются местная полиция, jail fingerprints, ICE requests, обязанности и иммиграционный риск.',
    bodyEn: `1. Different Agencies, Connected Systems

Local and state police primarily enforce Florida criminal and traffic law; ICE enforces federal civil immigration law. A local stop is not itself a deportation case, but arrest, booking, fingerprints, databases, jail communication, and immigration detainers can connect the systems.

2. During a Local Encounter

Drivers must provide required driving documents. Do not give false identification or falsely claim U.S. citizenship. Ask: “Am I free to leave?” If detained, say: “I choose to remain silent and want a lawyer.” Ask for an interpreter (Russian or your language) if needed.

3. Jail and ICE Requests

An ICE detainer is a request concerning custody, not the same document as a judicial criminal warrant. Florida statutes and agency agreements may impose duties on local facilities, and facts change quickly. Do not assume release in the criminal case means immediate physical release.

4. Prepare and Document

• Tell criminal counsel privately about status before bond or plea decisions.
• Keep A-number, immigration filings, and counsel contacts available.
• Have a family plan for children, vehicles, rent, and medicines.
• Record agency names, jail number, detainer paperwork, and court dates.
• Never miss criminal or immigration court.

5. Coordinated Legal Help

After any arrest, ask criminal counsel to preserve defenses and avoid immigration-harmful admissions. Immigration counsel should evaluate detention, bond, relief, and consequences. Do not use a notario for legal advice.

Final Advice

Treat local criminal and immigration risk as separate but connected cases requiring coordinated lawyers.

Disclaimer: Educational only, not legal advice. Local cooperation policies and laws change.

Verified legal foundations: Florida criminal and traffic statutes; 8 U.S.C. § 1357; Florida Statutes Chapter 908.

Useful sources: Florida Senate — Chapter 908 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter908); ICE — Online Detainee Locator (https://locator.ice.gov/odls/).`,
    bodyRu: `1. Разные ведомства, связанные системы

Местная полиция и полиция штата в основном применяют уголовное и дорожное право Флориды; ICE — федеральное civil immigration law. Местная остановка сама по себе не депортационное дело, но арест, booking, fingerprints, базы, связь jail с ICE и detainer соединяют системы.

2. Во время местного контакта

Водитель предъявляет обязательные документы. Не давайте ложный ID и не заявляйте ложно гражданство США. Спросите: “Am I free to leave?” При задержании скажите: “I choose to remain silent and want a lawyer.” При необходимости попросите переводчика — русского или на вашем языке.

3. Jail и запросы ICE

ICE detainer — запрос, связанный с custody, а не то же самое, что judicial criminal warrant. Статуты Флориды и соглашения ведомств могут возлагать обязанности на учреждения; правила меняются. Освобождение по уголовному делу не всегда означает немедленный физический выход.

4. Подготовка и документы

• Конфиденциально сообщите criminal counsel о статусе до bond или plea.
• Имейте A-number, immigration filings и контакты адвоката.
• Подготовьте семейный план для детей, машины, аренды и лекарств.
• Запишите ведомства, jail number, detainer papers и даты суда.
• Не пропускайте criminal или immigration court.

5. Согласованная юридическая помощь

После ареста уголовный counsel должен сохранить защиты и избегать вредных для иммиграции признаний. Immigration lawyer оценивает detention, bond, relief и последствия. Не обращайтесь к notario за юридическим советом.

Итог

Считайте местное уголовное и иммиграционное производство отдельными, но связанными делами, требующими координации адвокатов.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Законы и правила сотрудничества меняются.

Проверенные правовые основания: уголовные и дорожные статуты Флориды; 8 U.S.C. § 1357; Florida Statutes Chapter 908.

Полезные источники: Florida Senate — Chapter 908 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter908); ICE — Online Detainee Locator (https://locator.ice.gov/odls/).`,
  },
  {
    id: 'im-court',
    categoryId: 'immigration',
    titleEn: 'Criminal court & immigration',
    titleRu: 'Уголовный суд и иммиграция',
    summaryEn:
      'Why pleas and sentences affect status, Padilla advice, coordinated counsel, records, and court attendance.',
    summaryRu:
      'Как plea и sentence влияют на статус, Padilla, согласование адвокатов, записи и явка.',
    bodyEn: `1. Criminal Words Have Immigration Meanings

Immigration law may treat a plea, admission, withheld adjudication, probation, sentence, or offense differently from Florida law. Consequences can include detention, removal, inadmissibility, loss of relief, visa problems, or delay/denial of naturalization.

2. Before Any Plea

Tell defense counsel privately that you are not a U.S. citizen and provide your exact status and immigration history. Say:

“Before I enter any plea, I need specific advice about immigration consequences.”

Criminal counsel must give constitutionally adequate advice under Padilla where applicable, but complex cases often require an immigration lawyer to analyze the statute, record, sentence, and available alternatives.

3. Do Not Rely on Labels

“Misdemeanor,” “time served,” “no jail,” “withhold,” or “diversion” does not guarantee immigration safety. The charging language, plea colloquy, factual basis, sentence imposed, and possible sentence may matter. Never accept a deal simply to leave jail sooner without analysis.

4. Keep and Attend

• Attend every criminal and immigration hearing.
• Keep certified charging documents, plea form, transcript, judgment, sentence, and proof of completion.
• Give each lawyer permission to coordinate.
• Request an interpreter (Russian or your language) before proceedings.
• Do not apply for immigration benefits or travel based on guesses about the case.

5. After the Case

Obtain a certified disposition. Ask immigration counsel before sealing, expunction, travel, renewal, or naturalization; immigration authorities may still require records. Post-conviction deadlines and remedies are specialized.

Final Advice

No plea is “minor” until both criminal and immigration consequences have been evaluated in writing or clearly explained.

Disclaimer: Educational only, not legal advice. Immigration consequences are offense-, record-, and status-specific.

Verified legal foundations: Padilla v. Kentucky (2010); 8 U.S.C. §§ 1101(a)(48), 1182, 1227.

Useful sources: EOIR — Find Legal Representation (https://www.justice.gov/eoir/find-legal-representation); Florida Courts (https://www.flcourts.gov/).`,
    bodyRu: `1. У уголовных терминов особое иммиграционное значение

Immigration law может оценивать plea, admission, withheld adjudication, probation, sentence или состав иначе, чем Флорида. Возможны detention, removal, inadmissibility, потеря relief, проблемы с визой или задержка/отказ naturalization.

2. До любого plea

Конфиденциально сообщите defense counsel, что вы не гражданин США, и назовите точный статус и историю. Скажите:

“Before I enter any plea, I need specific advice about immigration consequences.”

По Padilla уголовный адвокат обязан дать конституционно достаточную консультацию, когда правило применимо, но в сложном деле immigration lawyer должен проверить статут, record, sentence и альтернативы.

3. Не полагайтесь на ярлыки

“Misdemeanor”, “time served”, “no jail”, “withhold” или “diversion” не гарантируют иммиграционную безопасность. Значение имеют текст обвинения, plea colloquy, factual basis, назначенное и возможное наказание. Не принимайте сделку только ради скорого выхода без анализа.

4. Храните документы и являйтесь

• Приходите на каждое criminal и immigration hearing.
• Храните заверенные charging documents, plea form, transcript, judgment, sentence и proof of completion.
• Разрешите адвокатам координировать работу.
• До заседания попросите переводчика — русского или на вашем языке.
• Не подавайте immigration application и не путешествуйте на основе догадок.

5. После дела

Получите certified disposition. До sealing, expunction, поездки, renewal или naturalization спросите immigration counsel: власти всё равно могут потребовать материалы. Post-conviction сроки и remedies специализированы.

Итог

Ни один plea не «мелкий», пока уголовные и иммиграционные последствия не проверены и ясно не объяснены.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Последствия зависят от состава, record и статуса.

Проверенные правовые основания: Padilla v. Kentucky (2010); 8 U.S.C. §§ 1101(a)(48), 1182, 1227.

Полезные источники: EOIR — Find Legal Representation (https://www.justice.gov/eoir/find-legal-representation); Florida Courts (https://www.flcourts.gov/).`,
  },

  // —— Court procedures ——
  {
    id: 'ct-arraign',
    categoryId: 'courtProcedures',
    titleEn: 'Arraignment',
    titleRu: 'Arraignment (первое предъявление)',
    summaryEn:
      'Purpose of arraignment, pleas, counsel, interpreter access, preparation, records, and immigration caution.',
    summaryRu:
      'Цель arraignment, plea, адвокат, переводчик, подготовка, документы и иммиграционные риски.',
    bodyEn: `1. What Arraignment Is

At arraignment, the court identifies the formal charges and asks for a plea. It is usually not the trial and witnesses normally do not present the full case. A lawyer may waive formal arraignment in some Florida cases.

Common pleas include not guilty, guilty, and nolo contendere. Entering not guilty generally preserves time to review evidence and defenses; do not treat any plea as a mere formality.

2. Before Court

• Confirm courthouse, courtroom, date, time, and remote/in-person instructions.
• Arrive early with identification and court papers.
• Arrange child care, transport, parking, and security-screening time.
• Dress respectfully and leave weapons prohibited by courthouse rules.
• Request an interpreter (Russian or your language) well in advance.

3. Counsel and Plea Decisions

Ask for counsel before admitting facts or accepting an offer. If you cannot afford a lawyer, ask about public-defender eligibility. Noncitizens must tell counsel privately and obtain specific immigration advice before any plea, including “time served” or withhold.

Say: “I do not understand the consequences and want to speak with my attorney and interpreter before entering a plea.”

4. In the Courtroom

Check in as directed, silence your phone, stand when required, address the judge respectfully, and do not interrupt. Do not discuss facts with prosecutors, codefendants, or witnesses without counsel. Listen for future dates and release conditions.

5. After Arraignment

Keep the charging document, plea, scheduling order, counsel information, and next date together. Calendar deadlines and update your address through the proper process. Contact counsel immediately if a charge, bond condition, or date is unclear.

Final Advice

Do not rush a plea. Use arraignment to confirm charges, counsel, language access, and the next procedural steps.

Disclaimer: Educational only, not legal advice. Procedure varies by court and case.

Verified legal foundations: Florida Rules of Criminal Procedure 3.160 and 3.170; Sixth and Fourteenth Amendments.

Useful sources: Florida Courts (https://www.flcourts.gov/); Florida Rules of Court (https://www.flcourts.gov/Resources-Services/Court-Improvement/Supreme-Court-Publications-Statistics-and-Reports/Rules-of-Court).`,
    bodyRu: `1. Что такое arraignment

На arraignment суд называет формальные обвинения и просит сделать plea. Это обычно не trial, и свидетели не излагают всё дело. В некоторых делах Флориды адвокат может waive formal arraignment.

Основные pleas: not guilty, guilty и nolo contendere. Not guilty обычно сохраняет время для изучения доказательств и защиты; никакой plea не является простой формальностью.

2. До суда

• Подтвердите courthouse, зал, дату, время и формат remote/in-person.
• Придите заранее с ID и court papers.
• Учтите детей, транспорт, парковку и досмотр.
• Оденьтесь уважительно и не приносите запрещённое оружие.
• Заранее попросите переводчика — русского или на вашем языке.

3. Адвокат и выбор plea

Просите counsel до признания фактов или принятия предложения. Если нет денег, узнайте о public defender. Негражданин должен конфиденциально сообщить статус и получить точный immigration advice до любого plea, включая “time served” или withhold.

Скажите: “I do not understand the consequences and want to speak with my attorney and interpreter before entering a plea.”

4. В зале суда

Отметьтесь по инструкции, выключите звук телефона, вставайте по правилам, уважительно обращайтесь к судье и не перебивайте. Не обсуждайте факты с прокурором, codefendant или свидетелем без counsel. Запишите следующую дату и release conditions.

5. После arraignment

Храните charging document, plea, scheduling order, данные адвоката и следующую дату вместе. Внесите сроки в календарь и правильно обновите адрес. При неясном обвинении, bond condition или дате немедленно спросите counsel.

Итог

Не спешите с plea. Используйте arraignment, чтобы подтвердить обвинения, адвоката, языковую помощь и следующие шаги.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Процедура зависит от суда и дела.

Проверенные правовые основания: Florida Rules of Criminal Procedure 3.160 и 3.170; Шестая и Четырнадцатая поправки.

Полезные источники: Florida Courts (https://www.flcourts.gov/); Florida Rules of Court (https://www.flcourts.gov/Resources-Services/Court-Improvement/Supreme-Court-Publications-Statistics-and-Reports/Rules-of-Court).`,
  },
  {
    id: 'ct-bail',
    categoryId: 'courtProcedures',
    titleEn: 'Bail / bond',
    titleRu: 'Bail / bond (залог)',
    summaryEn:
      'Pretrial release, bond types, Florida first appearance, conditions, payment records, modification, and violations.',
    summaryRu:
      'Досудебное освобождение, виды bond, first appearance, условия, платежи и нарушения.',
    bodyEn: `1. Bail and Bond Basics

Bail is the security and conditions used to help ensure court appearance and community safety; bond is often the mechanism used to post it. Release may be on recognizance, cash, surety, supervised pretrial release, or another lawful arrangement. Payment is not a finding of innocence or guilt.

2. First Appearance and Factors

Florida defendants generally receive a prompt first appearance after arrest. A judge may consider the charge, probable cause, prior record, court history, community ties, safety, finances, and statutory restrictions. Some charges require special hearings or detention analysis.

3. Read Every Condition

Conditions may include:

• No contact or stay-away orders.
• No weapons, alcohol, or drugs.
• Travel limits, monitoring, testing, or check-ins.
• Residence, employment, or curfew requirements.
• Attendance at every hearing.

Ask: “Does no contact include messages, third parties, social media, and invited contact?” Assume yes unless the court says otherwise in writing.

4. Payment and Scams

Use authorized jail, clerk, or licensed surety channels. Obtain receipts, contract terms, collateral records, and the case number. Understand whether money is refundable and what fees are not. Never pay someone who promises to influence a judge or erase a warrant.

5. Changes and Violations

Only the court can modify court-ordered conditions. Contact counsel before travel, moving, contact, or any impossible requirement. A violation can cause revocation, new charges, forfeiture, or re-arrest. Immigration detention may continue separately after criminal release.

Final Advice

Before leaving custody, obtain a written copy and have counsel explain every condition, payment, date, and separate immigration risk.

Disclaimer: Educational only, not legal advice. Release eligibility is charge- and fact-specific.

Verified legal foundations: Florida Constitution art. I, § 14; Florida Statutes Chapter 903; Florida Rule of Criminal Procedure 3.130.

Useful sources: Florida Senate — Chapter 903 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter903); Florida Courts (https://www.flcourts.gov/).`,
    bodyRu: `1. Основы bail и bond

Bail — обеспечение и условия для явки и безопасности; bond часто означает механизм внесения. Возможны recognizance, cash, surety, supervised pretrial release или иной законный вариант. Оплата не означает невиновность или виновность.

2. First appearance и факторы

После ареста во Флориде обычно быстро проводят first appearance. Судья может учитывать обвинение, probable cause, прошлые дела и явки, связи с местом, безопасность, финансы и statutory restrictions. Для части обвинений нужны специальные hearings или detention analysis.

3. Прочитайте каждое условие

Возможны:

• No contact или stay-away.
• Запрет оружия, алкоголя или drugs.
• Ограничение поездок, monitoring, testing или check-ins.
• Требования к жилью, работе или curfew.
• Явка на каждое hearing.

Спросите: “Does no contact include messages, third parties, social media, and invited contact?” Считайте, что да, пока суд письменно не указал иное.

4. Платежи и мошенничество

Используйте официальные каналы jail, clerk или licensed surety. Берите receipts, contract terms, collateral records и case number. Узнайте, что возвращается и какие fees невозвратны. Не платите обещающим повлиять на судью или убрать warrant.

5. Изменения и нарушения

Только суд меняет court-ordered conditions. До поездки, переезда, контакта или при невозможном условии обратитесь к counsel. Нарушение ведёт к revocation, новым обвинениям, forfeiture или re-arrest. Immigration detention может отдельно продолжиться после уголовного release.

Итог

До выхода получите письменную копию и попросите counsel объяснить каждое условие, платёж, дату и отдельный иммиграционный риск.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Право на release зависит от обвинения и фактов.

Проверенные правовые основания: Florida Constitution art. I, § 14; Florida Statutes Chapter 903; Florida Rule of Criminal Procedure 3.130.

Полезные источники: Florida Senate — Chapter 903 (https://www.flsenate.gov/Laws/Statutes/2026/Chapter903); Florida Courts (https://www.flcourts.gov/).`,
  },
  {
    id: 'ct-hearing',
    categoryId: 'courtProcedures',
    titleEn: 'Hearings & appearance',
    titleRu: 'Слушания и явка',
    summaryEn:
      'Preparing for hearings, attendance, courtroom conduct, evidence, remote court, records, and missed dates.',
    summaryRu:
      'Подготовка, явка, поведение, доказательства, remote court, документы и пропущенные даты.',
    bodyEn: `1. Know What Hearing You Have

Arraignment, pretrial conference, motion hearing, status conference, trial, sentencing, and probation hearings serve different purposes. Read the notice and ask counsel what decisions, testimony, or evidence may occur.

2. Prepare Early

• Verify date, time, judge, courtroom, and whether appearance is in person or remote.
• Review security, parking, device, and dress rules.
• Bring ID and organized copies, not prohibited originals or weapons.
• Meet counsel before the hearing.
• Request an interpreter (Russian or your language) in advance.

Never assume your lawyer’s appearance excuses your own unless counsel or the court confirms it.

3. Courtroom Conduct

Check in, silence electronics, do not record unless authorized, stand when directed, and address the judge respectfully. Do not interrupt, react visibly to testimony, contact protected persons, or discuss the case in hallways or elevators. Speak truthfully and say when you do not understand.

4. Evidence and Remote Hearings

Give evidence to counsel before court so authentication, witnesses, and filing rules can be addressed. Do not edit messages or coach witnesses. For remote court, test the link, use your full name, choose a quiet private place, and treat the session exactly like a courtroom.

5. If You May Miss Court

Contact counsel and the clerk immediately—before the hearing whenever possible. Illness, travel, work, or misunderstanding does not automatically excuse absence. Only the court can excuse or continue a required appearance. A failure to appear may cause a warrant, bond revocation, license consequences, or case action.

Final Advice

Confirm every date independently, prepare with counsel, arrive early, and leave with the next date and written orders.

Disclaimer: Educational only, not legal advice. Local administrative orders and case requirements vary.

Verified legal foundations: Florida Rules of General Practice and Judicial Administration; Florida Rules of Criminal Procedure; Florida Rule of Traffic Court 6.190.

Useful sources: Florida Courts (https://www.flcourts.gov/); Florida Courts Help (https://help.flcourts.gov/).`,
    bodyRu: `1. Узнайте вид hearing

Arraignment, pretrial conference, motion hearing, status conference, trial, sentencing и probation hearing имеют разные цели. Прочитайте notice и спросите counsel, какие решения, показания или доказательства ожидаются.

2. Готовьтесь заранее

• Проверьте дату, время, судью, зал и формат in-person/remote.
• Узнайте правила досмотра, парковки, устройств и одежды.
• Возьмите ID и упорядоченные копии, но не запрещённые предметы или оружие.
• Встретьтесь с counsel до заседания.
• Заранее попросите переводчика — русского или на вашем языке.

Не считайте, что присутствие адвоката освобождает от вашей явки, пока counsel или суд это не подтвердит.

3. Поведение в суде

Отметьтесь, выключите звук устройств, не записывайте без разрешения, вставайте по указанию и уважительно обращайтесь к судье. Не перебивайте, не реагируйте демонстративно, не контактируйте с protected person и не обсуждайте дело в коридоре или лифте. Говорите правду и сообщайте, если не понимаете.

4. Доказательства и remote hearing

Передайте материалы counsel заранее для решения authentication, witnesses и filing rules. Не редактируйте сообщения и не инструктируйте свидетелей. Для remote court проверьте ссылку, используйте полное имя, найдите тихое закрытое место и ведите себя как в зале.

5. Если можете пропустить

Немедленно свяжитесь с counsel и clerk, по возможности до hearing. Болезнь, поездка, работа или непонимание не оправдывают отсутствие автоматически. Только суд может освободить от явки или перенести её. Failure to appear может вызвать warrant, revocation bond, последствия для прав или решение по делу.

Итог

Самостоятельно подтверждайте даты, готовьтесь с counsel, приходите заранее и уходите с записанной следующей датой и orders.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Местные приказы и требования различаются.

Проверенные правовые основания: Florida Rules of General Practice and Judicial Administration; Florida Rules of Criminal Procedure; Florida Rule of Traffic Court 6.190.

Полезные источники: Florida Courts (https://www.flcourts.gov/); Florida Courts Help (https://help.flcourts.gov/).`,
  },
  {
    id: 'ct-interpreter',
    categoryId: 'courtProcedures',
    titleEn: 'Interpreters & documents',
    titleRu: 'Переводчик и документы',
    summaryEn:
      'Requesting qualified court interpreters, correcting problems, handling translated documents, records, and counsel.',
    summaryRu:
      'Запрос квалифицированного переводчика, исправление проблем, документы, записи и адвокат.',
    bodyEn: `1. Ask Early for Language Access

If you cannot fully understand or communicate in English, notify the clerk, court interpreter office, and your lawyer as early as possible. State the language and dialect:

“I need a court interpreter in Russian [or my language] for every hearing.”

Do not rely on a child, relative, friend, opposing party, or unqualified bilingual person for legal proceedings.

2. During the Hearing

Use the interpreter even if you speak conversational English; legal language is different. Speak in short complete sentences, pause for interpretation, and address the judge or lawyer—not the interpreter. Everything you say may be interpreted for the record.

If you cannot hear, understand, or believe interpretation is materially wrong, say immediately:

“Your Honor, I do not understand the interpretation. May we pause and correct it?”

3. Documents and Signing

An oral court interpreter does not automatically translate every written document. Ask counsel to explain charging papers, plea forms, waivers, bond conditions, orders, and immigration consequences before signing. Never sign blank or misunderstood forms.

4. Keep an Organized File

Maintain:

• Charging documents and police/citation papers.
• Bond and no-contact conditions.
• Notices, orders, motions, and plea forms.
• Interpreter requests and confirmations.
• Lawyer contacts, receipts, and every court date.

Write your full legal name and case number on communications. Update contact information through official channels.

5. When to Get Help

Tell counsel immediately if an interpreter was absent, had a conflict, summarized instead of interpreting, or caused misunderstanding during a plea or testimony. Deadlines to correct a record or challenge a plea can be strict.

Final Advice

Language access is essential to meaningful participation: request it early, speak up about problems, and never sign what you do not understand.

Disclaimer: Educational only, not legal advice. Appointment and payment rules depend on the proceeding.

Verified legal foundations: Title VI of the Civil Rights Act; Florida Rule for Certification and Regulation of Spoken Language Court Interpreters; due-process principles.

Useful sources: Florida Courts — Court Interpreting (https://www.flcourts.gov/Resources-Services/Court-Services/Court-Interpreting); U.S. DOJ — Language Access (https://www.justice.gov/crt/language-access).`,
    bodyRu: `1. Заранее просите языковую помощь

Если вы не полностью понимаете английский или не можете свободно говорить, как можно раньше сообщите clerk, court interpreter office и адвокату. Назовите язык и диалект:

“I need a court interpreter in Russian [or my language] for every hearing.”

Не используйте ребёнка, родственника, друга, противоположную сторону или неквалифицированного bilingual person для юридического процесса.

2. Во время hearing

Пользуйтесь переводчиком, даже если владеете бытовым английским: юридический язык иной. Говорите короткими полными фразами, делайте паузу и обращайтесь к судье или адвокату, а не к переводчику. Сказанное может переводиться для record.

Если вы не слышите, не понимаете или перевод существенно неверен, сразу скажите:

“Your Honor, I do not understand the interpretation. May we pause and correct it?”

3. Документы и подпись

Устный court interpreter не переводит автоматически каждый письменный документ. До подписи попросите counsel объяснить charging papers, plea forms, waivers, bond conditions, orders и иммиграционные последствия. Не подписывайте пустой или непонятный бланк.

4. Храните упорядоченное дело

Соберите:

• Charging documents и police/citation papers.
• Bond и no-contact conditions.
• Notices, orders, motions и plea forms.
• Запросы переводчика и подтверждения.
• Контакты адвоката, receipts и все даты.

Указывайте полное законное имя и case number. Обновляйте контакты официальным способом.

5. Когда нужна помощь

Сразу сообщите counsel, если переводчика не было, у него был конфликт, он пересказывал вместо полного перевода или возникло непонимание при plea либо testimony. Сроки исправления record или оспаривания plea могут быть строгими.

Итог

Языковая помощь необходима для полноценного участия: просите заранее, сообщайте о проблемах и не подписывайте непонятное.

Отказ от ответственности: только образовательная информация, не юридическая консультация. Назначение и оплата зависят от вида процесса.

Проверенные правовые основания: Title VI of the Civil Rights Act; Florida Rule for Certification and Regulation of Spoken Language Court Interpreters; принципы due process.

Полезные источники: Florida Courts — Court Interpreting (https://www.flcourts.gov/Resources-Services/Court-Services/Court-Interpreting); U.S. DOJ — Language Access (https://www.justice.gov/crt/language-access).`,
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
