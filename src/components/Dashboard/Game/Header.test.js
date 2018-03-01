import React from "react";
import Header from "./Header";

const props = {
  gameId: 1,
  gameName: "Game of Thrones"
};

test("Header", () => expect(shallow(<Header {...props} />)).toMatchSnapshot());
