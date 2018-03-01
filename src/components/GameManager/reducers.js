// @flow

import {
  NEW_GAME,
  CHANGE_GAME_FORM,
  FETCH_GAME,
  SAVE_GAME,
  UPDATE_GAME,
  DELETE_GAME
} from "./constants";
import type { State, Action } from "./types";

export const initialState: State = {
  game: {
    id: null,
    name: "",
    sumary: "",
    createdAt: null
  },
  error: false,
  loading: false
};

function reducer(state: State = initialState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case NEW_GAME:
      return {
        ...initialState
      };
    case CHANGE_GAME_FORM:
      return {
        ...state,
        game: {
          ...state.game,
          [payload.field]: payload.value
        }
      };
    case `${FETCH_GAME}_PENDING`:
      return {
        ...state,
        error: false,
        loading: true
      };
    case `${FETCH_GAME}_SUCCESS`:
      return {
        error: false,
        loading: false,
        game: payload
      };
    case `${FETCH_GAME}_FAILURE`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${SAVE_GAME}_PENDING`:
      return {
        ...state,
        error: false,
        loading: true
      };
    case `${SAVE_GAME}_SUCCESS`:
      return {
        error: false,
        loading: false,
        game: payload
      };
    case `${SAVE_GAME}_FAILURE`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${UPDATE_GAME}_PENDING`:
      return {
        ...state,
        error: false,
        loading: true
      };
    case `${UPDATE_GAME}_SUCCESS`:
      return {
        error: false,
        loading: false,
        game: payload
      };
    case `${UPDATE_GAME}_FAILURE`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${DELETE_GAME}_PENDING`:
      return {
        ...state,
        error: false,
        loading: true
      };
    case `${DELETE_GAME}_SUCCESS`:
      return { ...initialState };
    case `${DELETE_GAME}_FAILURE`:
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
