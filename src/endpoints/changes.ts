import { Changes, Runner } from "../types";
import { getData } from "../fetch";

export async function getFirstKey(): Promise<string> {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const data = await getData("http://localhost:2009/meos?difference=zero");
      resolve(createFistKey(data));
    } catch (err) {
      reject(err);
    }
  });
}

export async function getChanges(key: string): Promise<Changes> {
  return new Promise<Changes>(async (resolve, reject) => {
    try {
      const data = await getData(`http://localhost:2009/meos?difference=${key}`);
      resolve(createChanges(data, key));
    } catch (err) {
      reject(err);
    }
  });
}

export function createFistKey(data: any): string {
  return data.MOPComplete.$.nextdifference;
}

export function createChanges(data: any, key: string): Changes {
  if (key !== data.MOPDiff.$.nextdifference) {
    const runnerArr = [] as Runner[];
    data.MOPDiff.cmp.forEach((element: any) => {
      runnerArr.push({
        id: +element.$.id,
        name: element.base[0]._,
        category: +element.base[0].$.cls
      } as Runner);
    });
    return {
      updates: true,
      key: data.MOPDiff.$.nextdifference,
      runners: runnerArr
    };
  }
  return {
    updates: false,
    runners: []
  };
}
