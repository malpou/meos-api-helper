import { CompetitionInfo } from "../types";
import { getData } from "../fetch";

export async function getCompetetion(): Promise<CompetitionInfo> {
  return new Promise<CompetitionInfo>(async (resolve, reject) => {
    try {
      const data = await getData("http://localhost:2009/meos?get=competition");
      resolve(createCompetitionInfo(data));
    } catch (error) {
      reject(error);
    }
  });
}

export function createCompetitionInfo(data: any): CompetitionInfo {
  const date = data.MOPComplete.competition[0].$.date.split("-");
  return {
    name: data.MOPComplete.competition[0]._,
    organizer: data.MOPComplete.competition[0].$.organizer,
    date: {
      year: +date[0],
      month: +date[1],
      day: +date[2]
    }
  };
}
