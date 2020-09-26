export type Runner = {
  id: number;
  name: string;
  club?: string;
  category?: number;
  place?: number;
  startTime?: Time;
  runTime?: Time;
};

export type CompetitionInfo = {
  name: string;
  organizer: string;
  date: OwnDate;
};

export type Changes = {
  updates: boolean;
  key?: string;
  runners: Runner[] | [];
};

export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type OwnDate = {
  year: number;
  month: number;
  day: number;
};
