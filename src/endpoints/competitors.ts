import { Runner } from "../types";
import { getData } from "../fetch";
import { Ms2Sec, Sec2Time } from "meos-time-helper";

export async function getStartlist(cls: string): Promise<Runner[]> {
  return new Promise<Runner[]>(async (resolve, reject) => {
    try {
      const data = await getData(`http://localhost:2009/meos?get=competitor&class=${cls}`);
      resolve(createStartlist(data));
    } catch (err) {
      reject(err);
    }
  });
}

export function createStartlist(data: any): Runner[] {
  const runnerArr: Runner[] = [];
  data.MOPComplete.cmp.forEach((element: any) => {
    runnerArr.push({
      id: +element.$.id,
      name: element.base[0]._,
      startTime: Sec2Time(Ms2Sec(element.base[0].$.st))
    } as Runner);
  });
  return runnerArr;
}
