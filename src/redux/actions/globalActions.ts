import { START_GAME, SET_PLAYER_NUMBER, SET_GAME_STATUS } from '../types';
import { GameStatus } from '../reducers/globalStore';

export const startGame = () => ({ type: START_GAME });
export type StartGame = ReturnType<typeof startGame>;

export const setPlayerNumber = (num: number) => ({ type: SET_PLAYER_NUMBER, payload: { num } });
export type SetPlayerNumber = ReturnType<typeof setPlayerNumber>;

export const setGameStatus = (status: GameStatus) => ({
  type: SET_GAME_STATUS,
  payload: { status },
});
export type SetGameStatus = ReturnType<typeof setGameStatus>;
