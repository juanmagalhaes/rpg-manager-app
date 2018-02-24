// @flow

export type State = {};

export type Action = {};

/* eslint-disable no-use-before-define */

export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;

/* eslint-enable no-use-before-define */
