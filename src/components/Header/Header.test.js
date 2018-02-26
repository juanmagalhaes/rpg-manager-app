import React from "react";
import Header from "./Header";

test("Header", () => expect(shallow(<Header />)).toMatchSnapshot());
