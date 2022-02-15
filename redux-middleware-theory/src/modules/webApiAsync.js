// import { handleActions } from 'redux-actions';
// import * as api from '../utils/api';
// import createRequestThunk from '../utils/createRequestThunk';

// // 액션 타입
// const GET_POST = 'sample/GET_POST';
// const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

// const GET_USERS = 'sample/GET_USERS';
// const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

// // thunk 함수
// // thunk 함수 내부에서는 시작, 성공, 실패의 경우 각각 다른 액션을 디스패치 한다.

// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// const initialState = {
//   post: null,
//   users: null,
// };

// const webApiAsync = handleActions(
//   {
//     [GET_POST_SUCCESS]: (state, action) => ({
//       ...state,
//       post: action.payload,
//     }),
//     [GET_USERS_SUCCESS]: (state, action) => ({
//       ...state,
//       users: action.payload,
//     }),
//   },
//   initialState,
// );

// export default webApiAsync;

// redux-saga
import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../utils/api';
import { startLoading, finishLoading } from './loading';

// Action Type
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

function* getPostSaga(action) {
  yield put(startLoading(GET_POST));

  try {
    // call함수 : Promise를 반환하는 함수를 호출하고 대기
    // 첫 번째 파라미터는 비동기 함수, 나머지는 첫 번째 함수에 넣을 인수
    const post = yield call(api.getPost, action.payload); // const post = api.getPost(action.payload)를 의미한다.

    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data,
    });
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
  }

  yield put(finishLoading(GET_POST));
}

function* getUsersSaga() {
  yield put(startLoading(GET_USERS));

  try {
    const users = yield call(api.getUsers);

    yield put({
      type: GET_USERS_SUCCESS,
      payload: users.data,
    });
  } catch (e) {
    yield put({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
  }

  yield put(finishLoading(GET_USERS));
}

export function* webApiAsyncSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  post: null,
  users: null,
};

const webApiAsync = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState,
);

export default webApiAsync;
