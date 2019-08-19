import { SET_PLAYER_NAME, SET_PLAYER_IMG } from '../types';

export const setPlayerNamme = (index: number, name: string) => ({
  type: SET_PLAYER_NAME,
  payload: { index, name },
});
export type SetPlayerName = ReturnType<typeof setPlayerNamme>;

export const setPlayerImg = (index: number, img: string) => ({
  type: SET_PLAYER_IMG,
  payload: { index, img },
});

export type SetPlayerImg = ReturnType<typeof setPlayerImg>;
