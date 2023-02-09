import type { Instance } from './types';

const interceptor = (instance: Instance) => {
  instance.interceptors.response.use(
    (res) => res.data,
    ({ response }) => {
      const { errorCode, errors, reason } = response.data;
      const result = {
        status: response.status,
        errorCode,
        errors,
        reason,
      };

      return Promise.reject(result);
    },
  );
};

export default interceptor;
