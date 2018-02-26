import { getDashboardData } from "../actions";
import { FETCH_DASHBOARD_DATA } from "../constants";

jest.mock("~/api", () => ({
  getCharacter: jest.fn()
}));

test("getDashboardData", () => {
  const { getCharacter } = require("~/api");
  const { payload, type } = getDashboardData();
  expect(getCharacter).toHaveBeenCalled();
  expect(type).toBe(FETCH_DASHBOARD_DATA);
  expect(payload).toBeInstanceOf(Promise);
});
