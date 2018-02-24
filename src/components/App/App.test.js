import React from "react";
import { App } from "~/components/App";

test("App", () => expect(shallow(<App />)).toMatchSnapshot());
