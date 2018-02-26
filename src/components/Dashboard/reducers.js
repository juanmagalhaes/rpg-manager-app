// @flow

import {
  FETCH_DASHBOARD_DATA_PENDING,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE
} from "./constants";
import type { State, Action } from "./types";

export const initialState: State = {
  charactersByGame: [],
  error: false,
  loading: false
};

function reducer(state: State = initialState, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DASHBOARD_DATA_PENDING:
      return {
        ...state,
        error: false,
        loading: true
      };
    case FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        charactersByGame: payload
      };
    case FETCH_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
}

export default reducer;
