import { createFistKey, createChanges } from "../endpoints/changes";
import dataZero from "./data/changesZero.json";
import dataNo from "./data/changesNo.json";
import dataOne from "./data/changesOne.json";
import dataMore from "./data/changesMore.json";

test("Changes Zero", () => {
  const resZero = createFistKey(dataZero);
  expect(resZero).toEqual("5612626");
});

test("No Changes", () => {
  const resNo = createChanges(dataNo, "4332456");
  expect(resNo).toEqual({
    updates: false
  });
});

test("One Change", () => {
  const resOne = createChanges(dataOne, "oldKey");
  expect(resOne).toEqual({
    updates: true,
    key: "6931186",
    runners: [
      {
        id: 35,
        name: "Leif Frisell",
        category: 2
      }
    ]
  });
});

test("More Changes", () => {
  const resMore = createChanges(dataMore, "oldKey");
  expect(resMore).toEqual({
    updates: true,
    key: "9529916",
    runners: [
      {
        id: 4,
        name: "Charlotte Olovsson",
        category: 1
      },
      {
        id: 35,
        name: "Leif Frisell",
        category: 2
      },
      {
        id: 41,
        name: "Leif Wallström",
        category: 3
      }
    ]
  });
});
