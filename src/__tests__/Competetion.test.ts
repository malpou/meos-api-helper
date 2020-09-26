import { Competetion } from "../index";

it("Competetion Test", () => {
  expect.assertions(1);
  return Competetion().then((data) =>
    expect(data).toEqual({
      name: "Eksempel på individuelt resultat",
      organizer: "Melin Software HB",
      date: {
        year: 2015,
        month: 4,
        day: 15
      }
    })
  );
});
