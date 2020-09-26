import { GetKey } from "../index";

it("Changes Get Key Test", () => {
  expect.assertions(1);
  return GetKey().then((data) => expect(data.length).toEqual(7));
});
