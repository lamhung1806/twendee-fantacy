import { makeStyles } from "@material-ui/core/styles";
import { colors } from "common/styles/theme";

const useStyles = makeStyles({
  container: {
    margin: "auto",
    maxWidth: 1220,
  },
  table: {},
  team: {
    color: colors.red,
  },
  manager: {
    color: colors.black,
  },
});
export default useStyles;
