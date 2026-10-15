import { GlossaryTerm, Language } from '../types';

/**
 * Florida / US legal glossary for newcomers.
 * Educational only — not legal advice.
 * Each locale shows only that language (no bilingual labels).
 */
export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'acquittal',
    termEn: 'Acquittal',
    termRu: 'Оправдание',
    termEs: 'Absolución',
    termPt: 'Absolvição',
    termHt: 'Absolisyon',
    definitionEn:
      'A formal finding that the defendant is not guilty. An acquittal ends the criminal case on those charges.',
    definitionRu:
      'Официальное решение, что обвиняемый невиновен. Оправдание завершает уголовное дело по этим обвинениям.',
    definitionEs:
      'Una decisión formal de que el acusado no es culpable. La absolución termina el caso penal por esos cargos.',
    definitionPt:
      'Uma decisão formal de que o réu não é culpado. A absolvição encerra o processo criminal por aquelas acusações.',
    definitionHt:
      'Yon desizyon ofisyèl ki di akize a pa koupab. Absolisyon an fini ka kriminèl la pou akizasyon sa yo.',
  },
  {
    id: 'affidavit',
    termEn: 'Affidavit',
    termRu: 'Аффидевит',
    termEs: 'Declaración jurada',
    termPt: 'Declaração juramentada',
    termHt: 'Deklarasyon sou sèman',
    definitionEn:
      'A written statement signed under oath. False statements in an affidavit can lead to criminal charges.',
    definitionRu:
      'Письменное заявление под присягой. Ложные сведения в аффидевите могут привести к уголовной ответственности.',
    definitionEs:
      'Una declaración escrita firmada bajo juramento. Las declaraciones falsas pueden llevar a cargos penales.',
    definitionPt:
      'Uma declaração escrita assinada sob juramento. Declarações falsas podem levar a acusações criminais.',
    definitionHt:
      'Yon deklarasyon ekri siyen sou sèman. Deklarasyon fo ka mennen akizasyon kriminèl.',
  },
  {
    id: 'appeal',
    termEn: 'Appeal',
    termRu: 'Апелляция',
    termEs: 'Apelación',
    termPt: 'Apelação',
    termHt: 'Apèl',
    definitionEn:
      'A request to a higher court to review a conviction, sentence, or important legal ruling from the trial court. Appeals have strict deadlines and usually focus on legal errors, not a brand-new trial of all facts.',
    definitionRu:
      'Просьба к вышестоящему суду пересмотреть приговор, наказание или важное решение суда первой инстанции. У апелляции жёсткие сроки; обычно спорят правовые ошибки, а не заново все факты.',
    definitionEs:
      'Una solicitud a un tribunal superior para revisar una condena, sentencia o decisión legal importante. Las apelaciones tienen plazos estrictos y suelen centrarse en errores de derecho, no en un nuevo juicio de todos los hechos.',
    definitionPt:
      'Um pedido a um tribunal superior para revisar uma condenação, pena ou decisão jurídica importante. As apelações têm prazos rígidos e geralmente focam erros de direito, não um novo julgamento de todos os fatos.',
    definitionHt:
      'Yon demann bay yon tribinal pi wo pou revize yon kondanasyon, yon santans, oswa yon desizyon legal enpòtan. Apèl yo gen dat limit sevè epi yo konsantre sou erè legal, pa yon nouvo jijman sou tout reyalite yo.',
  },
  {
    id: 'arraignment',
    termEn: 'Arraignment',
    termRu: 'Предъявление обвинения',
    termEs: 'Lectura de cargos',
    termPt: 'Leitura das acusações',
    termHt: 'Lekti akizasyon yo',
    definitionEn:
      'The first court appearance where charges are read and the defendant usually enters a plea (guilty, not guilty, or no contest).',
    definitionRu:
      'Первая явка в суд, где зачитывают обвинения и обычно просят ответить: виновен, невиновен или без признания вины.',
    definitionEs:
      'La primera comparecencia en la que se leen los cargos y el acusado suele declarar (culpable, no culpable o no contender).',
    definitionPt:
      'A primeira audiência em que as acusações são lidas e o réu geralmente responde (culpado, inocente ou sem contestação).',
    definitionHt:
      'Premye aparisyon nan tribinal kote yo li akizasyon yo epi akize a nòmalman bay yon repons (koupab, pa koupab, oswa san konteste).',
  },
  {
    id: 'arrest',
    termEn: 'Arrest',
    termRu: 'Арест',
    termEs: 'Arresto',
    termPt: 'Prisão',
    termHt: 'Arestasyon',
    definitionEn:
      'When police take you into custody because they believe there is probable cause that you committed a crime.',
    definitionRu:
      'Когда полиция берёт вас под стражу, полагая, что есть веские основания в совершении преступления.',
    definitionEs:
      'Cuando la policía lo pone bajo custodia porque cree que hay causa probable de que cometió un delito.',
    definitionPt:
      'Quando a polícia o coloca sob custódia porque acredita haver causa provável de que você cometeu um crime.',
    definitionHt:
      'Lè lapolis mete ou an detansyon paske yo kwè gen rezon solid ke ou komèt yon krim.',
  },
  {
    id: 'arrest-warrant',
    termEn: 'Arrest Warrant',
    termRu: 'Ордер на арест',
    termEs: 'Orden de arresto',
    termPt: 'Mandado de prisão',
    termHt: 'Mandaman arestasyon',
    definitionEn: 'A court order authorizing police to take a person into custody.',
    definitionRu: 'Судебный приказ, разрешающий полиции взять человека под стражу.',
    definitionEs: 'Una orden judicial que autoriza a la policía a poner a una persona bajo custodia.',
    definitionPt: 'Uma ordem judicial que autoriza a polícia a colocar uma pessoa sob custódia.',
    definitionHt: 'Yon lòd tribinal ki otorize lapolis pran yon moun an detansyon.',
  },
  {
    id: 'asylum',
    termEn: 'Asylum',
    termRu: 'Убежище',
    termEs: 'Asilo',
    termPt: 'Asilo',
    termHt: 'Azil',
    definitionEn:
      'Protection for people who fear persecution in their home country. Immigration cases are separate from state criminal court.',
    definitionRu:
      'Защита для людей, которые боятся преследования на родине. Иммиграционные дела отделены от уголовного суда штата.',
    definitionEs:
      'Protección para personas que temen persecución en su país de origen. Los casos de inmigración son separados del tribunal penal estatal.',
    definitionPt:
      'Proteção para pessoas que temem perseguição em seu país de origem. Casos de imigração são separados do tribunal criminal estadual.',
    definitionHt:
      'Pwoteksyon pou moun ki pè pèsekisyon nan peyi yo. Ka imigrasyon yo separe de tribinal kriminèl eta a.',
  },
  {
    id: 'attorney',
    termEn: 'Attorney / Lawyer',
    termRu: 'Адвокат / юрист',
    termEs: 'Abogado',
    termPt: 'Advogado',
    termHt: 'Avoka',
    definitionEn:
      'A licensed legal professional who can advise you and speak for you in court. You have the right to ask for an attorney.',
    definitionRu:
      'Лицензированный юрист, который может консультировать и представлять вас в суде. Вы имеете право просить адвоката.',
    definitionEs:
      'Un profesional legal autorizado que puede aconsejarlo y representarlo en la corte. Tiene derecho a pedir un abogado.',
    definitionPt:
      'Um profissional jurídico licenciado que pode aconselhá-lo e representá-lo no tribunal. Você tem o direito de pedir um advogado.',
    definitionHt:
      'Yon pwofesyonèl legal ki gen lisans ki ka konsèye ou epi pale pou ou nan tribinal. Ou gen dwa mande yon avoka.',
  },
  {
    id: 'bail-bond',
    termEn: 'Bond / Bail',
    termRu: 'Залог',
    termEs: 'Fianza',
    termPt: 'Fiança',
    termHt: 'Kosyon',
    definitionEn:
      'Money or release conditions set so a person can leave jail before trial, with a promise to return to court. A bail bondsman may charge a fee to post bond. Violating bond conditions can mean re-arrest.',
    definitionRu:
      'Деньги или условия освобождения из тюрьмы до суда с обязательством явиться. Компания по залогу может взять комиссию. Нарушение условий может привести к повторному аресту.',
    definitionEs:
      'Dinero o condiciones de libertad para salir de la cárcel antes del juicio, con la promesa de volver a la corte. Una agencia de fianzas puede cobrar una tarifa. Violar las condiciones puede significar un nuevo arresto.',
    definitionPt:
      'Dinheiro ou condições de soltura para sair da cadeia antes do julgamento, com a promessa de voltar ao tribunal. Uma agência de fiança pode cobrar uma taxa. Violar as condições pode significar nova prisão.',
    definitionHt:
      'Lajan oswa kondisyon liberasyon pou kite prizon an anvan jijman, ak pwomès pou retounen nan tribinal. Yon ajans kosyon ka chaje yon frè. Vyole kondisyon yo ka mennen yon lòt arestasyon.',
  },
  {
    id: 'bench-warrant',
    termEn: 'Bench Warrant',
    termRu: 'Судебный ордер',
    termEs: 'Orden judicial de arresto',
    termPt: 'Mandado judicial',
    termHt: 'Mandaman jij la',
    definitionEn:
      'A warrant issued by a judge, often when someone misses a court date (failure to appear).',
    definitionRu:
      'Ордер, выданный судьёй, часто если человек не явился в суд.',
    definitionEs:
      'Una orden emitida por un juez, a menudo cuando alguien falta a una fecha de corte.',
    definitionPt:
      'Um mandado emitido por um juiz, muitas vezes quando alguém falta a uma data de audiência.',
    definitionHt:
      'Yon mandaman yon jij bay, souvan lè yon moun manke yon dat tribinal.',
  },
  {
    id: 'beyond-reasonable-doubt',
    termEn: 'Beyond a Reasonable Doubt',
    termRu: 'Вне разумных сомнений',
    termEs: 'Más allá de toda duda razonable',
    termPt: 'Além de qualquer dúvida razoável',
    termHt: 'Pi lwen pase dout rezonab',
    definitionEn:
      'The high standard of proof the prosecution must meet to convict someone of a crime in the United States.',
    definitionRu:
      'Высокий стандарт доказательств, который обвинение должно соблюсти, чтобы осудить человека в США.',
    definitionEs:
      'El alto estándar de prueba que la fiscalía debe cumplir para condenar a alguien por un delito en Estados Unidos.',
    definitionPt:
      'O alto padrão de prova que a acusação deve atingir para condenar alguém por um crime nos Estados Unidos.',
    definitionHt:
      'Estanda prèv wo akizasyon an dwe rive jwenn pou kondane yon moun pou yon krim Ozetazini.',
  },
  {
    id: 'booking',
    termEn: 'Booking',
    termRu: 'Оформление при аресте',
    termEs: 'Registro policial',
    termPt: 'Registro na cadeia',
    termHt: 'Anrejistreman nan prizon',
    definitionEn:
      'The jail intake process after arrest: fingerprints, photo (mugshot), and personal information.',
    definitionRu:
      'Процедура в участке/тюрьме после ареста: отпечатки, фото и личные данные.',
    definitionEs:
      'El proceso de ingreso a la cárcel después del arresto: huellas, foto y datos personales.',
    definitionPt:
      'O processo de entrada na cadeia após a prisão: digitais, foto e informações pessoais.',
    definitionHt:
      'Pwosesis antre nan prizon apre arestasyon: anprent dwèt, foto, ak enfòmasyon pèsonèl.',
  },
  {
    id: 'citation',
    termEn: 'Citation',
    termRu: 'Штрафной талон',
    termEs: 'Citación / Multa',
    termPt: 'Citação / Multa',
    termHt: 'Tikè / Sitasyon',
    definitionEn: 'A ticket or written notice of a violation, often for traffic offenses.',
    definitionRu: 'Талон или письменное уведомление о нарушении, часто по дорожным делам.',
    definitionEs: 'Un ticket o aviso escrito de una infracción, a menudo de tránsito.',
    definitionPt: 'Um ticket ou aviso escrito de uma infração, muitas vezes de trânsito.',
    definitionHt: 'Yon tikè oswa avi ekri sou yon vyolasyon, souvan pou trafik.',
  },
  {
    id: 'consent-search',
    termEn: 'Consent Search',
    termRu: 'Обыск по согласию',
    termEs: 'Registro con consentimiento',
    termPt: 'Busca com consentimento',
    termHt: 'Fouyay ak konsantman',
    definitionEn:
      'A search allowed because you voluntarily agree. You can refuse consent in many situations.',
    definitionRu:
      'Обыск, разрешённый потому что вы добровольно согласились. Во многих случаях согласие можно не давать.',
    definitionEs:
      'Un registro permitido porque usted acepta voluntariamente. En muchas situaciones puede negar el consentimiento.',
    definitionPt:
      'Uma busca permitida porque você concorda voluntariamente. Em muitas situações você pode recusar o consentimento.',
    definitionHt:
      'Yon fouyay ki pèmèt paske ou dakò volontèman. Nan anpil sitiyasyon ou ka refize bay konsantman.',
  },
  {
    id: 'continuance',
    termEn: 'Continuance',
    termRu: 'Отложение дела',
    termEs: 'Aplazamiento',
    termPt: 'Adiamento',
    termHt: 'Ranvwa',
    definitionEn: 'A court order that postpones a hearing or trial to a later date.',
    definitionRu: 'Судебное решение перенести слушание или процесс на более позднюю дату.',
    definitionEs: 'Una orden judicial que pospone una audiencia o juicio a una fecha posterior.',
    definitionPt: 'Uma ordem judicial que adia uma audiência ou julgamento para uma data posterior.',
    definitionHt: 'Yon lòd tribinal ki ranvwaye yon odyans oswa jijman pou yon dat pita.',
  },
  {
    id: 'conviction',
    termEn: 'Conviction',
    termRu: 'Осуждение',
    termEs: 'Condena',
    termPt: 'Condenação',
    termHt: 'Kondanasyon',
    definitionEn:
      'A formal finding of guilt after a plea or trial. Convictions can affect immigration status.',
    definitionRu:
      'Официальное признание виновным после признания вины или суда. Осуждение может повлиять на иммиграционный статус.',
    definitionEs:
      'Una declaración formal de culpabilidad tras una declaración o un juicio. Las condenas pueden afectar el estatus migratorio.',
    definitionPt:
      'Uma declaração formal de culpa após uma resposta ou julgamento. Condenações podem afetar o status imigratório.',
    definitionHt:
      'Yon desizyon ofisyèl de kilpabilite apre yon repons oswa yon jijman. Kondanasyon yo ka afekte estati imigrasyon.',
  },
  {
    id: 'defendant',
    termEn: 'Defendant',
    termRu: 'Обвиняемый',
    termEs: 'Acusado',
    termPt: 'Réu / Acusado',
    termHt: 'Akize',
    definitionEn: 'The person accused of a crime (criminal case) or sued (civil case).',
    definitionRu:
      'Человек, которого обвиняют в преступлении (уголовное дело) или которому предъявляют иск (гражданское дело).',
    definitionEs:
      'La persona acusada de un delito (caso penal) o demandada (caso civil).',
    definitionPt:
      'A pessoa acusada de um crime (caso criminal) ou processada (caso cível).',
    definitionHt:
      'Moun yo akize pou yon krim (ka kriminèl) oswa yo pote pwosè kont li (ka sivil).',
  },
  {
    id: 'detention',
    termEn: 'Detention',
    termRu: 'Задержание',
    termEs: 'Detención',
    termPt: 'Detenção',
    termHt: 'Detansyon',
    definitionEn:
      'A temporary police stop based on reasonable suspicion; shorter and less formal than an arrest.',
    definitionRu:
      'Временная остановка полицией на основе разумных подозрений; короче и формально слабее ареста.',
    definitionEs:
      'Una parada policial temporal basada en sospecha razonable; más breve y menos formal que un arresto.',
    definitionPt:
      'Uma parada policial temporária baseada em suspeita razoável; mais curta e menos formal que uma prisão.',
    definitionHt:
      'Yon arè lapolis tanporè ki baze sou sispèk rezonab; pi kout e mwens fòmèl pase yon arestasyon.',
  },
  {
    id: 'discovery',
    termEn: 'Discovery',
    termRu: 'Раскрытие доказательств',
    termEs: 'Descubrimiento de pruebas',
    termPt: 'Descoberta de provas',
    termHt: 'Echanj prèv',
    definitionEn:
      'The process where each side exchanges evidence and information before trial.',
    definitionRu:
      'Процесс, в котором стороны обмениваются доказательствами и информацией до суда.',
    definitionEs:
      'El proceso en el que cada parte intercambia pruebas e información antes del juicio.',
    definitionPt:
      'O processo em que cada lado troca provas e informações antes do julgamento.',
    definitionHt:
      'Pwosesis kote chak bò echanje prèv ak enfòmasyon anvan jijman an.',
  },
  {
    id: 'dismissal',
    termEn: 'Dismissal',
    termRu: 'Прекращение дела',
    termEs: 'Sobreseimiento / Desestimación',
    termPt: 'Arquivamento / Extinção',
    termHt: 'Sispansyon ka a',
    definitionEn:
      'When a judge or prosecutor ends the case without a conviction on those charges.',
    definitionRu:
      'Когда судья или прокурор прекращает дело без осуждения по этим обвинениям.',
    definitionEs:
      'Cuando un juez o fiscal termina el caso sin una condena por esos cargos.',
    definitionPt:
      'Quando um juiz ou promotor encerra o caso sem condenação por aquelas acusações.',
    definitionHt:
      'Lè yon jij oswa yon pwosekè fini ka a san yon kondanasyon pou akizasyon sa yo.',
  },
  {
    id: 'domestic-violence',
    termEn: 'Domestic Violence',
    termRu: 'Домашнее насилие',
    termEs: 'Violencia doméstica',
    termPt: 'Violência doméstica',
    termHt: 'Vyolans domestik',
    definitionEn:
      'Abuse or threats between family or household members / intimate partners. Florida treats many domestic violence cases as serious criminal matters.',
    definitionRu:
      'Насилие или угрозы между членами семьи/домохозяйства или партнёрами. Во Флориде многие такие дела считаются серьёзными уголовными.',
    definitionEs:
      'Abuso o amenazas entre familiares, miembros del hogar o parejas íntimas. Florida trata muchos de estos casos como asuntos penales graves.',
    definitionPt:
      'Abuso ou ameaças entre familiares, membros do lar ou parceiros íntimos. A Flórida trata muitos desses casos como questões criminais graves.',
    definitionHt:
      'Abi oswa menas ant manm fanmi, kay, oswa patnè entim. Florid trete anpil ka sa yo kòm zafè kriminèl grav.',
  },
  {
    id: 'dui',
    termEn: 'DUI',
    termRu: 'Вождение в нетрезвом виде',
    termEs: 'Conducir bajo la influencia',
    termPt: 'Dirigir sob influência',
    termHt: 'Kondwi anba enfliyans',
    definitionEn:
      'Driving Under the Influence — operating a vehicle while impaired by alcohol or drugs in Florida.',
    definitionRu:
      'Управление транспортом в состоянии опьянения алкоголем или наркотиками во Флориде.',
    definitionEs:
      'Conducir un vehículo bajo los efectos del alcohol o las drogas en Florida.',
    definitionPt:
      'Operar um veículo sob efeito de álcool ou drogas na Flórida.',
    definitionHt:
      'Kondwi yon machin pandan ou anba enfliyans alkòl oswa dwòg nan Florid.',
  },
  {
    id: 'evidence',
    termEn: 'Evidence',
    termRu: 'Доказательства',
    termEs: 'Pruebas',
    termPt: 'Provas',
    termHt: 'Prèv',
    definitionEn:
      'Information presented in court (testimony, documents, videos, objects) to prove or disprove facts.',
    definitionRu:
      'Информация в суде (показания, документы, видео, предметы) для подтверждения или опровержения фактов.',
    definitionEs:
      'Información presentada en la corte (testimonios, documentos, videos, objetos) para probar o refutar hechos.',
    definitionPt:
      'Informação apresentada no tribunal (depoimentos, documentos, vídeos, objetos) para provar ou refutar fatos.',
    definitionHt:
      'Enfòmasyon yo prezante nan tribinal (temwayaj, dokiman, videyo, objè) pou pwouve oswa demanti reyalite.',
  },
  {
    id: 'extradition',
    termEn: 'Extradition',
    termRu: 'Экстрадиция',
    termEs: 'Extradición',
    termPt: 'Extradição',
    termHt: 'Ekstradisyon',
    definitionEn:
      'Legal process of transferring a person from one state or country to another to face charges.',
    definitionRu:
      'Юридическая процедура передачи человека из одного штата или страны в другую для судебного преследования.',
    definitionEs:
      'Proceso legal de trasladar a una persona de un estado o país a otro para enfrentar cargos.',
    definitionPt:
      'Processo legal de transferir uma pessoa de um estado ou país para outro para enfrentar acusações.',
    definitionHt:
      'Pwosesis legal pou transfè yon moun soti nan yon eta oswa peyi ale nan yon lòt pou fè fas ak akizasyon.',
  },
  {
    id: 'failure-to-appear',
    termEn: 'Failure to Appear',
    termRu: 'Неявка в суд',
    termEs: 'Incomparecencia',
    termPt: 'Não comparecimento',
    termHt: 'Pa parèt nan tribinal',
    definitionEn:
      'Missing a required court date. Can lead to a bench warrant and additional charges.',
    definitionRu:
      'Пропуск обязательной даты суда. Может привести к судебному ордеру и дополнительным обвинениям.',
    definitionEs:
      'Faltar a una fecha de corte obligatoria. Puede llevar a una orden de arresto y cargos adicionales.',
    definitionPt:
      'Faltar a uma data obrigatória no tribunal. Pode levar a um mandado judicial e acusações adicionais.',
    definitionHt:
      'Manke yon dat tribinal obligatwa. Sa ka mennen yon mandaman jij ak plis akizasyon.',
  },
  {
    id: 'felony',
    termEn: 'Felony',
    termRu: 'Фелония',
    termEs: 'Delito grave',
    termPt: 'Crime grave',
    termHt: 'Krim grav',
    definitionEn:
      'A serious crime in Florida, generally punishable by more than one year in prison.',
    definitionRu:
      'Серьёзное преступление во Флориде, обычно с возможным сроком более одного года тюрьмы.',
    definitionEs:
      'Un delito grave en Florida, generalmente castigado con más de un año de prisión.',
    definitionPt:
      'Um crime grave na Flórida, geralmente punível com mais de um ano de prisão.',
    definitionHt:
      'Yon krim grav nan Florid, jeneralman ki ka pini ak plis pase yon ane nan prizon.',
  },
  {
    id: 'flhsmv',
    termEn: 'FLHSMV',
    termRu: 'Департамент безопасности дорожного движения Флориды',
    termEs: 'Departamento de Seguridad Vial de Florida',
    termPt: 'Departamento de Segurança Viária da Flórida',
    termHt: 'Depatman Sekirite Wout Florid',
    definitionEn:
      'Florida Highway Safety and Motor Vehicles — agency for driver licenses, IDs, and vehicle titles.',
    definitionRu:
      'Ведомство Флориды по водительским правам, удостоверениям личности и регистрации транспорта.',
    definitionEs:
      'Agencia de Florida para licencias de conducir, identificaciones y títulos de vehículos.',
    definitionPt:
      'Agência da Flórida para carteiras de motorista, IDs e títulos de veículos.',
    definitionHt:
      'Ajans Florid pou lisans chofè, kat idantite, ak tit machin.',
  },
  {
    id: 'grand-jury',
    termEn: 'Grand Jury',
    termRu: 'Большое жюри',
    termEs: 'Gran jurado',
    termPt: 'Grande júri',
    termHt: 'Gran jiri',
    definitionEn:
      'A group of citizens that decides whether there is enough evidence to formally charge someone with certain serious crimes (indictment).',
    definitionRu:
      'Группа граждан, которая решает, достаточно ли доказательств для официального обвинения в ряде тяжких преступлений.',
    definitionEs:
      'Un grupo de ciudadanos que decide si hay suficientes pruebas para acusar formalmente a alguien de ciertos delitos graves.',
    definitionPt:
      'Um grupo de cidadãos que decide se há provas suficientes para acusar formalmente alguém de certos crimes graves.',
    definitionHt:
      'Yon gwoup sitwayen ki deside si gen ase prèv pou akize yon moun fòmèlman pou sèten krim grav.',
  },
  {
    id: 'hearing',
    termEn: 'Hearing',
    termRu: 'Судебное слушание',
    termEs: 'Audiencia',
    termPt: 'Audiência',
    termHt: 'Odyans',
    definitionEn:
      'A court session where a judge hears arguments or evidence on a specific issue (not always a full trial).',
    definitionRu:
      'Заседание суда, где судья рассматривает доводы или доказательства по конкретному вопросу (не всегда полный процесс).',
    definitionEs:
      'Una sesión judicial donde un juez escucha argumentos o pruebas sobre un asunto específico (no siempre un juicio completo).',
    definitionPt:
      'Uma sessão judicial em que um juiz ouve argumentos ou provas sobre uma questão específica (nem sempre um julgamento completo).',
    definitionHt:
      'Yon sesyon tribinal kote yon jij tande agiman oswa prèv sou yon sijè espesifik (pa toujou yon jijman konplè).',
  },
  {
    id: 'ice',
    termEn: 'ICE',
    termRu: 'Иммиграционная и таможенная служба США',
    termEs: 'Servicio de Inmigración y Aduanas',
    termPt: 'Serviço de Imigração e Alfândega',
    termHt: 'Sèvis Imigrasyon ak Ladwàn',
    definitionEn:
      'U.S. Immigration and Customs Enforcement — federal agency that investigates and detains people for immigration violations.',
    definitionRu:
      'Федеральная служба США, которая расследует и задерживает по иммиграционным нарушениям.',
    definitionEs:
      'Agencia federal de EE. UU. que investiga y detiene a personas por violaciones migratorias.',
    definitionPt:
      'Agência federal dos EUA que investiga e detém pessoas por violações de imigração.',
    definitionHt:
      'Ajans federal Etazini ki mennen ankèt epi kenbe moun pou vyolasyon imigrasyon.',
  },
  {
    id: 'indictment',
    termEn: 'Indictment',
    termRu: 'Обвинительный акт',
    termEs: 'Acusación formal',
    termPt: 'Denúncia / Acusação formal',
    termHt: 'Akizasyon fòmèl',
    definitionEn:
      'A formal charging document issued by a grand jury stating that there is enough evidence to proceed with a criminal case.',
    definitionRu:
      'Официальный документ большого жюри о том, что доказательств достаточно для уголовного преследования.',
    definitionEs:
      'Un documento formal de cargos emitido por un gran jurado que indica que hay pruebas suficientes para continuar un caso penal.',
    definitionPt:
      'Um documento formal de acusação emitido por um grande júri afirmando que há provas suficientes para seguir com o processo criminal.',
    definitionHt:
      'Yon dokiman akizasyon fòmèl gran jiri a bay ki di gen ase prèv pou kontinye yon ka kriminèl.',
  },
  {
    id: 'injunction',
    termEn: 'Injunction / Restraining Order',
    termRu: 'Судебный запрет',
    termEs: 'Orden de restricción',
    termPt: 'Medida protetiva / Ordem restritiva',
    termHt: 'Lòd restriksyon',
    definitionEn:
      'A court order that can restrict contact, require someone to stay away, or set other rules — common in domestic violence cases in Florida.',
    definitionRu:
      'Судебный приказ, который может ограничить контакты, потребовать держаться на расстоянии или установить другие правила — часто по делам о домашнем насилии во Флориде.',
    definitionEs:
      'Una orden judicial que puede restringir el contacto, exigir que alguien se mantenga alejado u otras reglas — común en casos de violencia doméstica en Florida.',
    definitionPt:
      'Uma ordem judicial que pode restringir contato, exigir que alguém se afaste ou estabelecer outras regras — comum em casos de violência doméstica na Flórida.',
    definitionHt:
      'Yon lòd tribinal ki ka limite kontak, mande yon moun rete lwen, oswa mete lòt règ — komen nan ka vyolans domestik nan Florid.',
  },
  {
    id: 'judge',
    termEn: 'Judge',
    termRu: 'Судья',
    termEs: 'Juez',
    termPt: 'Juiz',
    termHt: 'Jij',
    definitionEn:
      'The court official who runs hearings/trials, rules on law, and in many cases decides sentences.',
    definitionRu:
      'Должностное лицо суда, которое ведёт слушания/процессы, решает вопросы права и во многих случаях назначает наказание.',
    definitionEs:
      'El funcionario judicial que dirige audiencias/juicios, decide cuestiones de derecho y en muchos casos impone sentencias.',
    definitionPt:
      'O oficial do tribunal que conduz audiências/julgamentos, decide questões de direito e em muitos casos define a pena.',
    definitionHt:
      'Ofisyè tribinal la ki dirije odyans/jijman, deside sou lwa a, epi nan anpil ka bay santans.',
  },
  {
    id: 'jury',
    termEn: 'Jury',
    termRu: 'Присяжные',
    termEs: 'Jurado',
    termPt: 'Júri',
    termHt: 'Jiri',
    definitionEn:
      'Citizens selected to hear evidence at trial and decide facts (for example, guilty or not guilty).',
    definitionRu:
      'Граждане, выбранные для слушания доказательств на процессе и решения вопросов факта (например, виновен или нет).',
    definitionEs:
      'Ciudadanos seleccionados para escuchar pruebas en el juicio y decidir los hechos (por ejemplo, culpable o no culpable).',
    definitionPt:
      'Cidadãos escolhidos para ouvir provas no julgamento e decidir os fatos (por exemplo, culpado ou inocente).',
    definitionHt:
      'Sitwayen yo chwazi pou tande prèv nan jijman epi deside sou reyalite yo (pa egzanp, koupab oswa pa koupab).',
  },
  {
    id: 'misdemeanor',
    termEn: 'Misdemeanor',
    termRu: 'Мисдиминор',
    termEs: 'Delito menor',
    termPt: 'Contravenção / Crime menor',
    termHt: 'Krim mwens grav',
    definitionEn:
      'A less serious crime than a felony in Florida, generally punishable by up to one year in county jail.',
    definitionRu:
      'Менее тяжкое преступление, чем фелония во Флориде; обычно до одного года в окружной тюрьме.',
    definitionEs:
      'Un delito menos grave que un delito grave en Florida; generalmente castigado con hasta un año en la cárcel del condado.',
    definitionPt:
      'Um crime menos grave que um crime grave na Flórida; geralmente punível com até um ano na cadeia do condado.',
    definitionHt:
      'Yon krim mwens grav pase yon krim grav nan Florid; jeneralman ki ka pini ak jiska yon ane nan prizon konte a.',
  },
  {
    id: 'miranda',
    termEn: 'Miranda Rights',
    termRu: 'Права Миранды',
    termEs: 'Derechos Miranda',
    termPt: 'Direitos Miranda',
    termHt: 'Dwa Miranda',
    definitionEn:
      'Warnings police must give before custodial interrogation: right to remain silent and right to an attorney.',
    definitionRu:
      'Предупреждения, которые полиция должна дать перед допросом под стражей: право молчать и право на адвоката.',
    definitionEs:
      'Advertencias que la policía debe dar antes de un interrogatorio bajo custodia: derecho a guardar silencio y derecho a un abogado.',
    definitionPt:
      'Avisos que a polícia deve dar antes de um interrogatório sob custódia: direito de permanecer em silêncio e direito a um advogado.',
    definitionHt:
      'Avètisman lapolis dwe bay anvan yon entèwogasyon an detansyon: dwa pou rete silans ak dwa pou gen yon avoka.',
  },
  {
    id: 'nolo',
    termEn: 'No Contest',
    termRu: 'Без признания вины',
    termEs: 'No contender',
    termPt: 'Sem contestação',
    termHt: 'San konteste',
    definitionEn:
      'A plea where you do not admit guilt but accept punishment. It can still count as a conviction for many purposes.',
    definitionRu:
      'Ответ в суде без признания вины, но с принятием наказания. Для многих целей всё равно считается осуждением.',
    definitionEs:
      'Una declaración en la que no admite culpabilidad pero acepta el castigo. Aun así puede contar como condena para muchos fines.',
    definitionPt:
      'Uma resposta em que você não admite culpa, mas aceita a pena. Ainda assim pode contar como condenação para muitos fins.',
    definitionHt:
      'Yon repons kote ou pa admèt ou koupab men ou aksepte pinisyon an. Li ka toujou konte kòm yon kondanasyon pou anpil rezon.',
  },
  {
    id: 'notice-to-appear',
    termEn: 'Notice to Appear',
    termRu: 'Повестка о явке',
    termEs: 'Citación para comparecer',
    termPt: 'Notificação para comparecer',
    termHt: 'Avi pou parèt',
    definitionEn:
      'In Florida, a written order to appear in court instead of being taken to jail immediately for some offenses. Missing it can lead to a warrant.',
    definitionRu:
      'Во Флориде письменный приказ явиться в суд вместо немедленной посадки в тюрьму по некоторым делам. Неявка может привести к ордеру.',
    definitionEs:
      'En Florida, una orden escrita para comparecer en la corte en lugar de ir a la cárcel de inmediato por algunas infracciones. Faltar puede llevar a una orden de arresto.',
    definitionPt:
      'Na Flórida, uma ordem por escrito para comparecer ao tribunal em vez de ir imediatamente para a cadeia em algumas infrações. Faltar pode levar a um mandado.',
    definitionHt:
      'Nan Florid, yon lòd ekri pou parèt nan tribinal olye pou yo mennen ou nan prizon touswit pou kèk ofans. Si ou manke li, sa ka mennen yon mandaman.',
  },
  {
    id: 'parole',
    termEn: 'Parole',
    termRu: 'Условно-досрочное освобождение',
    termEs: 'Libertad condicional',
    termPt: 'Liberdade condicional',
    termHt: 'Libète kondisyonèl',
    definitionEn:
      'Supervised release from prison before the full sentence is finished. Florida uses parole only in limited older cases; many releases use other supervision instead.',
    definitionRu:
      'Освобождение из тюрьмы под надзором до конца срока. Во Флориде применяется ограниченно; чаще другие формы надзора.',
    definitionEs:
      'Liberación supervisada de la prisión antes de terminar toda la condena. Florida la usa solo en casos antiguos limitados; muchas liberaciones usan otra supervisión.',
    definitionPt:
      'Liberação supervisionada da prisão antes do fim da pena. A Flórida usa isso só em casos antigos limitados; muitas liberações usam outra supervisão.',
    definitionHt:
      'Liberasyon anba sipèvizyon soti nan prizon anvan tout santans lan fini. Florid sèvi ak li sèlman nan kèk ka ansyen; anpil liberasyon sèvi ak lòt sipèvizyon.',
  },
  {
    id: 'plea',
    termEn: 'Plea',
    termRu: 'Ответ на обвинение',
    termEs: 'Declaración de culpabilidad',
    termPt: 'Resposta à acusação',
    termHt: 'Repons sou akizasyon',
    definitionEn:
      'Your formal answer to charges: guilty, not guilty, or no contest. Never enter a plea without understanding immigration consequences.',
    definitionRu:
      'Ваш официальный ответ на обвинения: виновен, невиновен или без признания вины. Не отвечайте, не поняв иммиграционные последствия.',
    definitionEs:
      'Su respuesta formal a los cargos: culpable, no culpable o no contender. Nunca declare sin entender las consecuencias migratorias.',
    definitionPt:
      'Sua resposta formal às acusações: culpado, inocente ou sem contestação. Nunca responda sem entender as consequências imigratórias.',
    definitionHt:
      'Repons ofisyèl ou bay pou akizasyon yo: koupab, pa koupab, oswa san konteste. Pa janm reponn san konprann konsekans imigrasyon yo.',
  },
  {
    id: 'plea-bargain',
    termEn: 'Plea Bargain / Plea Deal',
    termRu: 'Сделка со следствием',
    termEs: 'Acuerdo de culpabilidad',
    termPt: 'Acordo de confissão',
    termHt: 'Akò akizasyon',
    definitionEn:
      'An agreement where the defendant pleads guilty (or no contest) to certain charges, often in exchange for reduced charges or a recommended sentence.',
    definitionRu:
      'Соглашение, при котором обвиняемый признаёт вину (или отвечает без признания) по определённым статьям, часто в обмен на смягчение обвинений или рекомендации по сроку.',
    definitionEs:
      'Un acuerdo en el que el acusado se declara culpable (o no contender) por ciertos cargos, a menudo a cambio de cargos menores o una sentencia recomendada.',
    definitionPt:
      'Um acordo em que o réu se declara culpado (ou sem contestação) por certas acusações, muitas vezes em troca de acusações menores ou uma pena recomendada.',
    definitionHt:
      'Yon akò kote akize a diaklare li koupab (oswa san konteste) pou sèten akizasyon, souvan an echanj pou akizasyon pi lejè oswa yon santans rekòmande.',
  },
  {
    id: 'pretrial-motions',
    termEn: 'Pretrial Motions',
    termRu: 'Досудебные ходатайства',
    termEs: 'Mociones previas al juicio',
    termPt: 'Petições pré-julgamento',
    termHt: 'Mosion anvan jijman',
    definitionEn:
      'Written requests asking the judge to decide legal issues before trial — for example, suppress evidence, dismiss charges, or set rules for what can be used in court. Filing deadlines matter.',
    definitionRu:
      'Письменные просьбы к судье решить правовые вопросы до суда — например, исключить доказательства, прекратить обвинения или установить правила для процесса. Сроки подачи важны.',
    definitionEs:
      'Solicitudes escritas para que el juez decida asuntos legales antes del juicio — por ejemplo, excluir pruebas, desestimar cargos o fijar reglas. Los plazos de presentación importan.',
    definitionPt:
      'Pedidos por escrito para o juiz decidir questões jurídicas antes do julgamento — por exemplo, excluir provas, arquivar acusações ou definir regras. Os prazos de protocolo importam.',
    definitionHt:
      'Demann ekri pou mande jij la deside sou kesyon legal anvan jijman — pa egzanp, eskli prèv, sispann akizasyon, oswa fikse règ. Dat limit yo enpòtan.',
  },
  {
    id: 'probable-cause',
    termEn: 'Probable Cause',
    termRu: 'Веские основания',
    termEs: 'Causa probable',
    termPt: 'Causa provável',
    termHt: 'Rezon solid',
    definitionEn:
      'A reasonable basis for believing a crime occurred; often required for arrests and some searches.',
    definitionRu:
      'Разумные основания полагать, что совершено преступление; часто нужны для ареста и некоторых обысков.',
    definitionEs:
      'Una base razonable para creer que ocurrió un delito; a menudo se requiere para arrestos y algunos registros.',
    definitionPt:
      'Uma base razoável para acreditar que ocorreu um crime; muitas vezes necessária para prisões e algumas buscas.',
    definitionHt:
      'Yon baz rezonab pou kwè yon krim te rive; souvan obligatwa pou arestasyon ak kèk fouyay.',
  },
  {
    id: 'probation',
    termEn: 'Probation',
    termRu: 'Пробация',
    termEs: 'Libertad a prueba',
    termPt: 'Liberdade condicional / Probation',
    termHt: 'Pwobasyon',
    definitionEn:
      'Court-ordered supervision in the community instead of, or after, jail time. Violating probation can send you back to jail.',
    definitionRu:
      'Надзор по решению суда на свободе вместо или после срока. Нарушение пробации может вернуть в тюрьму.',
    definitionEs:
      'Supervisión ordenada por la corte en la comunidad en lugar de, o después de, tiempo en la cárcel. Violarla puede devolverlo a la cárcel.',
    definitionPt:
      'Supervisão determinada pelo tribunal na comunidade em vez de, ou após, tempo na cadeia. Violá-la pode levá-lo de volta à prisão.',
    definitionHt:
      'Sipèvizyon tribinal bay nan kominote a olye de, oswa apre, tan nan prizon. Vyole li ka voye ou tounen nan prizon.',
  },
  {
    id: 'prosecutor',
    termEn: 'Prosecutor / State Attorney',
    termRu: 'Прокурор',
    termEs: 'Fiscal / Fiscal del Estado',
    termPt: 'Promotor / Procurador do Estado',
    termHt: 'Pwosekè Eta a',
    definitionEn:
      'The lawyer who represents the government and brings criminal charges. In Florida counties this is often the State Attorney’s Office.',
    definitionRu:
      'Юрист, представляющий государство и предъявляющий обвинения. В округах Флориды это часто офис государственного прокурора.',
    definitionEs:
      'El abogado que representa al gobierno y presenta cargos penales. En los condados de Florida suele ser la Oficina del Fiscal del Estado.',
    definitionPt:
      'O advogado que representa o governo e apresenta acusações criminais. Nos condados da Flórida costuma ser o escritório do Procurador do Estado.',
    definitionHt:
      'Avoka ki reprezante gouvènman an epi pote akizasyon kriminèl. Nan konte Florid yo, sa souvan se Biwo Pwosekè Eta a.',
  },
  {
    id: 'protective-order',
    termEn: 'Protective Order',
    termRu: 'Охранный ордер',
    termEs: 'Orden de protección',
    termPt: 'Ordem de proteção',
    termHt: 'Lòd pwoteksyon',
    definitionEn:
      'A court order meant to protect someone from harm or contact — related to injunctions / restraining orders in Florida.',
    definitionRu:
      'Судебный приказ для защиты от вреда или контактов — связан с судебными запретами во Флориде.',
    definitionEs:
      'Una orden judicial para proteger a alguien del daño o del contacto — relacionada con las órdenes de restricción en Florida.',
    definitionPt:
      'Uma ordem judicial para proteger alguém de dano ou contato — relacionada a medidas protetivas na Flórida.',
    definitionHt:
      'Yon lòd tribinal pou pwoteje yon moun kont mal oswa kontak — ki gen rapò ak lòd restriksyon nan Florid.',
  },
  {
    id: 'public-defender',
    termEn: 'Public Defender',
    termRu: 'Государственный защитник',
    termEs: 'Defensor público',
    termPt: 'Defensor público',
    termHt: 'Defansè piblik',
    definitionEn:
      'A court-appointed attorney for people who cannot afford a private lawyer in criminal cases.',
    definitionRu:
      'Назначенный судом адвокат для тех, кто не может нанять частного юриста по уголовным делам.',
    definitionEs:
      'Un abogado nombrado por la corte para quienes no pueden pagar un abogado privado en casos penales.',
    definitionPt:
      'Um advogado nomeado pelo tribunal para quem não pode pagar um advogado particular em casos criminais.',
    definitionHt:
      'Yon avoka tribinal nonmen pou moun ki pa kapab peye yon avoka prive nan ka kriminèl.',
  },
  {
    id: 'reasonable-suspicion',
    termEn: 'Reasonable Suspicion',
    termRu: 'Разумное подозрение',
    termEs: 'Sospecha razonable',
    termPt: 'Suspeita razoável',
    termHt: 'Sispèk rezonab',
    definitionEn:
      'A lower standard than probable cause. Police may briefly detain someone if they reasonably suspect criminal activity.',
    definitionRu:
      'Более низкий стандарт, чем веские основания. Полиция может кратко задержать человека при разумном подозрении в преступлении.',
    definitionEs:
      'Un estándar más bajo que la causa probable. La policía puede detener brevemente a alguien si sospecha razonablemente actividad delictiva.',
    definitionPt:
      'Um padrão mais baixo do que a causa provável. A polícia pode deter alguém brevemente se suspeitar razoavelmente de atividade criminosa.',
    definitionHt:
      'Yon estanda ki pi ba pase rezon solid. Lapolis ka kenbe yon moun yon ti tan si yo sispèk rezonabman aktivite kriminèl.',
  },
  {
    id: 'search-warrant',
    termEn: 'Search Warrant',
    termRu: 'Ордер на обыск',
    termEs: 'Orden de registro',
    termPt: 'Mandado de busca',
    termHt: 'Mandaman fouyay',
    definitionEn:
      'A court order allowing police to search a specific place for specific items. Some searches are allowed without a warrant under limited exceptions.',
    definitionRu:
      'Судебный приказ, разрешающий обыскать конкретное место на конкретные предметы. В ограниченных случаях обыск возможен без ордера.',
    definitionEs:
      'Una orden judicial que permite a la policía registrar un lugar específico en busca de objetos específicos. Algunos registros se permiten sin orden bajo excepciones limitadas.',
    definitionPt:
      'Uma ordem judicial que permite à polícia vasculhar um local específico em busca de itens específicos. Algumas buscas são permitidas sem mandado sob exceções limitadas.',
    definitionHt:
      'Yon lòd tribinal ki pèmèt lapolis fouye yon kote espesifik pou jwenn bagay espesifik. Gen kèk fouyay ki pèmèt san mandaman nan eksepsyon limite.',
  },
  {
    id: 'sentence',
    termEn: 'Sentencing / Sentence',
    termRu: 'Назначение наказания',
    termEs: 'Sentencia',
    termPt: 'Sentença / Pena',
    termHt: 'Santans',
    definitionEn:
      'The court stage (and the punishment itself) after a conviction or guilty plea — jail, prison, probation, fines, classes, or other conditions. Judges follow Florida sentencing rules and the facts of the case.',
    definitionRu:
      'Стадия суда (и само наказание) после осуждения или признания вины — тюрьма, пробация, штрафы, курсы или другие условия. Судьи следуют правилам Флориды и фактам дела.',
    definitionEs:
      'La etapa judicial (y el castigo mismo) tras una condena o declaración de culpabilidad — cárcel, prisión, libertad a prueba, multas, clases u otras condiciones. Los jueces siguen las reglas de Florida y los hechos del caso.',
    definitionPt:
      'A etapa do tribunal (e a própria pena) após uma condenação ou confissão — cadeia, prisão, liberdade condicional, multas, cursos ou outras condições. Os juízes seguem as regras da Flórida e os fatos do caso.',
    definitionHt:
      'Etap tribinal la (ak pinisyon an li menm) apre yon kondanasyon oswa yon repons koupab — prizon, pwobasyon, amann, klas, oswa lòt kondisyon. Jij yo swiv règ Florid ak reyalite ka a.',
  },
  {
    id: 'stand-your-ground',
    termEn: 'Stand Your Ground',
    termRu: 'Право на самооборону без отступления',
    termEs: 'Derecho a defenderse sin retirarse',
    termPt: 'Direito de se defender sem recuar',
    termHt: 'Dwa pou defann tèt ou san retire',
    definitionEn:
      'Florida self-defense doctrine that may remove a duty to retreat before using force in certain situations.',
    definitionRu:
      'Доктрина самообороны Флориды, которая в ряде ситуаций может снимать обязанность отступать перед применением силы.',
    definitionEs:
      'Doctrina de autodefensa de Florida que puede eliminar el deber de retirarse antes de usar la fuerza en ciertas situaciones.',
    definitionPt:
      'Doutrina de legítima defesa da Flórida que pode eliminar o dever de recuar antes de usar força em certas situações.',
    definitionHt:
      'Doktrin defans pwòp tèt ou nan Florid ki ka retire obligasyon pou retire anvan ou itilize fòs nan kèk sitiyasyon.',
  },
  {
    id: 'subpoena',
    termEn: 'Subpoena',
    termRu: 'Судебная повестка',
    termEs: 'Citación judicial',
    termPt: 'Intimação',
    termHt: 'Sitasyon tribinal',
    definitionEn:
      'A court order requiring a person to appear, testify, or produce documents. Ignoring a subpoena can have serious consequences.',
    definitionRu:
      'Судебный приказ явиться, дать показания или предоставить документы. Игнорирование может иметь серьёзные последствия.',
    definitionEs:
      'Una orden judicial que exige que una persona comparezca, testifique o entregue documentos. Ignorarla puede tener consecuencias graves.',
    definitionPt:
      'Uma ordem judicial que exige que uma pessoa compareça, deponha ou apresente documentos. Ignorá-la pode ter consequências graves.',
    definitionHt:
      'Yon lòd tribinal ki mande yon moun parèt, temwen, oswa pote dokiman. Inyore li ka gen konsekans grav.',
  },
  {
    id: 'summons',
    termEn: 'Summons',
    termRu: 'Повестка',
    termEs: 'Citación',
    termPt: 'Citação',
    termHt: 'Sitasyon',
    definitionEn:
      'An official notice to appear in court. Different from an arrest warrant — you are ordered to show up, not necessarily taken to jail immediately.',
    definitionRu:
      'Официальное уведомление явиться в суд. Отличается от ордера на арест — вас обязывают явиться, а не обязательно сразу сажают.',
    definitionEs:
      'Un aviso oficial para comparecer en la corte. Diferente de una orden de arresto: se le ordena presentarse, no necesariamente lo llevan a la cárcel de inmediato.',
    definitionPt:
      'Um aviso oficial para comparecer ao tribunal. Diferente de um mandado de prisão: você é obrigado a aparecer, não necessariamente levado à cadeia imediatamente.',
    definitionHt:
      'Yon avi ofisyèl pou parèt nan tribinal. Diferan de yon mandaman arestasyon — yo mande ou parèt, yo pa nesesèman mennen ou nan prizon touswit.',
  },
  {
    id: 'trial',
    termEn: 'Trial',
    termRu: 'Судебный процесс',
    termEs: 'Juicio',
    termPt: 'Julgamento',
    termHt: 'Jijman',
    definitionEn:
      'The court proceeding where evidence is presented and a judge or jury decides the outcome of the case.',
    definitionRu:
      'Судебное разбирательство, где представляют доказательства, а судья или присяжные решают исход дела.',
    definitionEs:
      'El procedimiento judicial en el que se presentan pruebas y un juez o jurado decide el resultado del caso.',
    definitionPt:
      'O processo judicial em que as provas são apresentadas e um juiz ou júri decide o resultado do caso.',
    definitionHt:
      'Pwosedi tribinal kote yo prezante prèv epi yon jij oswa yon jiri deside rezilta ka a.',
  },
  {
    id: 'uscis',
    termEn: 'USCIS',
    termRu: 'Служба гражданства и иммиграции США',
    termEs: 'Servicios de Ciudadanía e Inmigración',
    termPt: 'Serviços de Cidadania e Imigração',
    termHt: 'Sèvis Sitwayènte ak Imigrasyon',
    definitionEn:
      'U.S. Citizenship and Immigration Services — federal agency that handles green cards, citizenship, work permits, and many immigration applications.',
    definitionRu:
      'Федеральное ведомство США по грин-картам, гражданству, разрешениям на работу и многим иммиграционным заявлениям.',
    definitionEs:
      'Agencia federal de EE. UU. que tramita tarjetas de residencia, ciudadanía, permisos de trabajo y muchas solicitudes de inmigración.',
    definitionPt:
      'Agência federal dos EUA que trata de green cards, cidadania, autorizações de trabalho e muitos pedidos de imigração.',
    definitionHt:
      'Ajans federal Etazini ki okipe kat rezidans, sitwayènte, pèmi travay, ak anpil demann imigrasyon.',
  },
  {
    id: 'victim',
    termEn: 'Victim / Alleged Victim',
    termRu: 'Потерпевший',
    termEs: 'Víctima / Presunta víctima',
    termPt: 'Vítima / Suposta vítima',
    termHt: 'Viktim / Sipoze viktim',
    definitionEn:
      'A person said to have been harmed by a crime. In Florida domestic violence cases, the State (not only the victim) can decide whether to prosecute.',
    definitionRu:
      'Человек, которому якобы причинён вред преступлением. По делам о домашнем насилии во Флориде государство (не только потерпевший) может решать, продолжать ли обвинение.',
    definitionEs:
      'Una persona a la que se dice haber sido perjudicada por un delito. En casos de violencia doméstica en Florida, el Estado (no solo la víctima) puede decidir si procesar.',
    definitionPt:
      'Uma pessoa que se diz ter sido prejudicada por um crime. Em casos de violência doméstica na Flórida, o Estado (não só a vítima) pode decidir se processa.',
    definitionHt:
      'Yon moun yo di ki te sibi mal nan yon krim. Nan ka vyolans domestik nan Florid, Eta a (pa sèlman viktim nan) ka deside si pou pouswiv.',
  },
  {
    id: 'waiver',
    termEn: 'Waiver',
    termRu: 'Отказ от права',
    termEs: 'Renuncia a un derecho',
    termPt: 'Renúncia a um direito',
    termHt: 'Renonsman dwa',
    definitionEn:
      'Giving up a legal right voluntarily (for example, waiving the right to a speedy trial). Waivers should be knowing and voluntary.',
    definitionRu:
      'Добровольный отказ от юридического права (например, от права на скорый суд). Отказ должен быть осознанным и добровольным.',
    definitionEs:
      'Renunciar voluntariamente a un derecho legal (por ejemplo, al derecho a un juicio rápido). Debe ser consciente y voluntaria.',
    definitionPt:
      'Abrir mão voluntariamente de um direito legal (por exemplo, o direito a um julgamento rápido). Deve ser consciente e voluntária.',
    definitionHt:
      'Lage yon dwa legal volontèman (pa egzanp, dwa pou yon jijman rapid). Li dwe konnen e volontè.',
  },
  {
    id: 'witness',
    termEn: 'Witness',
    termRu: 'Свидетель',
    termEs: 'Testigo',
    termPt: 'Testemunha',
    termHt: 'Temwen',
    definitionEn:
      'A person who may testify about what they saw, heard, or know that relates to a case.',
    definitionRu:
      'Человек, который может дать показания о том, что видел, слышал или знает по делу.',
    definitionEs:
      'Una persona que puede testificar sobre lo que vio, oyó o sabe relacionado con un caso.',
    definitionPt:
      'Uma pessoa que pode depor sobre o que viu, ouviu ou sabe relacionado a um caso.',
    definitionHt:
      'Yon moun ki ka temwen sou sa li te wè, tande, oswa konnen ki gen rapò ak yon ka.',
  },
].sort((a, b) => a.termEn.localeCompare(b.termEn));

export function glossaryTermLabel(term: GlossaryTerm, language: Language): string {
  switch (language) {
    case 'ru':
      return term.termRu;
    case 'es':
      return term.termEs;
    case 'pt':
      return term.termPt;
    case 'ht':
      return term.termHt;
    default:
      return term.termEn;
  }
}

export function glossaryDefinition(term: GlossaryTerm, language: Language): string {
  switch (language) {
    case 'ru':
      return term.definitionRu;
    case 'es':
      return term.definitionEs;
    case 'pt':
      return term.definitionPt;
    case 'ht':
      return term.definitionHt;
    default:
      return term.definitionEn;
  }
}

export function glossarySearchText(term: GlossaryTerm, language: Language): string {
  return `${glossaryTermLabel(term, language)} ${glossaryDefinition(term, language)} ${term.id}`.toLowerCase();
}
