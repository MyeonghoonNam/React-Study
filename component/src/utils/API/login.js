import API from './api';

export const loginApi = async (code) => {
  const { data } = await API.post('/login', code);

  return data;
};
