// @flow

import { NEW_GAME } from "./constants";
import type { RouterInjectedProps } from "~/types/router";
import type { ThunkAction } from "~/types/redux";

export type GameData = {
  name: string,
  sumary: string,
  createdAt: ?Date
};

export type Game = GameData & { id: ?number };

export type NewGame = () => {
  type: typeof NEW_GAME
};

export type FieldValue = { field: string, value: string | ?Date };

export type ChangeGame = (
  fieldValue: FieldValue
) => {
  type: typeof NEW_GAME,
  payload: FieldValue
};

export type GetGame = (id: number) => ThunkAction;
export type SaveGame = (game: GameData) => ThunkAction;
export type UpdateGame = (game: GameData, id: number) => ThunkAction;
export type DeleteGame = (id: number) => ThunkAction;

export type GameManagerProps = RouterInjectedProps & {
  game: Game,
  getGame: GetGame,
  newGame: NewGame,
  saveGame: SaveGame,
  updateGame: UpdateGame,
  deleteGame: DeleteGame,
  changeGame: ChangeGame
};

export type State = {
  game: Game,
  error: boolean,
  loading: boolean
};

export type SaveGameActionTypes =
  | { type: "SAVE_GAME_PENDING" }
  | { type: "SAVE_GAME_SUCCESS" }
  | { type: "SAVE_GAME_FAILURE" };

export type UpdateGameActionTypes =
  | { type: "UPDATE_GAME_PENDING" }
  | { type: "UPDATE_GAME_SUCCESS" }
  | { type: "UPDATE_GAME_FAILURE" };

export type DeleteGameActionTypes =
  | { type: "DELETE_GAME_PENDING" }
  | { type: "DELETE_GAME_SUCCESS" }
  | { type: "DELETE_GAME_FAILURE" };

export type FetchGameActionTypes =
  | { type: "FETCH_GAME_PENDING" }
  | { type: "FETCH_GAME_SUCCESS" }
  | { type: "FETCH_GAME_FAILURE" };

export type Payload = FieldValue | empty; // TODO Add Game to this typecheck

export type ChangeFormAction = { type: "CHANGE_GAME_FORM", payload: Payload };
export type NewGrmeAction = { type: "NEW_GAME", payload: Payload };
export type SaveGameAction = { type: SaveGameActionTypes, payload: Payload };
export type UpdateGameAction = {
  type: UpdateGameActionTypes,
  payload: Payload
};
export type FetchGameAction = { type: FetchGameActionTypes, payload: Payload };
export type DeleteGameAction = {
  type: DeleteGameActionTypes,
  payload: Payload
};

export type Action =
  | ChangeFormAction
  | NewGrmeAction
  | SaveGameAction
  | UpdateGameAction
  | FetchGameAction
  | DeleteGameAction;
