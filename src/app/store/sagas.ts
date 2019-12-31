import { takeEvery, fork, all } from 'redux-saga/effects';
import { API_CALL_ERROR } from './action';
import { AppInjector } from '../app-injector';

function* watchApiCallError() {
  yield takeEvery(API_CALL_ERROR, function*(action) {
    AppInjector.get('Loader').hide();
    if ((action as any).error !== undefined) {
      if ((action as any).error.error !== undefined && (action as any).error.error.message !== undefined) {
        console.log((action as any).error.error.message);
      }
    }
  });
}

export default function* sagas() {
  yield all([watchApiCallError].map(item => fork(item)));
}
