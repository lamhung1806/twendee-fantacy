export interface LeagueItem {
  id: number;
  createdDate: string;
  lastModifiedDate: string;
  name: string;
  fplName: string;
  fplId: number;
  point: number;
  position: number;
  money: number;
  h2hMoney: number;
}

export interface GameWeekItem {
  id: number;
  team: Team;
  gameWeek: number;
  point: number;
  localPoint: number;
  transfer: number;
  position: number;
  h2hRival: null;
  h2hWin: boolean;
  money: number;
  h2hMoney: number;
  h2hPoint: number;
  bonusTransfer: number;
}

export interface Team {
  id: number;
  name: string;
  fplName: string;
  fplId: number;
}

export interface H2HItem {
  team1Name: string;
  team1Point: number;
  team1fplId: number;
  team1fplName: string;
  team2Name: string;
  team2Point: number;
  team2fplId: number;
  team2fplName: string;
}
