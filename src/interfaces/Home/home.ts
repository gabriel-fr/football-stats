export interface Country {
  code: string;
  flag: string;
  name: string;
}

export interface LeagueData {
  league: League;
  country: Country;
  seasons: Seasons;
}

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface Seasons {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: Coverage;
}

export interface Coverage {
  fixtures: Fixtures;
  injuries: boolean;
  odds: boolean;
  players: boolean;
  predictions: boolean;
  standings: boolean;
  top_assistis: boolean;
  top_cards: boolean;
  top_scores: boolean;
}

export interface Fixtures {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}
