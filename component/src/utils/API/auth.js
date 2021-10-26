import API from './api';

export const authApi = async (code) => {
  const { data } = await API.get('/auth-user', code);

  return data;
};
