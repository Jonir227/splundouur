import { SET_PLAYER_NAME } from '../types';

export const setPlayerNamme = (index: number, name: string) => ({
  type: SET_PLAYER_NAME,
  payload: { index, name },
});
export type SetPlayerName = ReturnType<typeof setPlayerNamme>;
