import { PlayerModel } from '../../model';
import produce from 'immer';
import { GlobalActions } from '../actions';
import { START_GAME } from '../types';

// 게임 진행 상태
export type GameStatus = 'MAIN' | 'SETTING' | 'STARTED';

export interface IGlobalStore {
  gameStatus: GameStatus;
  numberOfPlayer: number;
  numberOfTurn: number;
}

const defaultState: IGlobalStore = {
  gameStatus: 'MAIN',
  numberOfPlayer: 0,
  numberOfTurn: 0,
};

const globalStore = produce((draft: IGlobalStore, action: GlobalActions) => {
  switch (action.type) {
    case START_GAME: {
      draft.gameStatus = 'SETTING';
      return;
    }
    default:
      return draft;
  }
}, defaultState);

export default globalStore;
