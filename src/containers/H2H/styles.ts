import { makeStyles } from "@material-ui/core/styles";
import { colors } from "common/styles/theme";

const useStyles = makeStyles({
  container: {
    margin: "auto",
    maxWidth: 1220,
    paddingTop: 20,
  },
  button: {
    width: 200,
  },
  gameWeekTitle: {
    color: colors.black,
  },
  table: {},
  team: {
    color: colors.red,
  },
  manager: {
    color: colors.black,
  },
  gameWeekComing: {
    margin: "10px auto",
    color: colors.red,
  },
});
export default useStyles;
