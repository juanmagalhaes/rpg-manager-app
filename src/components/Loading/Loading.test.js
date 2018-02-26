import React from "react";
import Loading from "./Loading";

test("Loading", () => expect(shallow(<Loading />)).toMatchSnapshot());
