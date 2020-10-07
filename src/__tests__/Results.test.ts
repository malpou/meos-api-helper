import { createResult } from "../endpoints/results";
import { Runner } from "../types";
import dataResult from "./data/results.json";

test("Changes Zero", () => {
  const resResult = createResult(dataResult);
  expect(resResult).toEqual([
    {
      id: 16,
      name: "Filip Johansson",
      club: "Hedesunda IF",
      runTime: {
        hours: 1,
        minutes: 8,
        seconds: 12
      }
    },
    {
      id: 22,
      name: "Roger Thörnblom",
      club: "Kjula IF",
      runTime: {
        hours: 1,
        minutes: 8,
        seconds: 38
      }
    },
    {
      id: 3,
      name: "Annelie Najvik",
      club: "Kjula IF",
      runTime: {
        hours: 1,
        minutes: 9,
        seconds: 11
      }
    }
  ] as Runner[]);
});
