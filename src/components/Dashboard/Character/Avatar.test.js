import React from "react";
import Avatar from "./Avatar";

test("Default Avatar", () => expect(shallow(<Avatar />)).toMatchSnapshot());
test("Avatar", () =>
  expect(shallow(<Avatar src="someAvatar.png" />)).toMatchSnapshot());
