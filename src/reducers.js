// @flow

import { combineReducers } from "redux";
import { dashboardReducer as dashboard } from "~/components/Dashboard";
import { gameManagerReducer as gameManager } from "~/components/GameManager";

export default combineReducers({
  dashboard,
  gameManager
});
