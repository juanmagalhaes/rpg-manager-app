// @flow
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { ACCENT, PRIMARY } from "~/styles/constants";

export default getMuiTheme({
  datePicker: {
    selectColor: ACCENT,
    headerColor: PRIMARY
  }
});
