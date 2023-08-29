import { Container, Grid } from "@material-ui/core";
import api from "api";
import { useStyles } from "./styles";
import { ApiEndpointsEnum } from "enums/apis";
import { useEffect, useMemo, useState } from "react";
import { LeagueItem } from "types/leagueTable";

function Prize() {
  const classes = useStyles();

  const [members, setMembers] = useState<Array<LeagueItem>>([]);

  const fetchLeagueTables = async () => {
    try {
      const res = await api.get(ApiEndpointsEnum.GET_LEAGUE_TABLES);
      setMembers(res.data);
    } catch (error) {}
  };

  const [top1, top2, top3, top15] = useMemo(() => {
    const top1 = members.filter(({ position }) => position === 1);
    const top2 = members.filter(({ position }) => position === 2);
    const top3 = members.filter(({ position }) => position === 3);
    const top15 = members.filter(({ position }) => position === 15);

    return [top1, top2, top3, top15];
  }, [members]);

  useEffect(() => {
    fetchLeagueTables();
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <h1 className={classes.label}>Prizes</h1>
          <div className={classes.content}>
            <h3 className={classes.label}>
              1. Overall Prizes Twendee League 2023-2024
            </h3>
            <ul className={classes.list}>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p>1st Prize - 1.000.000VND</p>
                  <p>
                    {top1.map(({ fplName, name, point, fplId }) => (
                      <div>
                        <a
                          key={fplId}
                          className={classes.team}
                          target="_blank"
                          rel="noreferrer"
                          href={`https://fantasy.premierleague.com/entry/${fplId}/history`}
                        >{`${fplName} -  `}</a>
                        <span
                          className={classes.manager}
                        >{`(${name} - ${point} point)`}</span>
                      </div>
                    ))}
                  </p>
                </div>
              </li>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p>Runner-up - 500.000VND</p>
                  <p>
                    {top2.map(({ fplName, name, point, fplId }) => (
                      <div>
                        <a
                          key={fplId}
                          className={classes.team}
                          target="_blank"
                          rel="noreferrer"
                          href={`https://fantasy.premierleague.com/entry/${fplId}/history`}
                        >{`${fplName} -  `}</a>
                        <span
                          className={classes.manager}
                        >{`(${name} - ${point} point)`}</span>
                      </div>
                    ))}
                  </p>
                </div>
              </li>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p>3rd place - 200.000VND</p>
                  <p>
                    {top3.map(({ fplName, name, point, fplId }) => (
                      <div>
                        <a
                          key={fplId}
                          className={classes.team}
                          target="_blank"
                          rel="noreferrer"
                          href={`https://fantasy.premierleague.com/entry/${fplId}/history`}
                        >{`${fplName} -  `}</a>
                        <span
                          className={classes.manager}
                        >{`(${name} - ${point} point)`}</span>
                      </div>
                    ))}
                  </p>
                </div>
              </li>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p>Contribution Award - 200.000VND</p>
                  <p>
                    {top15.map(({ fplName, name, point, fplId }) => (
                      <div>
                        <a
                          key={fplId}
                          className={classes.team}
                          target="_blank"
                          rel="noreferrer"
                          href={`https://fantasy.premierleague.com/entry/${fplId}/history`}
                        >{`${fplName} -  `}</a>
                        <span
                          className={classes.manager}
                        >{`(${name} - ${point} point)`}</span>
                      </div>
                    ))}
                  </p>
                </div>
              </li>

              <li className={classes.label}>
                <div className={classes.item}>
                  <p>1st per round - 50.000VND</p>
                </div>
              </li>
              <li className={classes.label}>
                <div className={classes.item}>
                  <p> Highest score of 1 GW (including season): - 200.000VND</p>
                </div>
              </li>
            </ul>
          </div>

          <div className={classes.content}>
            <h3 className={classes.label}>
              2. Overall Prizes Twendee H2H (23-24)
            </h3>
            <ul className={classes.list}>
              <li className={classes.label}>1st Prize - 500.000VND</li>
              <li className={classes.label}>Runner-up - 200.000VND</li>
              <li className={classes.label}>3rd place - 100.000VND</li>
            </ul>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <h1 className={classes.label}>Rule</h1>
          <div className={classes.content}>
            <h3 className={classes.label}>1. Twendee League 2023-2024</h3>
            <ul className={classes.list}>
              <li className={classes.label}>
                9th to 15th place each round, fine 10.000VND - 70.000VND
              </li>
            </ul>
          </div>

          <div className={classes.content}>
            <h3 className={classes.label}>2. Twendee H2H (23-24)</h3>
            <ul className={classes.list}>
              <li className={classes.label}>-10.000VND for loser</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Prize;
