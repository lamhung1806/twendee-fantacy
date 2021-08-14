import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Chart from "react-google-charts";

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Chart
            // width={"100%"}
            height={"500px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Money", "Total money"],
              ["Erik", 11],
              ["Cris", 11],
              ["Tu Anh", 2],
              ["Thang", 7],
              ["Hoc", 2],
              ["Phong", 2],
            ]}
            options={{
              title: "Total contribution money",
            }}
          />
        </Grid>
        <Grid item xs={6} className={classes.barChart}>
          <Chart
            // width={"500px"}
            height={"300px"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ["", "Erik", "Cris", "Tu Anh", "Thang", "Hoc", "Phong"],
              ["GW1", 10000, 20000, 30000, 40000, 0, 0],
              ["GW2", 0, 0, 10000, 20000, 30000, 40000],
              ["GW3", 10000, 0, 20000, 30000, 40000, 0],
              ["GW4", 0, 40000, 30000, 20000, 0, 10000],
              ["GW5", 10000, 10000, 10000, 20000, 0, 0],
            ]}
            options={{
              // Material design options
              chart: {
                // title: "Company Performance",
                // subtitle: "Sales, Expenses, and Profit: 2014-2017",
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
