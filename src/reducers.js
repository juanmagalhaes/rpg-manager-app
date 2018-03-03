// @flow

import { combineReducers } from "redux";
import { dashboardReducer as dashboard } from "~/components/Dashboard";
import { characterManagerReducer as characterManager } from "~/components/CharacterManager";
import { gameManagerReducer as gameManager } from "~/components/GameManager";

export default combineReducers({
  dashboard,
  gameManager,
  characterManager
});
