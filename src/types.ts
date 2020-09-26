export type Runner = {
  name: string;
  club: string;
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
  runners: Runner[];
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
