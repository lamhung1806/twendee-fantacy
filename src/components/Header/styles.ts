import { makeStyles, Theme } from "@material-ui/core/styles";
import { colors } from "common/styles/theme";
import bgImg from "assets/images/bg-header.svg";
import bgPlayer from "assets/images/player-comp.png";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: colors.purple,
  },
  wrapper: {
    background: `url(${bgImg})`,
    backgroundSize: "cover",
    margin: "auto",
  },
  player: {
    background: `url(${bgPlayer})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPositionX: "right",
    maxWidth: 1220,
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      background: "none",
    },
  },
  gameTitle: {
    color: colors.white,
    padding: "3rem 0px",
    fontSize: "3.5rem",
    textAlign: "left",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
      padding: "1rem",
    },
  },
}));
export default useStyles;
