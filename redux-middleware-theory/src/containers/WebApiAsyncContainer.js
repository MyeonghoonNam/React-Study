import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, getUsers } from '../modules/webApiAsync';
import WebApiAsync from '../components/WebApiAsync';

const WebApiAsyncContainer = () => {
  const post = useSelector(({ webApiAsync }) => webApiAsync.post);
  const users = useSelector(({ webApiAsync }) => webApiAsync.users);
  const loadingPost = useSelector(({ loading }) => loading['sample/GET_POST']);
  const loadingUsers = useSelector(
    ({ loading }) => loading['sample/GET_USERS'],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getPost(1));
      dispatch(getUsers());
    } catch (e) {
      // api 요청 실패에 따른 로직을 구현
      console.log(e);
    }
  }, [dispatch]);

  return (
    <WebApiAsync
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default React.memo(WebApiAsyncContainer);
