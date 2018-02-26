import React from "react";
import { Dashboard } from "../Dashboard";

const props = {
  charactersByGame: [{ gameId: 1 }, { gameId: 2 }, { gameId: 3 }, { gameId: 4 }]
};

test("Dashboard", () => {
  const spy = jest.fn();
  const component = shallow(<Dashboard {...props} getDashboardData={spy} />);
  expect(component).toMatchSnapshot();
  expect(spy).toHaveBeenCalled();
});
