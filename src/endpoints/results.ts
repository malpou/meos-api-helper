import { RunnerRT } from "../types";
import { getData } from "../fetch";
import { Ms2Sec, Sec2Time } from "meos-time-helper";
import { getClub } from "./clubs";

export async function getResult(cls: number): Promise<RunnerRT[]> {
  return new Promise<RunnerRT[]>(async (resolve, reject) => {
    try {
      const data = await getData(`http://localhost:2009/meos?get=result&class=${cls}`);
      resolve(await createResult(data));
    } catch (err) {
      reject(err);
    }
  });
}

export async function getSplit(cls: number, control: number | string): Promise<RunnerRT[]> {
  return new Promise<RunnerRT[]>(async (resolve, reject) => {
    try {
      const data = await getData(`http://localhost:2009/meos?get=result&class=${cls}&to=${control}`);
      resolve(await createResult(data));
    } catch (err) {
      reject(err);
    }
  });
}

export async function createResult(data: any): Promise<RunnerRT[]> {
  const runnerArr: RunnerRT[] = [];
  const { person } = data.MOPComplete.results[0];
  for (const element of person) {
    runnerArr.push({
      id: +element.name[0].$.id,
      name: element.name[0]._,
      club: await getClub(+element.org[0].$.id),
      category: +element.$.cls,
      place: +element.$.place,
      runTime: Sec2Time(Ms2Sec(element.$.rt))
    } as RunnerRT);
  }
  return runnerArr;
}
