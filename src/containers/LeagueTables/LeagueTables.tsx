import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useState, useEffect } from "react";
import { LeagueItem } from "types/leagueTable";
import useStyles from "./styles";
import api from "api";
import { ApiEndpointsEnum } from "enums/apis";

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
  return (
    <div className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>{`Team & Manager`}</TableCell>
            <TableCell align="right">Point</TableCell>
            <TableCell align="right">Money</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.position}
              </TableCell>
              <TableCell>
                <p className={classes.team}>{row.fplName}</p>
                <p className={classes.manager}>{row.name}</p>
              </TableCell>
              <TableCell align="right">{row.point}</TableCell>
              <TableCell align="right">{row.money}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
