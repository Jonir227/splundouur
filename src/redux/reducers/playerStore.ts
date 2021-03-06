import { PlayerModel } from '../../model';
import produce from 'immer';
import shortid from 'shortid';
import { PlayerActions } from '../actions';
import { SET_PLAYER_NUMBER, SET_GAME_STATUS, SET_PLAYER_NAME, SET_PLAYER_IMG } from '../types';

interface IInGamePlayerModel extends PlayerModel {
  id: string;
}

export interface IPlayerStore {
  players: IInGamePlayerModel[];
  currentPlayer: IInGamePlayerModel | null;
}

const defaultPlayer = () => {
  const id = shortid.generate();
  return {
    id,
    name: `player [${id}]`,
    coins: { gold: 0, green: 0, black: 0, blue: 0, red: 0, white: 0 },
    owns: { green: [], black: [], blue: [], red: [], white: [] },
    img: `player image`,
  };
};

const defaultState = (): IPlayerStore => ({
  players: [defaultPlayer(), defaultPlayer()],
  currentPlayer: null,
});

const playerStore = produce((draft: IPlayerStore, action: PlayerActions) => {
  switch (action.type) {
    case SET_PLAYER_NUMBER: {
      const { payload } = action;
      if (draft.players.length < payload.num) {
        draft.players = [
          ...draft.players,
          ...new Array(payload.num - draft.players.length).fill(0).map(defaultPlayer),
        ];
      } else {
        draft.players.splice(payload.num);
      }
      return;
    }
    case SET_GAME_STATUS: {
      const { status } = action.payload;
      if (status === 'MAIN') {
        return defaultState();
      }
      return;
    }
    case SET_PLAYER_NAME: {
      const { index, name } = action.payload;
      draft.players[index].name = name;
      return;
    }
    case SET_PLAYER_IMG: {
      const { index, img } = action.payload;
      draft.players[index].img = img;
    }
  }
}, defaultState());

export default playerStore;
