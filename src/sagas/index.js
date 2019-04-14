import {
  all,
} from 'redux-saga/effects';

import getTokenSaga from './getToken';
import getProductsSaga from './getProducts';


export default function* rootSaga() {
  yield all([
    ...getTokenSaga,
    ...getProductsSaga,
  ]);
}
