import { START_GAME } from '../types';

export const startGame = () => ({ type: START_GAME });
export type StartGame = ReturnType<typeof startGame>;
