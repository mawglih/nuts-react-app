import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_FAILURE,
} from 'actions/constants';
import { API } from 'utils/constants';


export function* getProductsStartSaga() {
  try {
    const {
      data,
      status,
    } = yield call(axios, {
      method: 'get',
      url: `${API}products?offset=0&limit=10`,
    });
    if(status >= 200 && status < 300) {
      yield console.log('results in axios products get: ', data);
      const { results } = data;
      yield console.log('products are: ', results);
      yield put({
        type: GET_PRODUCTS_SUCCESS,
        payload: results,
      });
    } else {
      throw data;
    }
  } catch (error) {
    yield console.log('product saga error: ', error);
    yield put({
      type: GET_FAILURE,
      payload: error,
    });
  }
}


export function* getProductsSaga() {
  yield takeEvery(GET_PRODUCTS_START, getProductsStartSaga);
}

export default [
  getProductsSaga()
];
