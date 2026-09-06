import { CriminalStatute } from '../types';

/**
 * Curated Florida criminal statute summaries for educational lookup.
 * Not legal advice — statutes and penalties change; verify on Offline.leg.state.fl.us / with counsel.
 */
export const criminalStatutes: CriminalStatute[] = [
  {
    code: '784.03',
    titleEn: 'Battery',
    titleRu: 'Battery (побои / нанесение удара)',
    levelEn: 'Usually 1st-degree misdemeanor; can become 3rd-degree felony',
    levelRu: 'Обычно misdemeanor 1-й степени; может стать felony 3-й степени',
    explanationEn:
      'Battery is intentionally touching or striking another person against their will, or intentionally causing bodily harm. A shove, slap, or unwanted grab can qualify — serious injury is not required for a basic battery charge.',
    explanationRu:
      'Battery — это намеренное касание или удар против воли другого человека, либо намеренное причинение телесного вреда. Толчок, пощёчина или нежелательный захват могут подойти — для базового обвинения тяжёлая травма не обязательна.',
    penaltiesEn:
      'First battery is typically a 1st-degree misdemeanor: up to 1 year in jail and up to a $1,000 fine (plus costs). A second/subsequent battery after a prior battery (or aggravated/felony battery) conviction can be a 3rd-degree felony: up to 5 years and up to $5,000. Battery in furtherance of certain riots can also be a felony.',
    penaltiesRu:
      'Первый battery обычно misdemeanor 1-й степени: до 1 года тюрьмы и штраф до $1,000 (+ сборы). Повторный battery после прежней судимости за battery / aggravated / felony battery может стать felony 3-й степени: до 5 лет и до $5,000. Battery в связи с некоторыми беспорядками тоже может быть felony.',
    processEn:
      'Police may arrest; booking and possible bond follow. Misdemeanor cases often go to county court; felony elevates to circuit court. Typical path: advisory/first appearance → arraignment (plea) → negotiations or trial → sentencing if convicted. Ask for a lawyer and an interpreter early.',
    processRu:
      'Возможен арест, booking и залог. Misdemeanor часто в county court; felony — в circuit court. Обычно: first appearance → arraignment (plea) → переговоры или суд → приговор при осуждении. Сразу просите адвоката и переводчика.',
    observationsEn:
      'Domestic-related battery has extra rules and safety/no-contact issues. Self-defense may be raised, but do not argue the case on scene. Immigration consequences are possible after arrests/pleas — ask counsel before pleading. Always verify the current statute text.',
    observationsRu:
      'Battery в контексте DV имеет особые правила и запреты контакта. Самооборону можно заявлять, но не спорьте дело на месте. После ареста/plea возможны иммиграционные последствия — спросите адвоката до сделки. Всегда сверяйте актуальный текст статута.',
  },
  {
    code: '784.041',
    titleEn: 'Felony battery / domestic battery by strangulation',
    titleRu: 'Felony battery / удушение в DV-контексте',
    levelEn: '3rd-degree felony (generally)',
    levelRu: 'Обычно felony 3-й степени',
    explanationEn:
      'Felony battery covers intentionally causing great bodily harm, permanent disability, or permanent disfigurement. A separate subsection addresses domestic battery by strangulation (impeding breath/blood circulation of a family/household member or dating partner).',
    explanationRu:
      'Felony battery — намеренное причинение тяжкого телесного вреда, постоянной инвалидности или обезображивания. Отдельная норма — domestic battery by strangulation (перекрытие дыхания/кровотока у члена семьи/домохозяйства или партнёра).',
    penaltiesEn:
      'Generally a 3rd-degree felony: up to 5 years imprisonment and up to a $5,000 fine, plus possible probation, no-contact orders, and other conditions. Actual sentence depends on facts, scoresheet, and record.',
    penaltiesRu:
      'Обычно felony 3-й степени: до 5 лет и штраф до $5,000, плюс возможны probation, запрет контакта и другие условия. Реальный срок зависит от фактов, scoresheet и прошлого.',
    processEn:
      'Felony track: arrest/booking, first appearance, possible grand jury/information filing, arraignment, discovery, plea talks or trial in circuit court. Strangulation allegations are treated very seriously by prosecutors.',
    processRu:
      'Felony-путь: арест/booking, first appearance, возможное обвинительное заключение, arraignment, discovery, переговоры или суд в circuit court. Обвинения в удушении прокуроры рассматривают очень серьёзно.',
    observationsEn:
      'Medical records and photos matter. Do not contact the alleged victim if a no-contact order exists. Get a criminal defense lawyer immediately — and immigration counsel if status is a concern.',
    observationsRu:
      'Важны медзаписи и фото. Не контактируйте с alleged victim при no-contact order. Сразу к уголовному адвокату — и к иммиграционному, если важен статус.',
  },
  {
    code: '784.045',
    titleEn: 'Aggravated battery',
    titleRu: 'Aggravated battery (отягчённый battery)',
    levelEn: 'Typically 2nd-degree felony',
    levelRu: 'Обычно felony 2-й степени',
    explanationEn:
      'Aggravated battery generally involves intentionally or knowingly causing great bodily harm, permanent disability, or permanent disfigurement; using a deadly weapon; or battering a known pregnant victim.',
    explanationRu:
      'Aggravated battery обычно включает намеренное/осознанное причинение тяжкого вреда, постоянной инвалидности или обезображивания; использование deadly weapon; либо battery в отношении заведомо беременной жертвы.',
    penaltiesEn:
      'Often a 2nd-degree felony: up to 15 years and up to a $10,000 fine. Enhancements and scoresheet points can raise exposure. Collateral consequences (record, firearms, immigration) can be severe.',
    penaltiesRu:
      'Часто felony 2-й степени: до 15 лет и штраф до $10,000. Усложнения и scoresheet могут повысить риск. Побочные последствия (запись, оружие, иммиграция) могут быть тяжёлыми.',
    processEn:
      'Circuit court felony process with higher bond scrutiny. Expect careful evidence review (weapons, medical proof). Early lawyer involvement is critical before statements or plea offers.',
    processRu:
      'Felony в circuit court, залог смотрят строже. Ждут внимательной оценки доказательств (оружие, медицина). Адвокат критичен до показаний и plea.',
    observationsEn:
      '“Deadly weapon” can include objects used in a way likely to cause death or great bodily harm — not only guns. Do not discuss the incident on social media.',
    observationsRu:
      '“Deadly weapon” может включать предметы, использованные так, что вероятен смерть или тяжкий вред — не только огнестрельное. Не обсуждайте дело в соцсетях.',
  },
  {
    code: '784.011',
    titleEn: 'Assault',
    titleRu: 'Assault (угроза насилием)',
    levelEn: '2nd-degree misdemeanor (generally)',
    levelRu: 'Обычно misdemeanor 2-й степени',
    explanationEn:
      'Assault is an intentional, unlawful threat by word or act to do violence to another, coupled with an apparent ability to do so, creating a well-founded fear that violence is imminent. No physical contact is required.',
    explanationRu:
      'Assault — намеренная незаконная угроза насилием словом или действием при видимой возможности её исполнить, создающая обоснованный страх неминуемого насилия. Физический контакт не обязателен.',
    penaltiesEn:
      'Typically a 2nd-degree misdemeanor: up to 60 days in jail and up to a $500 fine, plus costs. Facts and related charges can change the picture.',
    penaltiesRu:
      'Обычно misdemeanor 2-й степени: до 60 дней и штраф до $500 (+ сборы). Факты и смежные обвинения могут изменить картину.',
    processEn:
      'May begin with arrest or notice to appear. County court misdemeanor track: arraignment, negotiations, possible trial. Document what was said/done and any context (self-defense, misunderstanding).',
    processRu:
      'Может начаться с ареста или notice to appear. Misdemeanor в county court: arraignment, переговоры, возможен суд. Фиксируйте, что говорили/делали, и контекст (самооборона, недоразумение).',
    observationsEn:
      'Words alone sometimes are enough if fear of imminent violence is created. Related charges (assault + battery, DV) often travel together.',
    observationsRu:
      'Иногда достаточно слов, если создан страх неминуемого насилия. Часто идут вместе с battery или DV.',
  },
  {
    code: '784.021',
    titleEn: 'Aggravated assault',
    titleRu: 'Aggravated assault',
    levelEn: 'Typically 3rd-degree felony',
    levelRu: 'Обычно felony 3-й степени',
    explanationEn:
      'Aggravated assault is an assault with a deadly weapon without intent to kill, or with intent to commit a felony. Pointing a firearm in a threatening way is a common fact pattern discussed with this statute.',
    explanationRu:
      'Aggravated assault — assault с deadly weapon без умысла убить, либо с умыслом совершить felony. Угроза с направлением огнестрельного оружия — частый сценарий по этому статуту.',
    penaltiesEn:
      'Generally a 3rd-degree felony: up to 5 years and up to $5,000. Firearm facts and scoresheet can increase severity. Probation and no-contact conditions are common outcomes in some cases.',
    penaltiesRu:
      'Обычно felony 3-й степени: до 5 лет и до $5,000. Огнестрельные факты и scoresheet повышают серьёзность. В части дел — probation и запрет контакта.',
    processEn:
      'Felony process in circuit court. Expect weapon evidence, 911 calls, and witness statements. Remain silent and request counsel.',
    processRu:
      'Felony в circuit court. Ждут доказательств по оружию, звонков 911 и показаний. Молчите и просите адвоката.',
    observationsEn:
      'Self-defense and lawful possession issues are fact-specific. Never brandish a weapon to “scare someone off” during an argument.',
    observationsRu:
      'Самооборона и законность оружия — по фактам. Не демонстрируйте оружие, чтобы «попугать» в ссоре.',
  },
  {
    code: '812.014',
    titleEn: 'Theft',
    titleRu: 'Кража (Theft)',
    levelEn: 'Misdemeanor or felony depending on value/type',
    levelRu: 'Misdemeanor или felony — по сумме/типу',
    explanationEn:
      'Theft is knowingly obtaining or using another’s property with intent to deprive the person of a right to the property or a benefit from it. Degree often turns on value, prior thefts, and special property categories.',
    explanationRu:
      'Theft — заведомое получение или использование чужого имущества с умыслом лишить права на него или выгоды. Степень часто зависит от суммы, прошлых краж и особых категорий имущества.',
    penaltiesEn:
      'Petit theft can be a misdemeanor; higher values or certain items become felonies (for example, grand theft tiers). Penalties range from short jail exposure to multi-year prison maximums for higher felonies, plus restitution.',
    penaltiesRu:
      'Petit theft может быть misdemeanor; большие суммы или особое имущество — felony (grand theft уровней). От короткого ареста до многолетнего максимума + restitution.',
    processEn:
      'Arrest or notice to appear → arraignment → discovery (receipts, video) → plea or trial. Restitution is frequently addressed. Prior thefts can raise the level.',
    processRu:
      'Арест или notice to appear → arraignment → discovery (чеки, видео) → plea или суд. Часто решают restitution. Прошлые кражи повышают уровень.',
    observationsEn:
      'Store “civil demand” letters are separate from the criminal case. Do not ignore criminal court dates even if you paid a store demand.',
    observationsRu:
      'Письма магазинов о civil demand — отдельно от уголовного дела. Не пропускайте суд, даже если заплатили магазину.',
  },
  {
    code: '812.015',
    titleEn: 'Retail theft / shoplifting provisions',
    titleRu: 'Retail theft (магазинная кража)',
    levelEn: 'Varies; can elevate with priors or value',
    levelRu: 'Разный уровень; повышается при рецидиве/сумме',
    explanationEn:
      'Florida has specific retail-theft rules covering taking merchandise, altering labels, removing anti-theft devices, and related conduct in merchant settings. Merchants may detain briefly under certain conditions.',
    explanationRu:
      'Во Флориде есть отдельные нормы retail theft: вынос товара, смена ценников, снятие антикражных устройств и сходные действия. Магазин в части случаев может кратко задержать.',
    penaltiesEn:
      'Penalties depend on value and history — from misdemeanor exposure to felony levels for higher amounts or repeat conduct. Expect possible trespass bans from the store.',
    penaltiesRu:
      'Наказание зависит от суммы и истории — от misdemeanor до felony при больших суммах или повторах. Возможен запрет на вход в магазин.',
    processEn:
      'Often begins with store loss-prevention + police. Video and receipts are key. Court process follows the charged degree (county vs circuit).',
    processRu:
      'Часто начинается с охраны магазина + полиции. Важны видео и чеки. Суд идёт по степени обвинения (county или circuit).',
    observationsEn:
      'Do not sign statements without understanding them. Ask for a Russian interpreter and a lawyer.',
    observationsRu:
      'Не подписывайте то, чего не понимаете. Просите русского переводчика и адвоката.',
  },
  {
    code: '810.02',
    titleEn: 'Burglary',
    titleRu: 'Burglary (проникновение с преступным умыслом)',
    levelEn: 'Felony (degree depends on facts)',
    levelRu: 'Felony (степень по фактам)',
    explanationEn:
      'Burglary generally involves entering or remaining in a structure or conveyance with intent to commit an offense therein. Occupied dwellings and weapons can raise severity dramatically.',
    explanationRu:
      'Burglary обычно — вход или пребывание в строении/транспорте с умыслом совершить там преступление. Жильё с людьми и оружие резко повышают тяжесть.',
    penaltiesEn:
      'Burglary offenses are felonies; maximums can reach very high ranges depending on the subsection (including lengthy prison exposure for serious residential burglaries). Restitution and permanent felony records are common concerns.',
    penaltiesRu:
      'Burglary — felony; максимумы могут быть очень высокими в зависимости от пункта (включая долгие сроки за серьёзный жилищный burglary). Часто — restitution и постоянная felony-запись.',
    processEn:
      'Felony circuit-court process, often with high bond. Fingerprints, DNA, and toolmark/video evidence may appear. Early counsel is essential.',
    processRu:
      'Felony в circuit court, часто высокий залог. Возможны отпечатки, ДНК, видео. Ранний адвокат обязателен.',
    observationsEn:
      '“I just went in to look” can still be charged if the State alleges intent to commit an offense. Do not discuss facts with anyone but your lawyer.',
    observationsRu:
      '«Я просто зашёл посмотреть» всё равно могут квалифицировать, если государство заявляет умысел на преступление. Обсуждайте факты только с адвокатом.',
  },
  {
    code: '810.08',
    titleEn: 'Trespass in structure or conveyance',
    titleRu: 'Trespass в строении или транспорте',
    levelEn: 'Misdemeanor (can elevate)',
    levelRu: 'Misdemeanor (может повыситься)',
    explanationEn:
      'Trespass involves entering or remaining in a structure or conveyance without authorization, or after being warned to leave. Related statutes cover posted land and other property types.',
    explanationRu:
      'Trespass — вход или пребывание в строении/транспорте без разрешения либо после требования уйти. Есть смежные нормы про участки с объявлениями и другую собственность.',
    penaltiesEn:
      'Often a misdemeanor, but facts (human occupancy, defiance after warning, related theft) can change charging decisions and exposure.',
    penaltiesRu:
      'Часто misdemeanor, но факты (люди внутри, отказ уйти, связанная кража) меняют обвинение и риск.',
    processEn:
      'Police contact, possible arrest, then county-court process for typical misdemeanor trespass. Keep any lease/permission texts.',
    processRu:
      'Контакт с полицией, возможен арест, затем обычно county court. Сохраните переписку о разрешении/аренде.',
    observationsEn:
      'After a written trespass warning from a business, returning can lead to new charges. Ask what the warning covered.',
    observationsRu:
      'После письменного trespass warning возвращение может дать новое дело. Уточните, на что именно запрет.',
  },
  {
    code: '843.02',
    titleEn: 'Resist officer without violence',
    titleRu: 'Сопротивление офицеру без насилия',
    levelEn: '1st-degree misdemeanor (generally)',
    levelRu: 'Обычно misdemeanor 1-й степени',
    explanationEn:
      'This charge alleges resisting, obstructing, or opposing a law enforcement officer in the lawful execution of a legal duty, without violence to the officer. Common fact patterns include fleeing on foot or refusing to comply during a lawful detention.',
    explanationRu:
      'Обвинение в сопротивлении, препятствовании или противодействии офицеру при законном исполнении обязанностей — без насилия. Частые сценарии: бегство пешком или отказ подчиняться при законном задержании.',
    penaltiesEn:
      'Typically a 1st-degree misdemeanor: up to 1 year and up to $1,000. Often charged together with the underlying offense.',
    penaltiesRu:
      'Обычно misdemeanor 1-й степени: до 1 года и до $1,000. Часто вместе с основным обвинением.',
    processEn:
      'Body-cam and officer testimony are central. Arraignment and plea talks are common. Challenge issues (was the duty lawful?) belong in court with a lawyer — not in a roadside argument.',
    processRu:
      'Ключевы body-cam и показания офицера. Часты arraignment и переговоры. Вопросы «законна ли была обязанность?» — в суде с адвокатом, не в споре на месте.',
    observationsEn:
      'Physical resistance can become a more serious charge (resist with violence). Keep hands visible and do not pull away if you can safely comply.',
    observationsRu:
      'Физическое сопротивление может стать более тяжёлой статьёй. Держите руки на виду и не вырывайтесь, если можно безопасно подчиниться.',
  },
  {
    code: '843.01',
    titleEn: 'Resist officer with violence',
    titleRu: 'Сопротивление офицеру с насилием',
    levelEn: '3rd-degree felony (generally)',
    levelRu: 'Обычно felony 3-й степени',
    explanationEn:
      'Resisting with violence alleges knowingly and willfully resisting, obstructing, or opposing an officer by offering or doing violence to the person of the officer.',
    explanationRu:
      'Resisting with violence — заведомое и умышленное сопротивление/препятствование офицеру с угрозой или применением насилия к офицеру.',
    penaltiesEn:
      'Generally a 3rd-degree felony: up to 5 years and up to $5,000. Can heavily affect bond, probation prospects, and immigration risk.',
    penaltiesRu:
      'Обычно felony 3-й степени: до 5 лет и до $5,000. Сильно влияет на залог, probation и иммиграционный риск.',
    processEn:
      'Felony circuit court. Expect body-cam close review. Do not make further statements without counsel.',
    processRu:
      'Felony в circuit court. Body-cam смотрят очень внимательно. Без адвоката новых показаний не давайте.',
    observationsEn:
      'Even minor physical struggles during handcuffing get charged aggressively. Medical issues should be stated calmly once, then request a lawyer.',
    observationsRu:
      'Даже небольшая борьба при надевании наручников часто квалифицируется жёстко. О медпроблемах скажите спокойно один раз и просите адвоката.',
  },
  {
    code: '316.193',
    titleEn: 'DUI (driving under the influence)',
    titleRu: 'DUI (вождение в состоянии опьянения)',
    levelEn: 'Misdemeanor or felony depending on priors/harm',
    levelRu: 'Misdemeanor или felony — по рецидиву/вреду',
    explanationEn:
      'DUI involves driving or being in actual physical control of a vehicle while under the influence of alcohol or certain substances to the extent normal faculties are impaired, or with an unlawful blood/breath alcohol level.',
    explanationRu:
      'DUI — управление или actual physical control транспорта в состоянии опьянения алкоголем/веществами с нарушением нормальных способностей, либо с незаконным уровнем алкоголя в крови/дыхании.',
    penaltiesEn:
      'First DUI is often a misdemeanor with fines, probation, school, possible jail, and license consequences. Repeat DUIs and injury/death cases escalate sharply, including felony exposure. Refusals and test results have separate legal effects.',
    penaltiesRu:
      'Первый DUI часто misdemeanor: штрафы, probation, школа, возможен jail + права. Повторы и травмы/смерть резко усиливают дело, включая felony. Отказ от теста и результаты имеют отдельные последствия.',
    processEn:
      'Criminal case + separate DMV administrative license process with short deadlines. First appearance, arraignment, then motions (stop/test issues) or plea/trial. Act fast on DMV paperwork.',
    processRu:
      'Уголовное дело + отдельно DMV по правам с короткими сроками. First appearance, arraignment, затем motions или plea/суд. Сразу реагируйте на бумаги DMV.',
    observationsEn:
      'Immigration and professional licenses can be affected. Do not ignore either the court date or the DMV deadline.',
    observationsRu:
      'Могут пострадать иммиграция и проф. лицензии. Не игнорируйте ни суд, ни срок DMV.',
  },
  {
    code: '322.34',
    titleEn: 'Driving while license suspended/revoked',
    titleRu: 'Вождение при приостановленных/отозванных правах',
    levelEn: 'Misdemeanor or felony with knowledge/priors',
    levelRu: 'Misdemeanor или felony при знании/рецидиве',
    explanationEn:
      'This statute addresses driving when a license or privilege is canceled, suspended, or revoked. “Knowing” violations and prior history can raise the offense level.',
    explanationRu:
      'Статут о вождении при отмене, приостановке или отзыве прав. «Зная» о статусе и прошлые случаи повышают тяжесть.',
    penaltiesEn:
      'Can range from misdemeanor penalties to felony exposure for certain knowing/repeat situations. Vehicle impound and further suspension are common practical consequences.',
    penaltiesRu:
      'От misdemeanor до felony в части случаев с знанием/повторами. Часто эвакуация авто и дальнейшая приостановка прав.',
    processEn:
      'Traffic stop → citation or arrest → court. Bring suspension paperwork and any reinstatement receipts to your lawyer.',
    processRu:
      'Остановка → штраф или арест → суд. Принесите адвокату бумаги о приостановке и квитанции о восстановлении.',
    observationsEn:
      'Check your license status online before driving. Insurance and employment can be hit even on “smaller” charges.',
    observationsRu:
      'Проверяйте статус прав онлайн до поездки. Даже «небольшое» дело бьёт по страховке и работе.',
  },
  {
    code: '790.23',
    titleEn: 'Felons possessing firearms / ammo (certain persons)',
    titleRu: 'Владение оружием/патронами лицами с запретом',
    levelEn: 'Felony (serious)',
    levelRu: 'Felony (серьёзно)',
    explanationEn:
      'Florida law restricts firearm and ammunition possession by persons in certain prohibited categories, including many people with felony convictions (subject to restoration rules). Federal law may also apply.',
    explanationRu:
      'Закон Флориды ограничивает владение оружием и патронами для ряда категорий, включая многих с felony (с учётом правил восстановления прав). Может действовать и федеральный закон.',
    penaltiesEn:
      'Typically a serious felony with multi-year maximum exposure. Firearm seizures and federal referral risk exist in some cases.',
    penaltiesRu:
      'Обычно серьёзный felony с многолетним максимумом. Возможны изъятие оружия и риск федерального преследования.',
    processEn:
      'Felony arrest, circuit court, often high scrutiny at bond. Do not make statements about ownership or “who the gun belongs to” without counsel.',
    processRu:
      'Felony-арест, circuit court, залог смотрят строго. Без адвоката не объясняйте, «чьё это оружие».',
    observationsEn:
      'Immigration and permanent federal disabilities can follow. Get specialized counsel before buying, holding, or transporting any firearm if your record is unclear.',
    observationsRu:
      'Возможны иммиграция и федеральные ограничения. Если запись неясна — к специалисту до покупки, хранения или перевозки оружия.',
  },
  {
    code: '893.13',
    titleEn: 'Controlled substance offenses',
    titleRu: 'Преступления с controlled substances',
    levelEn: 'Misdemeanor or felony by drug/amount/act',
    levelRu: 'Misdemeanor или felony — по веществу/количеству/действию',
    explanationEn:
      'Chapter 893 covers possession, sale, purchase, manufacture, delivery, and related drug crimes. The substance schedule and quantity heavily affect the charge.',
    explanationRu:
      'Глава 893 — хранение, продажа, покупка, изготовление, передача и связанные наркопреступления. Список вещества и количество сильно влияют на статью.',
    penaltiesEn:
      'Ranges from misdemeanor possession outcomes to major felonies for trafficking-level amounts (trafficking often charged under related sections). Mandatory minimums can apply in trafficking cases.',
    penaltiesRu:
      'От misdemeanor за хранение до тяжёлых felony при trafficking-объёмах (часто соседние статьи). У trafficking возможны обязательные минимумы.',
    processEn:
      'Search/seizure issues are common (stop, warrant, consent). Lab results matter. Felony vs misdemeanor determines court level.',
    processRu:
      'Часты споры об обыске (остановка, ордер, согласие). Важны лабораторные результаты. Уровень суда — по misdemeanor/felony.',
    observationsEn:
      'Sharing or giving drugs can be charged like sale/delivery in some fact patterns. Do not consent to searches casually.',
    observationsRu:
      '«Просто дать» вещество в части случаев квалифицируют как sale/delivery. Не давайте согласие на обыск бездумно.',
  },
  {
    code: '741.28',
    titleEn: 'Domestic violence — definitions',
    titleRu: 'Домашнее насилие — определения',
    levelEn: 'Definitional statute (used with other charges)',
    levelRu: 'Определения (применяется с другими статьями)',
    explanationEn:
      'Defines domestic violence and family/household members for Florida criminal and related civil contexts. It helps determine when DV procedures, enhancements, and injunction practice apply.',
    explanationRu:
      'Определяет domestic violence и членов семьи/домохозяйства для уголовных и смежных гражданских контекстов. Влияет на DV-процедуры, усиления и injunction.',
    penaltiesEn:
      'This section itself is definitional; penalties come from the underlying offense (battery, assault, stalking, etc.) plus DV-specific consequences (no-contact, batterers’ intervention, etc.).',
    penaltiesRu:
      'Сама секция — определения; наказание идёт из основного состава (battery, assault, stalking и т.д.) плюс DV-последствия (no-contact, программы и др.).',
    processEn:
      'DV arrests often trigger mandatory or strongly preferred no-contact conditions and careful first-appearance practice. Victim advocates may be involved.',
    processRu:
      'При DV-аресте часто обязательный/жёсткий no-contact и особое first appearance. Могут подключить victim advocates.',
    observationsEn:
      'Civil injunctions are separate from the criminal case but can overlap. Violating either can create new criminal exposure.',
    observationsRu:
      'Гражданский injunction отдельно от уголовного дела, но пересекается. Нарушение любого может дать новое уголовное дело.',
  },
  {
    code: '741.29',
    titleEn: 'Domestic violence — police investigation duties',
    titleRu: 'Домашнее насилие — обязанности полиции',
    levelEn: 'Procedural (investigation / arrest practice)',
    levelRu: 'Процедурная (расследование / практика ареста)',
    explanationEn:
      'Sets out law-enforcement duties when responding to domestic violence calls, including investigation steps and assistance to victims. Helps explain why officers may arrest even if a party later asks to “drop” the case.',
    explanationRu:
      'Описывает обязанности полиции на вызовах DV: шаги расследования и помощь жертве. Помогает понять, почему арест возможен, даже если позже просят «забрать заявление».',
    penaltiesEn:
      'Not a typical “penalty statute” for defendants; consequences flow from the charged crime and court orders issued in the DV case.',
    penaltiesRu:
      'Это не типичная «статья наказания» для обвиняемого; последствия идут из основного обвинения и ордеров суда.',
    processEn:
      '911 call → on-scene investigation → possible arrest → first appearance with conditions → criminal case proceeds through SAO (prosecutor).',
    processRu:
      '911 → осмотр на месте → возможен арест → first appearance с условиями → дело ведёт прокурор (SAO).',
    observationsEn:
      'Evidence (photos, messages, injuries) is collected early. If you are a victim, ask for interpreter help and safety planning resources.',
    observationsRu:
      'Доказательства (фото, сообщения, травмы) собирают рано. Если вы жертва — просите переводчика и план безопасности.',
  },
  {
    code: '775.082',
    titleEn: 'Penalties overview (general)',
    titleRu: 'Общие рамки наказаний',
    levelEn: 'General penalty framework',
    levelRu: 'Общая рамка наказаний',
    explanationEn:
      'Provides Florida’s general maximum imprisonment terms by offense degree (capital, life, 1st/2nd/3rd-degree felonies, 1st/2nd-degree misdemeanors). Specific crimes point back to this section.',
    explanationRu:
      'Общие максимумы сроков по степеням преступлений (capital, life, felony 1/2/3, misdemeanor 1/2). Конкретные статьи ссылаются сюда.',
    penaltiesEn:
      'Examples of statutory ceilings commonly referenced: 3rd-degree felony up to 5 years; 2nd-degree up to 15; 1st-degree up to 30 (non-life); 1st-degree misdemeanor up to 1 year; 2nd-degree misdemeanor up to 60 days. Actual sentences are often lower and scoresheet-driven for felonies.',
    penaltiesRu:
      'Частые потолки: felony 3 — до 5 лет; 2 — до 15; 1 — до 30 (не life); misdemeanor 1 — до 1 года; misdemeanor 2 — до 60 дней. Реальные сроки часто ниже и для felony зависят от scoresheet.',
    processEn:
      'Judges sentence within legal limits after plea or verdict, considering scoresheets, statutes, and arguments from both sides.',
    processRu:
      'Судья назначает наказание в пределах закона после plea или вердикта, учитывая scoresheet, статуты и доводы сторон.',
    observationsEn:
      'Maximum ≠ typical outcome. Enhancements, minimum mandatories, and habitual rules can change everything — check the charged statute.',
    observationsRu:
      'Максимум ≠ типичный итог. Усиления, обязательные минимумы и habitual-правила меняют всё — смотрите конкретную статью.',
  },
  {
    code: '775.083',
    titleEn: 'Fines overview (general)',
    titleRu: 'Общие рамки штрафов',
    levelEn: 'General fines framework',
    levelRu: 'Общая рамка штрафов',
    explanationEn:
      'Sets general maximum fine amounts by offense degree, often applied together with imprisonment statutes.',
    explanationRu:
      'Задаёт общие максимумы штрафов по степеням, часто вместе со сроками.',
    penaltiesEn:
      'Common ceilings include up to $5,000 for many 3rd-degree felonies, $10,000 for many 1st/2nd-degree felonies, $1,000 for 1st-degree misdemeanors, and $500 for 2nd-degree misdemeanors — plus court costs.',
    penaltiesRu:
      'Частые потолки: до $5,000 для многих felony 3, $10,000 для многих felony 1/2, $1,000 для misdemeanor 1, $500 для misdemeanor 2 — плюс судебные сборы.',
    processEn:
      'Fines and costs are imposed at sentencing or in plea agreements. Payment plans may be available; missing payments can create new problems.',
    processRu:
      'Штрафы и сборы назначают при приговоре или в сделке. Возможны планы оплаты; просрочки создают новые проблемы.',
    observationsEn:
      'Always read the judgment for total financial obligations, not only the fine line-item.',
    observationsRu:
      'В judgment смотрите всю сумму обязательств, не только строку fine.',
  },
  {
    code: '901.15',
    titleEn: 'When arrest without warrant is lawful',
    titleRu: 'Когда законен арест без ордера',
    levelEn: 'Procedural arrest authority',
    levelRu: 'Процедурные полномочия на арест',
    explanationEn:
      'Lists situations where an officer may arrest without a warrant, including felonies and certain misdemeanors (notably including battery and many domestic-violence situations).',
    explanationRu:
      'Перечисляет случаи ареста без ордера: felony и ряд misdemeanor (в т.ч. battery и многие ситуации DV).',
    penaltiesEn:
      'Not a penalty statute. It explains arrest authority that starts the criminal case.',
    penaltiesRu:
      'Не статья о наказании. Объясняет полномочия на арест, с которого начинается дело.',
    processEn:
      'Warrantless arrest → booking → first appearance (usually within 24 hours) → bond conditions → charging decision by prosecutor.',
    processRu:
      'Арест без ордера → booking → first appearance (обычно в 24 часа) → условия залога → решение прокурора об обвинении.',
    observationsEn:
      'Even if you believe the arrest was improper, do not resist physically — challenge it later with a lawyer.',
    observationsRu:
      'Даже если арест кажется незаконным — не сопротивляйтесь физически; оспаривайте позже с адвокатом.',
  },
  {
    code: '777.04',
    titleEn: 'Attempt, solicitation, conspiracy',
    titleRu: 'Покушение, подстрекательство, сговор',
    levelEn: 'Usually one degree below the completed crime (with exceptions)',
    levelRu: 'Обычно на степень ниже оконченного состава (есть исключения)',
    explanationEn:
      'Covers criminal attempt, solicitation, and conspiracy — punishing unfinished or agreement-based crimes when legal elements are met.',
    explanationRu:
      'Покушение, подстрекательство и сговор — ответственность за незавершённые или «по договорённости» преступления при наличии элементов состава.',
    penaltiesEn:
      'Often punished at one degree lower than the completed offense, with important exceptions carved out by statute. Exact exposure depends on the target crime.',
    penaltiesRu:
      'Часто на степень ниже оконченного преступления, но есть исключения. Риск зависит от цели покушения/сговора.',
    processEn:
      'Charged like other crimes; evidence may include messages, planning acts, and statements. Lawyer review before any interview is critical.',
    processRu:
      'Обвиняют как другие преступления; доказательства — переписка, действия по подготовке, заявления. До допроса — адвокат.',
    observationsEn:
      'Text messages about a plan can become conspiracy evidence. Do not “joke” about crimes in writing.',
    observationsRu:
      'Переписка о плане может стать доказательством сговора. Не «шутите» о преступлениях в сообщениях.',
  },
  {
    code: '827.03',
    titleEn: 'Child abuse / aggravated child abuse / neglect',
    titleRu: 'Жестокое обращение с ребёнком / neglect',
    levelEn: 'Felony levels common',
    levelRu: 'Часто уровни felony',
    explanationEn:
      'Addresses abuse, aggravated abuse, and neglect of a child. Definitions focus on willful acts or omissions causing harm or creating certain risks to a child.',
    explanationRu:
      'Abuse, aggravated abuse и neglect в отношении ребёнка. Упор на умышленные действия или бездействие, причиняющие вред или создающие определённый риск.',
    penaltiesEn:
      'Often felonies with substantial prison exposure depending on the subsection and injury. DCF/dependency issues may proceed in parallel.',
    penaltiesRu:
      'Часто felony с серьёзным сроком в зависимости от пункта и травм. Параллельно могут идти дела DCF/dependency.',
    processEn:
      'Criminal investigation may run alongside child-protective proceedings. Statements to investigators are high-risk — get counsel.',
    processRu:
      'Уголовное расследование может идти параллельно с защитой детей. Показания следствию опасны — нужен адвокат.',
    observationsEn:
      'Immigration and parental-rights consequences can be severe. Do not discuss the case on social media or with the child’s other parent without lawyer guidance.',
    observationsRu:
      'Иммиграция и родительские права могут пострадать сильно. Не обсуждайте дело в соцсетях или с другим родителем без адвоката.',
  },
  {
    code: '806.13',
    titleEn: 'Criminal mischief (vandalism)',
    titleRu: 'Criminal mischief (порча имущества)',
    levelEn: 'Misdemeanor or felony by damage amount',
    levelRu: 'Misdemeanor или felony — по сумме ущерба',
    explanationEn:
      'Willful and malicious damage to another’s property. The dollar amount of damage typically drives the degree.',
    explanationRu:
      'Умышленная и злонамеренная порча чужого имущества. Сумма ущерба обычно определяет степень.',
    penaltiesEn:
      'Lower damage amounts are often misdemeanors; higher amounts become felonies. Restitution is common.',
    penaltiesRu:
      'Меньший ущерб — часто misdemeanor; больший — felony. Часто назначают restitution.',
    processEn:
      'Photos, estimates, and witness statements matter. Court process follows the charged degree.',
    processRu:
      'Важны фото, оценки ущерба и свидетели. Суд — по степени обвинения.',
    observationsEn:
      'Jointly owned property and “I was mad at my partner” fact patterns still get charged. DV overlays may apply.',
    observationsRu:
      'Даже порча «совместного» имущества в ссоре с партнёром может стать делом. Возможен DV-контекст.',
  },
  {
    code: '870.01',
    titleEn: 'Affrays, riots, and unlawful assemblies',
    titleRu: 'Драки, беспорядки, незаконные собрания',
    levelEn: 'Misdemeanor to felony depending on conduct',
    levelRu: 'От misdemeanor до felony по действиям',
    explanationEn:
      'Covers fighting in public (affray) and more serious riot-related offenses. Recent amendments increased attention to violence during riots.',
    explanationRu:
      'Публичные драки (affray) и более тяжёлые составы, связанные с беспорядками. Поправки усилили внимание к насилию во время riots.',
    penaltiesEn:
      'Simple affray can be a misdemeanor; riot-related violence can be felonies with significant exposure, especially with injuries or weapons.',
    penaltiesRu:
      'Affray может быть misdemeanor; насилие в riot — felony с серьёзным риском, особенно при травмах или оружии.',
    processEn:
      'Group incidents mean lots of video. Identification and individual acts are litigated carefully.',
    processRu:
      'В групповых эпизодах много видео. Спорят идентификацию и конкретные действия каждого.',
    observationsEn:
      'Being nearby is not the same as participating — but leaving immediately and not posting videos of yourself helps reduce risk.',
    observationsRu:
      'Просто быть рядом ≠ участие — но лучше сразу уйти и не выкладывать видео с собой.',
  },
];

export function normalizeStatuteCode(input: string): string {
  return input.replace(/\s+/g, '').replace(/^\.+|\.+$/g, '');
}

export function findStatuteByCode(input: string): CriminalStatute | undefined {
  const code = normalizeStatuteCode(input);
  if (!code) return undefined;
  return criminalStatutes.find((s) => s.code === code);
}

export function suggestStatutes(input: string, limit = 8): CriminalStatute[] {
  const code = normalizeStatuteCode(input);
  if (!code) return [];
  return criminalStatutes.filter((s) => s.code.startsWith(code)).slice(0, limit);
}

export function listStatuteCodes(): string[] {
  return criminalStatutes.map((s) => s.code);
}
