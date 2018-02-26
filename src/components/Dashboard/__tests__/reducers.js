import reducer, { initialState } from "../reducers";
import {
  FETCH_DASHBOARD_DATA_PENDING,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE
} from "../constants";

test("FETCH_DASHBOARD_DATA_PENDING", () => {
  const action = {
    type: FETCH_DASHBOARD_DATA_PENDING,
    payload: [1, 2, 3]
  };
  const newState = reducer(initialState, action);
  expect(newState).toEqual({
    error: false,
    loading: true,
    charactersByGame: []
  });
});

test("FETCH_DASHBOARD_DATA_SUCCESS", () => {
  const action = {
    type: FETCH_DASHBOARD_DATA_SUCCESS,
    payload: [1, 2, 3]
  };
  const newState = reducer(initialState, action);
  expect(newState).toEqual({
    error: false,
    loading: false,
    charactersByGame: [1, 2, 3]
  });
});

test("FETCH_DASHBOARD_DATA_FAILURE", () => {
  const action = {
    type: FETCH_DASHBOARD_DATA_FAILURE,
    payload: [1, 2, 3]
  };
  const newState = reducer(initialState, action);
  expect(newState).toEqual({
    error: true,
    loading: false,
    charactersByGame: []
  });
});
