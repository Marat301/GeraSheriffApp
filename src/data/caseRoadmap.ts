export type CaseRoadmapStep = {
  id: string;
  labelEn: string;
  labelRu: string;
  glossaryId: string;
};

/** Typical Florida criminal case path — educational overview only. */
export const caseRoadmapSteps: CaseRoadmapStep[] = [
  { id: 'arrest', labelEn: 'Arrest', labelRu: 'Arrest (арест)', glossaryId: 'arrest' },
  { id: 'booking', labelEn: 'Booking', labelRu: 'Booking (оформление)', glossaryId: 'booking' },
  { id: 'bond', labelEn: 'Bond', labelRu: 'Bond (залог)', glossaryId: 'bail-bond' },
  {
    id: 'arraignment',
    labelEn: 'Arraignment',
    labelRu: 'Arraignment (предъявление обвинения)',
    glossaryId: 'arraignment',
  },
  {
    id: 'discovery',
    labelEn: 'Discovery',
    labelRu: 'Discovery (раскрытие доказательств)',
    glossaryId: 'discovery',
  },
  {
    id: 'pretrial-motions',
    labelEn: 'Pretrial Motions',
    labelRu: 'Pretrial Motions (ходатайства)',
    glossaryId: 'pretrial-motions',
  },
  { id: 'trial', labelEn: 'Trial', labelRu: 'Trial (суд)', glossaryId: 'trial' },
  {
    id: 'sentencing',
    labelEn: 'Sentencing',
    labelRu: 'Sentencing (наказание)',
    glossaryId: 'sentence',
  },
  { id: 'appeal', labelEn: 'Appeal', labelRu: 'Appeal (апелляция)', glossaryId: 'appeal' },
];

/** Statewide Florida court / clerk portals */
export const CLERK_OF_COURTS_URL = 'https://www.flclerks.com/';
export const MY_FL_COURT_ACCESS_URL = 'https://www.myflcourtaccess.com/';
