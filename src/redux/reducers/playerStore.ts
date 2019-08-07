import { PlayerModel } from '../../model';
import produce from 'immer';

export interface IPlayerStore {
  palyers: PlayerModel[];
  currentPlayer: PlayerModel | null;
}

const defaultState: IPlayerStore = {
  palyers: [],
  currentPlayer: null,
};

const playerStore = produce((draft: IPlayerStore, action: any) => draft, defaultState);

export default playerStore;
