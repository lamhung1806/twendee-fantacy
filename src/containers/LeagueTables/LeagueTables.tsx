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
import useIsMobile from "containers/hooks/useIsMobile";

interface ILeagueTables {
  width: string;
}
export default function LeagueTables({ width }: ILeagueTables) {
  const classes = useStyles();

  const isMobile = useIsMobile();
  const [rows, setRows] = useState<Array<LeagueItem>>([]);
  const [dataGetTop, setGetDataTop] = useState<any[]>();

  const fetchLeagueTables = async () => {
    try {
      const res = await api.get(ApiEndpointsEnum.GET_LEAGUE_TABLES);
      setRows(res.data);
    } catch (error) {}
  };
  const fetchTopUser = async () => {
    try {
      const res = await api.get(ApiEndpointsEnum.GET_TOP_USER);
      setGetDataTop(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchLeagueTables();
    fetchTopUser();
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
      <Grid className={classes.chart} container>
        <Grid sm={12} justifyContent="center">
          <Chart
            width={"100%"}
            height={"450px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={dataPieChart}
            options={{
              title: "Total contribution money",
            }}
          />
          {dataGetTop && (
            <Grid
              className={`${
                isMobile ? classes.topUserMobile : classes.topUser
              }`}
              item
              justifyContent="center"
            >
              {isMobile ? (
                <div>
                  <div
                    className={
                      (classes.wrapTopPoint, classes.textTopUsermobile)
                    }
                  >
                    <p
                      className={classes.textTopUser}
                    >{`Top Game Week Point:`}</p>
                    <p
                      className={classes.textDetailTopPointMobile}
                    >{`${dataGetTop[0].topUserName}: ${dataGetTop[0].data}`}</p>
                  </div>

                  <div className={classes.textTopUsermobile}>
                    <p className={classes.textTopUser}>{`Top Money:`}</p>
                    <p
                      className={classes.textDetailTopMoneyMobile}
                    >{`${dataGetTop[1].topUserName}: ${dataGetTop[1].data}`}</p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className={classes.wrapTopPoint}>
                    <p
                      className={classes.textTopUser}
                    >{`Top Game Week Point:`}</p>
                    <p
                      className={classes.textDetailTopPoint}
                    >{`${dataGetTop[0].topUserName}: ${dataGetTop[0].data}`}</p>
                  </div>

                  <div>
                    <p className={classes.textTopUser}>{`Top Money:`}</p>
                    <p
                      className={classes.textDetailTopMoney}
                    >{`${dataGetTop[1].topUserName}: ${dataGetTop[1].data}`}</p>
                  </div>
                </div>
              )}
            </Grid>
          )}
        </Grid>
      </Grid>

      <Table className={classes.table} aria-label="h2h table" size="medium">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>{`Team & Manager`}</TableCell>
            <TableCell width="20px" align="center">
              Point
            </TableCell>
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
