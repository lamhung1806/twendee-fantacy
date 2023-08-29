import { makeStyles, Theme } from "@material-ui/core/styles";
import { colors } from "common/styles/theme";

const useStyles = makeStyles((theme: Theme) => ({
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

    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
  },
  gameWeekTitle: {
    color: colors.black,

    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
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
    display: "flex",
    alignItems: "center",
    gap: 8,
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

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
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
}));
export default useStyles;
