// @flow
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { COLOR1, COLOR3, COLOR4, COLOR5 } from "~/styles/constants";

export default getMuiTheme({
  datePicker: {
    selectColor: COLOR3,
    headerColor: COLOR1
  },
  tabs: {
    textColor: COLOR5,
    backgroundColor: COLOR1,
    selectedTextColor: COLOR4
  }
});
