import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUsers() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos');
    yield put({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
}

function* rootSaga() {
  yield takeLatest('FETCH_USERS_REQUEST', fetchUsers);
}

export default rootSaga;