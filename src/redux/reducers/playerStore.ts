import { PlayerModel } from '../../model';
import produce from 'immer';
import shortid from 'shortid';
import { PlayerActions } from '../actions';
import { SET_PLAYER_NUMBER } from '../types';

export interface IPlayerStore {
  players: PlayerModel[];
  currentPlayer: PlayerModel | null;
}

const defaultPlayer = () => ({
  name: `player [${shortid.generate()}]`,
  coins: { gold: 0, green: 0, black: 0, blue: 0, red: 0, white: 0 },
  owns: { green: [], black: [], blue: [], red: [], white: [] },
});

const defaultState: IPlayerStore = {
  players: [defaultPlayer(), defaultPlayer()],
  currentPlayer: null,
};

const playerStore = produce((draft: IPlayerStore, action: PlayerActions) => {
  switch (action.type) {
    case SET_PLAYER_NUMBER: {
      const { payload } = action;
      if (draft.players.length < payload.num) {
        draft.players = [
          ...draft.players,
          ...new Array(payload.num - draft.players.length).fill(0).map(() => defaultPlayer()),
        ];
      } else {
        draft.players.splice(payload.num);
      }
      return;
    }
  }
}, defaultState);

export default playerStore;
