// @flow

import { createAction } from "redux-actions";
import { history } from "~/utils/browser";
import client from "~/api";
import {
  NEW_GAME,
  FETCH_GAME,
  SAVE_GAME,
  UPDATE_GAME,
  DELETE_GAME,
  CHANGE_GAME_FORM
} from "./constants";
import type { FieldValue } from "./types";

export function changeGame({ field, value }: FieldValue) {
  return {
    type: CHANGE_GAME_FORM,
    payload: { field, value }
  };
}

export function newGame() {
  return { type: NEW_GAME };
}

export const getGame = createAction(
  FETCH_GAME,
  async id => await client.getGame(id)
);

export const saveGame = createAction(SAVE_GAME, async game => {
  try {
    const { id } = await client.saveGame(game);
    history.push(`/game/${id}`);
    history.go();
  } catch (error) {
    console.error(error);
  }
});

export const updateGame = createAction(
  UPDATE_GAME,
  async (game, id) => await client.updateGame(id, game)
);

export const deleteGame = createAction(DELETE_GAME, async id => {
  await client.deleteGame(id);
  history.push("/dashboard");
  history.go();
});
