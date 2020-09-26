import { createCompetitionInfo } from "../endpoints/competition";
import testData from "./data/competetion.json";

test("Competetion Test", () => {
  const result = createCompetitionInfo(testData);
  expect(result).toEqual({
    name: "Eksempel på individuelt resultat",
    organizer: "Melin Software HB",
    date: {
      year: 2015,
      month: 4,
      day: 15
    }
  });
});
