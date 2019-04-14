import {
  call,
  put,
  takeEvery,
  apply,
} from 'redux-saga/effects';
import axios from 'axios';
import setAuthToken from 'utils/setAuthToken';
import {
  GET_FAILURE,
  GET_TOKEN_START,
  GET_TOKEN_SUCCESS,
} from 'actions/constants';
import {
  // API,
  AUTH,
  CLIENT_ID,
  CLIENT_SECRET,
} from 'utils/constants';

export function* getTokenStartSaga() {
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      method: 'post',
      url: AUTH,
      data: 'grant_type=client_credentials&scope=view_products:nuts-custom-demo-1',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json',
      },
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      }
    });
    if (status >= 200 && status < 300) {
      yield console.log('data in axios token: ', data);
      const { access_token } = yield data;
      yield console.log('token is: ', access_token);
      yield apply(localStorage, localStorage.setItem,['token', access_token]);
      yield call(setAuthToken, access_token);
      yield put({
        type:GET_TOKEN_SUCCESS,
        payload: access_token,
      });
    } else {
      throw data;
    }

  } catch (error) {
    yield console.log('token saga error: ', error);
    yield put({
      type: GET_FAILURE,
      payload: error,
    });
  }
}

export function* getTokenSaga() {
  yield takeEvery(GET_TOKEN_START, getTokenStartSaga);
}

export default [
  getTokenSaga()
];