// @flow

import Loadable from "react-loadable";
import Loading from "~/components/Loading";

export default Loadable({
  loader: () => import("./GameManager"),
  loading: Loading
});

export { default as gameManagerReducer } from "./reducers";
export type { Game, Action, State } from "./types";
