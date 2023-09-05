export interface IReward {
  top3LeaguePoint: Top3LeaguePoint[];
  topGWPoint: TopGwpoint[];
  topDonate: TopDonate;
  gameWeekWinnerReward: GameWeekWinnerReward[];
  top3H2H: Top3H2H[];
}

export interface Top3LeaguePoint {
  rank: number;
  topUserName: string;
  topUserFplName: string;
  data: number;
}

export interface TopGwpoint {
  rank: any;
  topUserName: string;
  topUserFplName: string;
  data: number;
}

export interface TopDonate {
  rank: number;
  topUserName: string;
  topUserFplName: string;
  data: number;
}

export interface GameWeekWinnerReward {
  rank: number;
  topUserName: string;
  topUserFplName: string;
  data: number;
}

export interface Top3H2H {
  rank: number;
  topUserName: string;
  topUserFplName: string;
  data: number;
}
