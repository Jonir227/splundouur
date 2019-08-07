import { take } from 'redux-saga/effects';

function* rootSaga() {
  while (true) {
    yield take();
  }
}

export default rootSaga;
