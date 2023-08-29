import H2H from "containers/H2H";
import LeagueTables from "containers/LeagueTables";
import Prize from "containers/Prize";
import { RoutersEnum } from "enums/routers";
import { Redirect, Route, Switch } from "react-router-dom";

export default function Router() {
  return (
    <>
      <Switch>
        <Route path={RoutersEnum.LEAGUE_TABLE} component={LeagueTables} />
        <Route path={RoutersEnum.H2H} component={H2H} />
        <Route path={RoutersEnum.PRIZE} component={Prize} />
        <Redirect path="*" to={RoutersEnum.LEAGUE_TABLE} />
      </Switch>
    </>
  );
}
