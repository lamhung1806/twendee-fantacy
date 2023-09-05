import { makeStyles } from "@material-ui/core/styles";
import { colors } from "common/styles/theme";
export const useStyles = makeStyles({
  container: {
    textAlign: "left",
    paddingTop: 20,
    maxWidth: 1220,
  },

  label: {
    color: "#3c002e",
  },

  content: {
    marginTop: 24,
  },

  list: {
    marginTop: 16,
    marginLeft: 32,
  },

  item: {
    marginBottom: 12,
    "&>div": {
      marginTop: 6,
    },
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
