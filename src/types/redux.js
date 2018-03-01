// @flow

import type {
  Action as DashboardAction,
  State as DashboardState
} from "~/components/Dashboard";
import type {
  Action as GameManagerAction,
  State as GameManagerState
} from "~/components/GameManager";

export type State = DashboardAction | GameManagerAction;

export type Action = DashboardState | GameManagerState;

/* eslint-disable no-use-before-define */

export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;

/* eslint-enable no-use-before-define */
