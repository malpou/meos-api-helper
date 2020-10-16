import { RunnerST } from "../types";
import { getData } from "../fetch";
import { Ms2Sec, Sec2Time, Time2Sec } from "meos-time-helper";

export async function getStartlist(cls: number): Promise<RunnerST[]> {
  return new Promise<RunnerST[]>(async (resolve, reject) => {
    try {
      const data = await getData(`http://localhost:2009/meos?get=competitor&class=${cls}`);
      resolve(createStartlist(data));
    } catch (err) {
      reject(err);
    }
  });
}

export function createStartlist(data: any): RunnerST[] {
  const runnerArr: RunnerST[] = [];
  data.MOPComplete.cmp.forEach((element: any) => {
    if (element.base[0]._ !== "Vakant") {
      runnerArr.push({
        id: +element.$.id,
        name: element.base[0]._,
        startTime: Sec2Time(Ms2Sec(element.base[0].$.st))
      } as RunnerST);
    }
  });

  runnerArr.sort((a, b) => Time2Sec(a.startTime) - Time2Sec(b.startTime));

  return runnerArr;
}
