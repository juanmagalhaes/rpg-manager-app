import React from "react";
import Game from "./Game";

test("Game", () => expect(shallow(<Game />)).toMatchSnapshot());
