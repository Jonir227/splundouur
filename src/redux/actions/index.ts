import { StartGame, SetPlayerNumber, SetGameStatus } from './globalActions';
import { SetPlayerName, SetPlayerImg } from './playerActions';

export type GlobalActions = StartGame | SetPlayerNumber | SetGameStatus;
export type PlayerActions = SetPlayerNumber | SetGameStatus | SetPlayerName | SetPlayerImg;
