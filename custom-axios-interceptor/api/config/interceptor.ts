import { Instance } from './types';

const interceptor = (instance: Instance) => {
  instance.interceptors.response.use((res) => res.data);
};

export default interceptor;
