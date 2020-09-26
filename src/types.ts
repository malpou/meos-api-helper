export type CompetitionInfo = {
  name: string;
  organizer: string;
  date: OwnDate;
};

export type OwnDate = {
  year: number;
  month: number;
  day: number;
};
