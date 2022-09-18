import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useState, useEffect, useMemo } from "react";
import { LeagueItem } from "types/leagueTable";
import useStyles from "./styles";
import api from "api";
import { ApiEndpointsEnum } from "enums/apis";
import Chart from "react-google-charts";
import { Grid } from "@material-ui/core";

export default function LeagueTables() {
  const classes = useStyles();
  const [rows, setRows] = useState<Array<LeagueItem>>([]);

  const fetchLeagueTables = async () => {
    try {
      const res = await api.get(ApiEndpointsEnum.GET_LEAGUE_TABLES);
      setRows(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchLeagueTables();
  }, []);
  const formatter = useMemo(() => {
    return new Intl.NumberFormat("vi");
  }, []);
  const dataPieChart = useMemo(() => {
    const gameWeekTablesSorted = [...rows];
    const listPlayerOrderById = gameWeekTablesSorted.sort(function (a, b) {
      return a.id - b.id;
    });

    return [
      ["Player", "Total money"],
      ...listPlayerOrderById.map((e) => [
        e.name,
        e.h2hMoney + e.money < 0 ? -1 * (e.h2hMoney + e.money) : 0,
      ]),
    ];
  }, [rows]);
  return (
    <div className={classes.container}>
      <Grid container justifyContent="center">
        <Chart
          width={"100%"}
          height={"500px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={dataPieChart}
          options={{
            title: "Total contribution money",
          }}
        />
      </Grid>

      <Table className={classes.table} aria-label="h2h table" size="small">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>{`Team & Manager`}</TableCell>
            <TableCell align="center">Point</TableCell>
            <TableCell align="right">Money</TableCell>
            <TableCell align="center">Voucher</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.position}
              </TableCell>
              <TableCell>
                <a
                  className={classes.team}
                  target="_blank"
                  rel="noreferrer"
                  href={`https://fantasy.premierleague.com/entry/${row.fplId}/history`}
                >
                  {row.fplName}
                </a>
                <p className={classes.manager}>{row.name}</p>
              </TableCell>
              <TableCell align="center">{row.point}</TableCell>
              <TableCell align="right">{formatter.format(row.money)}</TableCell>
              <TableCell align="center">{row.voucher}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
