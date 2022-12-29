import { Instance } from './types';

const interceptor = (instance: Instance) => {
  instance.interceptors.response.use(
    (res) => res.data,
    ({ response }) => {
      const error = {
        status: response.status,
        message: `${response.status} 네트워크 오류가 발생하였습니다.`,
      };

      return Promise.reject(error);
    },
  );
};

export default interceptor;
