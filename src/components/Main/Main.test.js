import React from "react";
import Main from "./Main";

test("Main", () => expect(shallow(<Main />)).toMatchSnapshot());
