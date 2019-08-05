import { createStore as cs, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';
import rootSaga from './sagas';

const createStore = () => {
  const saga = createSagaMiddleware();
  const store = cs(rootReducers, applyMiddleware(saga));
  saga.run(rootSaga);
  return store;
};

export default createStore;
