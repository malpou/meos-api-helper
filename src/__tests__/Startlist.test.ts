import { createStartlist } from "../endpoints/competitors";
import { RunnerST } from "../types";
import dataStartlist from "./data/startlist.json";

test("Changes Zero", async () => {
  const resStartList = await createStartlist(dataStartlist);
  expect(resStartList).toEqual([
    {
      id: 21,
      name: "Albin Bergman",
      club: {
        id: 12,
        name: "Häverödals SK"
      },
      category: 1,
      startTime: {
        hours: 20,
        minutes: 41,
        seconds: 40
      }
    },
    {
      id: 9,
      name: "Bo-Göran Persson",
      club: {
        id: 15,
        name: "Kjula IF"
      },
      category: 1,
      startTime: {
        hours: 20,
        minutes: 42,
        seconds: 20
      }
    },
    {
      id: 17,
      name: "Björn Carlsson",
      club: {
        id: 5,
        name: "Domnarvets GOIF"
      },
      category: 1,
      startTime: {
        hours: 20,
        minutes: 43,
        seconds: 30
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
      startTime: {
        hours: 20,
        minutes: 44,
        seconds: 20
      }
    }
  ] as RunnerST[]);
});
