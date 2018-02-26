// @flow

import Loadable from "react-loadable";
import Loading from "~/components/Loading";

export { default as dashboardReducer } from "./reducers";

export default Loadable({
  loader: () => import("./Dashboard"),
  loading: Loading
});
