import { Runner } from "../types";
import { getData } from "../fetch";
import { Ms2Sec, Sec2Time } from "meos-time-helper";

export async function getResult(cls: number): Promise<Runner[]> {
  return new Promise<Runner[]>(async (resolve, reject) => {
    try {
      const data = await getData(`http://localhost:2009/meos?get=result&class=${cls}`);
      resolve(createResult(data));
    } catch (err) {
      reject(err);
    }
  });
}

export async function getSplit(cls: number, control: number | string): Promise<Runner[]> {
  return new Promise<Runner[]>(async (resolve, reject) => {
    try {
      const data = await getData(`http://localhost:2009/meos?get=result&class=${cls}&to=${control}`);
      resolve(createResult(data));
    } catch (err) {
      reject(err);
    }
  });
}

export function createResult(data: any): Runner[] {
  const runnerArr: Runner[] = [];
  data.MOPComplete.results[0].person.forEach((element: any) => {
    runnerArr.push({
      id: +element.name[0].$.id,
      name: element.name[0]._,
      club: element.org[0]._,
      runTime: Sec2Time(Ms2Sec(element.$.rt))
    } as Runner);
  });
  return runnerArr;
}
