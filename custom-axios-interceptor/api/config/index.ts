import axios from 'axios';
import interceptor from './interceptor';

import type { Instance } from './types';

const createInterceptor = () => {
  const instance: Instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  interceptor(instance);

  return instance;
};

const config = createInterceptor();

export default config;
