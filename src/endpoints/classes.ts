// TODO
/*
todo: /meos?get=class
*/

import { getData } from "../fetch";
import { ClassInfo } from "../types";

export async function getClassList(): Promise<ClassInfo[]> {
  return new Promise<ClassInfo[]>(async (resolve, reject) => {
    try {
      const data = await getData("http://localhost:2009/meos?get=class");
      resolve(createClassList(data));
    } catch (error) {
      reject(error);
    }
  });
}

export function createClassList(data: any): ClassInfo[] {
  const classArr: ClassInfo[] = [];
  data.MOPComplete.cls.forEach((element: any) => {
    classArr.push({
      id: +element.$.id,
      name: element._,
      radios: element.$.radio.split(",")
    } as ClassInfo);
  });
  return classArr;
}
