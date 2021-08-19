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
    textTransform: "capitalize",
    boxShadow: "none",
    "&label": {
      justifyContent: "space-between",
    },
  },
  gameWeekTitle: {
    color: colors.black,
  },
  table: {
    margin: "20px 0",
  },
  tableHead: {
    backgroundColor: colors.lightGray,
  },
  team: {
    color: colors.red,
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  manager: {
    color: colors.black,
  },
  gameWeekComing: {
    margin: "10px auto",
    color: colors.red,
  },
  gwH2hTable: {
    width: 90,
  },
  teamPointH2hTable: {
    fontSize: 18,
    color: colors.white,
    backgroundColor: colors.purple,
  },
  leftTeamPointH2hTable: {
    paddingRight: 0,
    borderRight: "1px solid #fff",
  },
  rightTeamPointH2hTable: {
    paddingLeft: 0,
  },
  number: {
    fontSize: 16,
  },
});
export default useStyles;
