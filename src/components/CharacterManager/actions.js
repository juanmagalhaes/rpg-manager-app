// @flow

import { createAction } from "redux-actions";
import client from "~/api";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_ABILITY,
  REMOVE_ABILITY,
  NEW_CHARACTER,
  FETCH_CHARACTER,
  SAVE_CHARACTER,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
  CHANGE_CHARACTER_FORM,
  CHANGE_CHARACTER_FORM_NESTED_LISTS
} from "./constants";
import { history } from "~/utils/browser";
import type { FieldValue } from "./types";

export function changeCharacter({ field, value }: FieldValue) {
  return {
    type: CHANGE_CHARACTER_FORM,
    payload: { field, value }
  };
}

export function changeCharacterNestedlists(
  idx: number,
  listType: string,
  { field, value }: FieldValue
) {
  return {
    type: CHANGE_CHARACTER_FORM_NESTED_LISTS,
    payload: { idx, listType, field, value }
  };
}

export function newCharacter() {
  return { type: NEW_CHARACTER };
}

export function addItem() {
  return { type: ADD_ITEM };
}

export function removeItem(idx: number) {
  return { type: REMOVE_ITEM, payload: idx };
}

export function addAbility() {
  return { type: ADD_ABILITY };
}

export function removeAbility(idx: number) {
  return { type: REMOVE_ABILITY, payload: idx };
}

export const getCharacter = createAction(
  FETCH_CHARACTER,
  async id => await client.getCharacter(id)
);

export const saveCharacter = createAction(SAVE_CHARACTER, async character => {
  try {
    const result = await client.saveCharacter(character);
    history.push(`/game/${result.game}/character/${result.id}`);
    history.go();
    return result;
  } catch (error) {
    console.error(error);
  }
});

export const updateCharacter = createAction(
  UPDATE_CHARACTER,
  async (character, id) => {
    try {
      const result = await client.updateCharacter(id, character);
      history.push(`/game/${result.game}/character/${result.id}`);
      history.go();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteCharacter = createAction(DELETE_CHARACTER, async id => {
  await client.deleteCharacter(id);
  history.push("/dashboard");
  history.go();
});
