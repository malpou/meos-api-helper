// TODO

import { getData } from "../fetch";

/*
todo: /meos?difference=<nextdifference>
*/
export class Changes {
  static async getFirstKey(): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const data = await getData("http://localhost:2009/meos?difference=zero");
        resolve(data.MOPComplete.$.nextdifference);
      } catch (error) {
        reject(error);
      }
    });
  }
  /*
  async getChanges(key: string): Promise<Runner[]> {
    return new Promise<Runner[]>((resolve, reject) => {});
  }
  */
}
