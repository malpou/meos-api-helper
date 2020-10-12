import { createStartlist } from "../endpoints/competitors";
import { Runner } from "../types";
import dataStartlist from "./data/startlist.json";

test("Changes Zero", () => {
  const resStartList = createStartlist(dataStartlist);
  expect(resStartList).toEqual([
    {
      id: 21,
      name: "Albin Bergman",
      // TODO: implement club name
      // club: "Not workin at the moment"
      startTime: {
        hours: 20,
        minutes: 41,
        seconds: 40
      }
    },
    {
      id: 9,
      name: "Bo-Göran Persson",
      startTime: {
        hours: 20,
        minutes: 42,
        seconds: 20
      }
    },
    {
      id: 17,
      name: "Björn Carlsson",
      startTime: {
        hours: 20,
        minutes: 43,
        seconds: 30
      }
    },
    {
      id: 3,
      name: "Annelie Najvik",
      startTime: {
        hours: 20,
        minutes: 44,
        seconds: 20
      }
    }
  ] as Runner[]);
});
