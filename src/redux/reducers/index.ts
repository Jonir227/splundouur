import { combineReducers } from 'redux';
import global, { IGlobalStore } from './globalStore';

export interface IRootStore {
  global: IGlobalStore;
}

const rootReducers = combineReducers({ global });

export default rootReducers;
