import { CompetitionInfo } from "../types";
// TODO
/*
todo: /meos?get=competition
*/
import { getData } from "../fetch";

export async function getCompetetion(): Promise<CompetitionInfo> {
  return new Promise<CompetitionInfo>(async (resolve, reject) => {
    try {
      const data = await getData("http://localhost:2009/meos?get=competition");
      const date = data.MOPComplete.competition[0].$.date.split("-");
      resolve({
        name: data.MOPComplete.competition[0]._,
        organizer: data.MOPComplete.competition[0].$.organizer,
        date: {
          year: +date[0],
          month: +date[1],
          day: +date[2]
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
