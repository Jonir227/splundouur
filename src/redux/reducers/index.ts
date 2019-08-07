import { combineReducers } from 'redux';
import global, { IGlobalStore } from './globalStore';
import player, { IPlayerStore } from './playerStore';

export interface IRootStore {
  global: IGlobalStore;
  player: IPlayerStore;
}

const rootReducers = combineReducers({ global, player });

export default rootReducers;
