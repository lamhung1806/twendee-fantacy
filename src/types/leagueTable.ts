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
}

export interface GameWeekItem {
  id: number;
  team: Team;
  gameWeek: number;
  point: number;
  transfer: number;
  position: number;
  h2hRival: null;
  h2hWin: boolean;
  money: number;
}

export interface Team {
  id: number;
  name: string;
  fplName: string;
  fplId: number;
}
