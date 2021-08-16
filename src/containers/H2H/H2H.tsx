import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { GameWeekItem } from "types/leagueTable";
import { useEffect, useMemo } from "react";
import api from "api";
import { ApiEndpointsEnum } from "enums/apis";

const MAX_GAME_WEEK = 38;
export default function H2H() {
  const classes = useStyles();

  const [gameweek, setGameweek] = useState(1);
  const [gameWeekTables, setGameWeekTables] = useState<Array<GameWeekItem>>([
    {
      id: 4,
      team: {
        id: 4,
        name: "Thắng",
        fplName: "Đứt Thắng",
        fplId: 153965,
      },
      gameWeek: 1,
      point: 85,
      transfer: 0,
      position: 1,
      h2hRival: null,
      h2hWin: false,
      money: 10000,
    },
    {
      id: 6,
      team: {
        id: 6,
        name: "Tú Anh",
        fplName: "[0]",
        fplId: 81998,
      },
      gameWeek: 1,
      point: 80,
      transfer: 0,
      position: 2,
      h2hRival: null,
      h2hWin: false,
      money: 0,
    },
    {
      id: 2,
      team: {
        id: 2,
        name: "Long",
        fplName: "Pending Moderation",
        fplId: 5508768,
      },
      gameWeek: 1,
      point: 79,
      transfer: 0,
      position: 3,
      h2hRival: null,
      h2hWin: false,
      money: 0,
    },
    {
      id: 1,
      team: {
        id: 1,
        name: "Hưng",
        fplName: "Cris",
        fplId: 40394,
      },
      gameWeek: 1,
      point: 78,
      transfer: 0,
      position: 4,
      h2hRival: null,
      h2hWin: false,
      money: -20000,
    },
    {
      id: 5,
      team: {
        id: 5,
        name: "Phong",
        fplName: "Nháp đến chết",
        fplId: 126063,
      },
      gameWeek: 1,
      point: 52,
      transfer: 0,
      position: 5,
      h2hRival: null,
      h2hWin: false,
      money: -30000,
    },
    {
      id: 3,
      team: {
        id: 3,
        name: "Học",
        fplName: "1st",
        fplId: 2681408,
      },
      gameWeek: 1,
      point: 42,
      transfer: 0,
      position: 6,
      h2hRival: null,
      h2hWin: false,
      money: -40000,
    },
  ]);

  const previousGameWeek = () => {
    setGameweek(gameweek - 1);
  };
  const nextGameWeek = () => {
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
    } catch (error) {}
  };

  useEffect(() => {
    fetchGameWeekTable(gameweek);
    return () => {
      setGameWeekTables([]);
    };
  }, [gameweek]);

  const isEmptyGameWeekData = useMemo(
    () => gameWeekTables?.length === 0,
    [gameWeekTables]
  );
  return (
    <div className={classes.container}>
      <Grid container alignItems="flex-end">
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
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>{`Team & Manager`}</TableCell>
              <TableCell align="center">Transfer used</TableCell>
              <TableCell align="center">Transfer bonus</TableCell>
              <TableCell align="center">Point</TableCell>
              <TableCell align="center">Classic money</TableCell>
              <TableCell align="center">H2H money</TableCell>
              <TableCell align="center">Total money</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {gameWeekTables.map((gameweek, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>
                  <p className={classes.team}>{gameweek.team.fplName}</p>
                  <p className={classes.manager}>{gameweek.team.name}</p>
                </TableCell>
                <TableCell align="center">{gameweek.transfer}</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">{gameweek.point}</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">
                  {gameweek.h2hWin ? 0 : 10000}
                </TableCell>
                <TableCell align="center">{gameweek.money}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
