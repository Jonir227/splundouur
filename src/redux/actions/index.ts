import { StartGame, SetPlayerNumber, SetGameStatus } from './globalActions';
import { SetPlayerName } from './palyerActions';

export type GlobalActions = StartGame | SetPlayerNumber | SetGameStatus;
export type PlayerActions = SetPlayerNumber | SetGameStatus | SetPlayerName;
