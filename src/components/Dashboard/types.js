// @flow

import type { ThunkAction } from "~/types/redux";
import {
  FETCH_DASHBOARD_DATA_PENDING,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE
} from "./constants";
import type { Character } from "~/components/CharacterManager";

export type CharactersByGame = {
  gameId: number,
  gameName: string,
  characters: Array<Character>
};

export type FetchDashboardDataActionTypes =
  | { +type: typeof FETCH_DASHBOARD_DATA_PENDING }
  | { +type: typeof FETCH_DASHBOARD_DATA_SUCCESS }
  | { +type: typeof FETCH_DASHBOARD_DATA_FAILURE };

export type FetchDashboardDataAction = {
  payload: Array<CharactersByGame>
} & FetchDashboardDataActionTypes;

export type Action = FetchDashboardDataAction;

export type State = {
  error: boolean,
  loading: boolean,
  charactersByGame: Array<CharactersByGame>
};

export type GetDashboardData = () => ThunkAction;

export type Props = State & {
  getDashboardData: GetDashboardData
};
