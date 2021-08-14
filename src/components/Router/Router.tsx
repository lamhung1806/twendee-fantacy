import Dashboard from "containers/Dashboard/Dashboard";
import H2H from "containers/H2H";
import LeagueTables from "containers/LeagueTables";
import { RoutersEnum } from "enums/routers";
import { Redirect, Route, Switch } from "react-router-dom";

export default function Router() {
  return (
    <>
      <Switch>
        <Route path={RoutersEnum.DASHBOARD} component={Dashboard} />
        <Route path={RoutersEnum.H2H} component={H2H} />
        <Route path={RoutersEnum.LEAGUE_TABLE} component={LeagueTables} />
        <Redirect path="*" to={RoutersEnum.DASHBOARD} />
      </Switch>
    </>
  );
}
