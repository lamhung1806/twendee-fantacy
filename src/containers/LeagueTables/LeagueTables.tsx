import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useEffect, useState } from "react";
import { LeagueItem } from "types/leagueTable";
import useStyles from "./styles";

export default function LeagueTables() {
  const classes = useStyles();
  const [rows, setRows] = useState<Array<LeagueItem>>([]);
  useEffect(() => {
    setRows([
      { gwPoint: 81, manager: "Cris2163", team: "Hung CR", total: 1992 },
      { gwPoint: 81, manager: "Cris2163", team: "Hung CR", total: 1992 },
      { gwPoint: 81, manager: "Cris2163", team: "Hung CR", total: 1992 },
      { gwPoint: 81, manager: "Cris2163", team: "Hung CR", total: 1992 },
      { gwPoint: 81, manager: "Cris2163", team: "Hung CR", total: 1992 },
      { gwPoint: 81, manager: "Cris2163", team: "Hung CR", total: 1992 },
    ]);
  }, []);
  return (
    <div className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>{`Team & Manager`}</TableCell>
            <TableCell align="right">GW</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>
                <p className={classes.team}>{row.team}</p>
                <p className={classes.manager}>{row.manager}</p>
              </TableCell>
              <TableCell align="right">{row.gwPoint}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
