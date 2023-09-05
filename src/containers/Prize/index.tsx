import { Container, Grid } from "@material-ui/core";
import api from "api";
import { ApiEndpointsEnum } from "enums/apis";
import { useEffect, useState } from "react";
import { IReward } from "types/rewards";
import { useStyles } from "./styles";

const formatCurrenct = (x?: number) => {
  return x?.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

function Prize() {
  const classes = useStyles();

  const [rewards, setRewards] = useState<IReward>();

  const fetchLeagueRewards = async () => {
    try {
      const res = await api.get(ApiEndpointsEnum.GET_REWARDS);
      setRewards(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchLeagueRewards();
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1 className={classes.label}>Prizes</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={classes.content}>
            <h3 className={classes.label}>
              1. Overall Prizes Twendee League 2023-2024
            </h3>
            <ul className={classes.list}>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p>1st Prize (1.000.000VND)</p>
                  <div>
                    <span
                      className={classes.team}
                    >{`${rewards?.top3LeaguePoint[0].topUserFplName} -  `}</span>
                    <span
                      className={classes.manager}
                    >{`(${rewards?.top3LeaguePoint[0].topUserName} - ${rewards?.top3LeaguePoint[0].data} point)`}</span>
                  </div>
                </div>
              </li>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p>Runner-up (500.000VND)</p>
                  <div>
                    <span
                      className={classes.team}
                    >{`${rewards?.top3LeaguePoint[1].topUserFplName} -  `}</span>
                    <span
                      className={classes.manager}
                    >{`(${rewards?.top3LeaguePoint[1].topUserName} - ${rewards?.top3LeaguePoint[1].data} point)`}</span>
                  </div>
                </div>
              </li>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p>3rd place (200.000VND)</p>
                  <div>
                    <span
                      className={classes.team}
                    >{`${rewards?.top3LeaguePoint[2].topUserFplName} -  `}</span>
                    <span
                      className={classes.manager}
                    >{`(${rewards?.top3LeaguePoint[2].topUserName} - ${rewards?.top3LeaguePoint[2].data} point)`}</span>
                  </div>
                </div>
              </li>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p> Highest score of 1 GW including season (200.000VND)</p>
                  {rewards?.topGWPoint.map(
                    ({ data, topUserFplName, topUserName }) => (
                      <div key={topUserFplName}>
                        <span
                          className={classes.team}
                        >{`${topUserFplName} -  `}</span>
                        <span
                          className={classes.manager}
                        >{`(${topUserName} - ${data} point)`}</span>
                      </div>
                    )
                  )}
                </div>
              </li>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p>Contribution Award (200.000VND)</p>
                  <div>
                    <span
                      style={{
                        color: "red",
                        fontWeight: 700,
                      }}
                      className={classes.team}
                    >{`${rewards?.topDonate?.topUserFplName} -  `}</span>
                    <span
                      style={{
                        color: "red",
                        fontWeight: 700,
                      }}
                      className={classes.manager}
                    >{`(${rewards?.topDonate?.topUserName}  ${formatCurrenct(
                      rewards?.topDonate?.data
                    )})`}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className={classes.content}>
            <h3 className={classes.label}>
              2. Overall Prizes Twendee H2H (23-24)
            </h3>
            <ul className={classes.list}>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p> 1st Prize (500.000VND)</p>
                  <div>
                    <span
                      className={classes.team}
                    >{`${rewards?.top3H2H[0].topUserFplName} -  `}</span>
                    <span
                      className={classes.manager}
                    >{`(${rewards?.top3H2H[0].topUserName} - ${rewards?.top3H2H[0].data} point)`}</span>
                  </div>
                </div>
              </li>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p> Runner-up (200.000VND)</p>
                  <div>
                    <span
                      className={classes.team}
                    >{`${rewards?.top3H2H[1].topUserFplName} -  `}</span>
                    <span
                      className={classes.manager}
                    >{`(${rewards?.top3H2H[1].topUserName} - ${rewards?.top3H2H[1].data} point)`}</span>
                  </div>
                </div>
              </li>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p> 3rd place (100.000VND)</p>
                  <div>
                    <span
                      className={classes.team}
                    >{`${rewards?.top3H2H[2].topUserFplName} -  `}</span>
                    <span
                      className={classes.manager}
                    >{`(${rewards?.top3H2H[2].topUserName} - ${rewards?.top3H2H[2].data} point)`}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={classes.content}>
            <h3 className={classes.label}>3. 1st per round 2023-2024</h3>
            <ul className={classes.list}>
              {rewards?.gameWeekWinnerReward.map(
                ({ data, topUserFplName, topUserName }, index) => (
                  <li className={classes.label} key={topUserFplName}>
                    <div className={classes.item}>
                      <p>Top {index + 1}</p>
                      <div>
                        <span
                          className={classes.team}
                        >{`${topUserFplName} -  `}</span>
                        <span
                          className={classes.manager}
                        >{`(${topUserName} - ${formatCurrenct(data)})`}</span>
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Prize;
