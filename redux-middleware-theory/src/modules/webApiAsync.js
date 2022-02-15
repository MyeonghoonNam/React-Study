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
import { takeLatest } from 'redux-saga/effects';
import * as api from '../utils/api';
import createRequestSaga from '../utils/createRequestSaga';

// Action Type
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

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
