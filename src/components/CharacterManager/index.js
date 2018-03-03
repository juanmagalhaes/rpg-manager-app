// @flow

import Loadable from "react-loadable";
import Loading from "~/components/Loading";

export { default as CharacterList } from "./CharacterList";
export { default as characterManagerReducer } from "./reducers";
export type { Character } from "./Character";

export default Loadable({
  loader: () => import("./CharacterManager"),
  loading: Loading
});

//export type { Character, Action, State } from "./types";
