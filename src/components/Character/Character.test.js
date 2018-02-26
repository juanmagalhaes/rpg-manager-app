import React from "react";
import Character from "./Character";

const character = {
  age: 10,
  avatar: "http://path-to-avatar",
  className: "Rogue",
  gameId: 1,
  healthPoints: 200,
  id: 1,
  level: 20,
  magicPoints: 50,
  name: "Batman",
  player: "Bruce Waine",
  race: "Human"
};

test("Character", () =>
  expect(shallow(<Character {...character} />)).toMatchSnapshot());
