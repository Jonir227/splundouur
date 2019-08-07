import produce from 'immer';
import { GlobalActions } from '../actions';
import { START_GAME, SET_PLAYER_NUMBER, SET_GAME_STATUS } from '../types';

// 게임 진행 상태
export type GameStatus = 'MAIN' | 'SETTING' | 'STARTED';

export interface IGlobalStore {
  gameStatus: GameStatus;
  numberOfPlayer: number;
  numberOfTurn: number;
}

const defaultState: IGlobalStore = {
  gameStatus: 'MAIN',
  numberOfPlayer: 2,
  numberOfTurn: 0,
};

const globalStore = produce((draft: IGlobalStore, action: GlobalActions) => {
  switch (action.type) {
    case START_GAME: {
      draft.gameStatus = 'SETTING';
      return;
    }
    case SET_GAME_STATUS: {
      const { status } = action.payload;
      if (status === 'MAIN') {
        return defaultState;
      } else {
        draft.gameStatus = status;
      }
      return;
    }
    case SET_PLAYER_NUMBER: {
      const { payload } = action;
      draft.numberOfPlayer = payload.num;
      return;
    }
    default:
      return draft;
  }
}, defaultState);

export default globalStore;
