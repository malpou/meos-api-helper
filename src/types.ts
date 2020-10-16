export type Runner = {
  id: number;
  name: string;
  club: Club;
  category: number;
};

export type RunnerST = Runner & {
  startTime: Time;
};

export type RunnerRT = Runner & {
  place: number;
  runTime: Time;
};

export type Club = {
  id: number;
  name: string;
};

export type ClassInfo = {
  id: number;
  name: string;
  radios: string[];
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
