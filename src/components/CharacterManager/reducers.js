// @flow

import {
  NEW_CHARACTER,
  CHANGE_CHARACTER_FORM,
  CHANGE_CHARACTER_FORM_NESTED_LISTS,
  FETCH_CHARACTER,
  SAVE_CHARACTER,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_ABILITY,
  REMOVE_ABILITY
} from "./constants";
import type { State, Action } from "./types";

export const itemOrAbility = {
  name: "",
  description: ""
};

export const initialState: State = {
  character: {
    age: "",
    avatar: "",
    characterClass: "",
    gameId: null,
    healthPoints: 0,
    id: null,
    level: "",
    magicPoints: 0,
    name: "",
    player: "",
    race: "",
    items: [],
    abilities: []
  },
  error: false,
  loading: false
};

function reducer(state: State = initialState, action: Action) {
  let { type, payload } = action;
  switch (type) {
    case NEW_CHARACTER:
      return {
        ...initialState
      };
    case CHANGE_CHARACTER_FORM:
      return {
        ...state,
        character: {
          ...state.character,
          [payload.field]: payload.value
        }
      };
    case `${FETCH_CHARACTER}_PENDING`:
      return {
        ...state,
        error: false,
        loading: true
      };
    case `${FETCH_CHARACTER}_SUCCESS`:
      payload = {
        ...payload,
        gameId: payload.game
      };
      delete payload.game;
      return {
        error: false,
        loading: false,
        character: payload
      };
    case `${FETCH_CHARACTER}_FAILURE`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${SAVE_CHARACTER}_PENDING`:
      return {
        ...state,
        error: false,
        loading: true
      };
    case `${SAVE_CHARACTER}_SUCCESS`:
      payload = {
        ...payload,
        gameId: payload.game
      };
      delete payload.game;
      return {
        error: false,
        loading: false,
        character: payload
      };
    case `${SAVE_CHARACTER}_FAILURE`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${UPDATE_CHARACTER}_PENDING`:
      return {
        ...state,
        error: false,
        loading: true
      };
    case `${UPDATE_CHARACTER}_SUCCESS`:
      payload = {
        ...payload,
        gameId: payload.game
      };
      delete payload.game;
      return {
        error: false,
        loading: false,
        character: payload
      };
    case `${UPDATE_CHARACTER}_FAILURE`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${DELETE_CHARACTER}_PENDING`:
      return {
        ...state,
        error: false,
        loading: true
      };
    case `${DELETE_CHARACTER}_SUCCESS`:
      return { ...initialState };
    case `${DELETE_CHARACTER}_FAILURE`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case CHANGE_CHARACTER_FORM_NESTED_LISTS:
      return {
        ...state,
        character: {
          ...state.character,
          [payload.listType]: state.character[payload.listType].map(
            (item, idx) => {
              if (idx === payload.idx) {
                return {
                  ...state.character[payload.listType][idx],
                  [payload.field]: payload.value
                };
              }
              return item;
            }
          )
        }
      };
    case ADD_ITEM:
      return {
        ...state,
        character: {
          ...state.character,
          items: state.character.items.concat(itemOrAbility)
        }
      };
    case REMOVE_ITEM:
      return {
        ...state,
        character: {
          ...state.character,
          items: state.character.items.filter((_, idx) => idx !== payload)
        }
      };
    case ADD_ABILITY:
      return {
        ...state,
        character: {
          ...state.character,
          abilities: state.character.abilities.concat(itemOrAbility)
        }
      };
    case REMOVE_ABILITY:
      return {
        ...state,
        character: {
          ...state.character,
          abilities: state.character.abilities.filter(
            (_, idx) => idx !== payload
          )
        }
      };
    default:
      return state;
  }
}

export default reducer;
