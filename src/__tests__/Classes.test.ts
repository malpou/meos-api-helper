import { createClassList } from "../endpoints/classes";
import testData from "./data/classList.json";

test("Create Classlist", () => {
  const result = createClassList(testData);
  expect(result).toEqual([
    {
      id: 1,
      name: "Åben 1",
      radios: ["50", "150", "100"]
    },
    {
      id: 2,
      name: "Åben 2",
      radios: ["50", "150", "100"]
    },
    {
      id: 3,
      name: "Åben 3",
      radios: ["50", "150", "100"]
    }
  ]);
});
