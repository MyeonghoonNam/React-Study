import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, getUsers } from '../modules/webApiAsync';
import WebApiAsync from '../components/WebApiAsync';

const WebApiAsyncContainer = () => {
  const post = useSelector(({ webApiAsync }) => webApiAsync.post);
  const users = useSelector(({ webApiAsync }) => webApiAsync.users);
  const loadingPost = useSelector(
    ({ webApiAsync }) => webApiAsync.loading.GET_POST,
  );
  const loadingUsers = useSelector(
    ({ webApiAsync }) => webApiAsync.loading.GET_USERS,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers());
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
