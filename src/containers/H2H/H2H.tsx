import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withWidth,
  TableContainer,
} from "@material-ui/core";
import { useCallback, useState } from "react";
import useStyles from "./styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { GameWeekItem, H2HItem } from "types/leagueTable";
import { useEffect, useMemo } from "react";
import api from "api";
import { ApiEndpointsEnum } from "enums/apis";
import Chart from "react-google-charts";

const MAX_GAME_WEEK = 38;
interface H2HProps {
  width: string;
}
function H2H({ width }: H2HProps) {
  const classes = useStyles();
  const [gameweek, setGameweek] = useState(1);
  const [gameWeekTables, setGameWeekTables] = useState<Array<GameWeekItem>>([]);
  const [h2hResults, setH2HResults] = useState<Array<H2HItem>>([]);

  const previousGameWeek = () => {
    fetchGameWeekTable(gameweek - 1);
    setGameweek(gameweek - 1);
  };
  const nextGameWeek = () => {
    fetchGameWeekTable(gameweek + 1);
    setGameweek(gameweek + 1);
  };

  const fetchGameWeekTable = async (gameWeekNo: number) => {
    try {
      const res = await api.get(ApiEndpointsEnum.GET_GAME_WEEK_RESULT, {
        params: {
          gameWeek: gameWeekNo,
        },
      });
      setGameWeekTables(res?.data?.gameWeekResultDTOList);
      setH2HResults(res?.data?.h2HDTOList);
    } catch (error) {}
  };
  const getCurrentGameweek = useCallback(async () => {
    try {
      const res = await api.get(ApiEndpointsEnum.GET_CURRENT_GAMEWEEK);
      if (res) {
        setGameweek(res.data);
        fetchGameWeekTable(res.data);
      }
    } catch (error) {}
  }, []);
  useEffect(() => {
    getCurrentGameweek();
  }, [getCurrentGameweek]);

  const isEmptyGameWeekData = useMemo(
    () => gameWeekTables?.length === 0,
    [gameWeekTables]
  );
  const formatter = useMemo(() => {
    return new Intl.NumberFormat("vi");
  }, []);

  const dataPieChart = useMemo(() => {
    const gameWeekTablesSorted = [...gameWeekTables];
    const listPlayerOrderById = gameWeekTablesSorted.sort(function (a, b) {
      return a.team.id - b.team.id;
    });

    return [
      ["Player", "Total money"],
      ...listPlayerOrderById.map((e) => [
        e.team.name,
        e.h2hMoney + e.money < 0 ? -1 * (e.h2hMoney + e.money) : 0,
      ]),
    ];
  }, [gameWeekTables]);

  const isMobileScreen = useMemo(() => {
    return width === "sm";
  }, [width]);
  return (
    <div className={classes.container}>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="default"
            startIcon={<ArrowBackIcon />}
            className={classes.button}
            disabled={gameweek <= 1}
            onClick={previousGameWeek}
          >
            Previous
          </Button>
        </Grid>
        <Grid item xs={4}>
          <h2 className={classes.gameWeekTitle}>{`Game week ${gameweek}`}</h2>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="default"
            endIcon={<ArrowForwardIcon />}
            className={classes.button}
            disabled={gameweek === MAX_GAME_WEEK}
            onClick={nextGameWeek}
          >
            Next
          </Button>
        </Grid>
      </Grid>
      {isEmptyGameWeekData ? (
        <div className={classes.gameWeekComing}>Game week is coming</div>
      ) : (
        <div>
          {/* H2H Table */}
          <Grid
            container
            spacing={3}
            direction={isMobileScreen ? "column" : "row"}
          >
            <Grid item lg={6}>
              <Chart
                width={"100%"}
                height={isMobileScreen ? "300px" : "400px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={dataPieChart}
                options={{
                  title: "Total contribution money",
                }}
              />
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
              <Table
                className={classes.table}
                aria-label="h2h table"
                size="small"
              >
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell align="left">Team</TableCell>
                    {/* <TableCell align="center"></TableCell> */}
                    <TableCell align="left">Point</TableCell>
                    {/* <TableCell align="left">Team</TableCell> */}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {h2hResults.map((h2hItem, index) => (
                    <TableRow key={index}>
                      <TableCell align="left">
                        <a
                          className={classes.team}
                          target="_blank"
                          rel="noreferrer"
                          href={`https://fantasy.premierleague.com/entry/${h2hItem.team1fplId}/event/${gameweek}`}
                        >
                          {h2hItem.team1fplName}
                        </a>
                        <p className={classes.manager}>{h2hItem.team1Name}</p>
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.leftTeamPointH2hTable}
                      >
                        <div className={classes.teamPointH2hTable}>
                          {h2hItem.team1Point}
                        </div>
                      </TableCell>
                      {/* <TableCell
                        align="center"
                        className={classes.rightTeamPointH2hTable}
                      >
                        <div className={classes.teamPointH2hTable}>
                          {h2hItem.team2Point}
                        </div>
                      </TableCell>
                      <TableCell align="left">
                        <a
                          className={classes.team}
                          target="_blank"
                          rel="noreferrer"
                          href={`https://fantasy.premierleague.com/entry/${h2hItem.team2fplId}/event/${gameweek}`}
                        >
                          {h2hItem.team2fplName}
                        </a>
                        <p className={classes.manager}>{h2hItem.team2Name}</p>
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Grid>

          <TableContainer>
            <Table
              className={classes.table}
              aria-label="simple table"
              size="small"
            >
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell>{`Team & Manager`}</TableCell>
                  <TableCell align="center">Transfer made</TableCell>
                  <TableCell align="center">Transfer bonus</TableCell>
                  <TableCell align="center">Classic point</TableCell>
                  {/* <TableCell align="center">H2H point</TableCell> */}
                  <TableCell align="center">Ranking point</TableCell>
                  <TableCell align="center">Classic money</TableCell>
                  {/* <TableCell align="center">H2H money</TableCell> */}
                  <TableCell align="center">Sum</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {gameWeekTables.map((gameweekItem, index) => (
                  <TableRow key={index}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.number}
                    >
                      {gameweekItem.position}
                    </TableCell>
                    <TableCell>
                      <a
                        className={classes.team}
                        target="_blank"
                        rel="noreferrer"
                        href={`https://fantasy.premierleague.com/entry/${gameweekItem.team.fplId}/event/${gameweek}`}
                      >
                        {gameweekItem.team.fplName}
                      </a>
                      <p className={classes.manager}>
                        {gameweekItem.team.name}
                      </p>
                    </TableCell>
                    <TableCell align="center" className={classes.number}>
                      {gameweekItem.transfer}
                    </TableCell>
                    <TableCell align="center" className={classes.number}>
                      {gameweekItem.bonusTransfer}
                    </TableCell>
                    <TableCell align="center" className={classes.number}>
                      {gameweekItem.point}
                    </TableCell>
                    {/* <TableCell align="center" className={classes.number}>
                      {gameweekItem.h2hPoint}
                    </TableCell> */}
                    <TableCell align="center" className={classes.number}>
                      {gameweekItem.localPoint}
                    </TableCell>
                    <TableCell align="center" className={classes.number}>
                      {formatter.format(gameweekItem.money)}
                    </TableCell>
                    {/* <TableCell align="center" className={classes.number}>
                      {formatter.format(gameweekItem.h2hMoney)}
                    </TableCell> */}
                    <TableCell align="center" className={classes.number}>
                      {formatter.format(gameweekItem.money)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}

export default withWidth()(H2H);
