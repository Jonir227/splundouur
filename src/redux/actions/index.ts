import { StartGame, SetPlayerNumber, SetGameStatus } from './globalActions';

export type GlobalActions = StartGame | SetPlayerNumber | SetGameStatus;
export type PlayerActions = SetPlayerNumber | SetGameStatus;
