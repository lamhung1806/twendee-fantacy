import NavBar from "components/NavBar";
import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.player}>
          <h1 className={classes.gameTitle}>Twendee Fantasy EPL</h1>
          <NavBar />
        </div>
      </div>
    </div>
  );
}
