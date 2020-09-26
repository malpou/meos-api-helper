import { parseString } from "xml2js";

export function getJSON(res: any): object {
  let returnValue = {};
  parseString(res.data, (err: unknown, result: object) => {
    returnValue = result;
  });
  return returnValue;
}
