import React from "react";
import Logo from "./Logo";

test("Logo", () => expect(shallow(<Logo />)).toMatchSnapshot());
