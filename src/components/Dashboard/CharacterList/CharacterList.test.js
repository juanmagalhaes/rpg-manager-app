import React from "react";
import CharacterList from "./CharacterList";

const props = {
  characters: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
};

test("CharacterList", () =>
  expect(shallow(<CharacterList {...props} />)).toMatchSnapshot());
