import { makeStyles } from "@material-ui/core/styles";
import { colors } from "common/styles/theme";

const useStyles = makeStyles({
  container: {
    margin: "auto",
    maxWidth: 1220,
  },
  table: {
    margin: "20px 0",
  },
  tableHead: {
    backgroundColor: colors.lightGray,
  },
  team: {
    color: colors.red,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  manager: {
    color: colors.black,
  },
});
export default useStyles;
