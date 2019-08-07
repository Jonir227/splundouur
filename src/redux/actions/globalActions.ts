import { START_GAME, SET_PLAYER_NUMBER } from '../types';

export const startGame = () => ({ type: START_GAME });
export type StartGame = ReturnType<typeof startGame>;

export const setPlayerNumber = (num: number) => ({ type: SET_PLAYER_NUMBER, payload: { num } });
export type SetPlayerNumber = ReturnType<typeof setPlayerNumber>;
