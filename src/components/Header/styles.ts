import { makeStyles, Theme } from "@material-ui/core/styles";
import { colors } from "common/styles/theme";
import bgImg from "assets/images/bg-header.png";
import bgPlayer from "assets/images/player-comp.png";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // backgroundColor: colors.purple,
  },
  wrapper: {
    margin: "auto",
    backgroundImage: `url(${bgImg}), url(/static/media/pattern-2-d.0a64c7c7.png), linear-gradient(to right, rgb(2, 239, 255), rgb(98, 123, 255))`,
    backgroundPosition: "50% -460px, right -73px bottom -24px, 0px center",
    backgroundSize: "618px 873px, 618px 873px, auto",
    backgroundRepeat: "no-repeat",
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
