import { createResult } from "../endpoints/results";
import { RunnerRT } from "../types";
import dataResult from "./data/results.json";

test("Changes Zero", async () => {
  const resResult = await createResult(dataResult);
  expect(resResult).toEqual([
    {
      id: 16,
      name: "Filip Johansson",
      club: {
        id: 9,
        name: "Hedesunda IF"
      },
      category: 1,
      place: 1,
      runTime: {
        hours: 1,
        minutes: 8,
        seconds: 12
      }
    },
    {
      id: 22,
      name: "Roger Thörnblom",
      club: {
        id: 15,
        name: "Kjula IF"
      },
      category: 1,
      place: 2,
      runTime: {
        hours: 1,
        minutes: 8,
        seconds: 38
      }
    },
    {
      id: 3,
      name: "Annelie Najvik",
      club: {
        id: 15,
        name: "Kjula IF"
      },
      category: 1,
      place: 3,
      runTime: {
        hours: 1,
        minutes: 9,
        seconds: 11
      }
    }
  ] as RunnerRT[]);
});
