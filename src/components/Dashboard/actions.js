// @flow

import { createAction } from "redux-actions";
import client from "~/api";
import type { GetDashboardData } from "./types";
import { FETCH_DASHBOARD_DATA } from "./constants";

export const getDashboardData: GetDashboardData = createAction(
  FETCH_DASHBOARD_DATA,
  async () => await client.getCharacter()
);
