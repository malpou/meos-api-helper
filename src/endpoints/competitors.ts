import { RunnerST } from "../types";
import { getData } from "../fetch";
import { Ms2Sec, Sec2Time, Time2Sec } from "meos-time-helper";
import { getClub } from "./clubs";

export async function getStartlist(cls: number): Promise<RunnerST[]> {
  return new Promise<RunnerST[]>(async (resolve, reject) => {
    try {
      const data = await getData(`http://localhost:2009/meos?get=competitor&class=${cls}`);
      resolve(await createStartlist(data));
    } catch (err) {
      reject(err);
    }
  });
}

export async function createStartlist(data: any): Promise<RunnerST[]> {
  return new Promise<RunnerST[]>(async (resolve) => {
    const runnerArr: RunnerST[] = [];
    const { cmp } = data.MOPComplete;
    for (const element of cmp) {
      if (element.base[0]._ !== "Vakant") {
        runnerArr.push({
          id: +element.$.id,
          name: element.base[0]._,
          category: +element.base[0].$.cls,
          club: await getClub(+element.base[0].$.org),
          startTime: Sec2Time(Ms2Sec(element.base[0].$.st))
        } as RunnerST);
      }
    }
    resolve(runnerArr.sort((a, b) => Time2Sec(a.startTime) - Time2Sec(b.startTime)));
  });
}
