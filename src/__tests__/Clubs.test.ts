import { createClub, createClubs } from "../endpoints/clubs";
import testData from "./data/clubs.json";

test("Clubs Test", () => {
  const clubs = createClubs(testData);
  expect(clubs).toEqual([
    {
      id: 2,
      name: "Ankarsrums OK"
    },
    {
      id: 3,
      name: "Bodafors OK"
    },
    {
      id: 4,
      name: "Burseryds IF"
    },
    {
      id: 1,
      name: "Degerfors OK"
    }
  ]);
});

test("Club Valid Test", () => {
  const clubs = createClubs(testData);
  const club = createClub(clubs, 3);
  expect(club).toEqual({
    id: 3,
    name: "Bodafors OK"
  });
});

test("Club Valid Test", () => {
  const clubs = createClubs(testData);
  const club = createClub(clubs, 99);
  expect(club).toEqual({
    id: 888888888,
    name: "Vacant"
  });
});
