import config from '../config';
import type { User } from './types';

const RESOURCE = 'users';

export const getUsers = () => config.get<User[]>(`${RESOURCE}`);

export const getUser = (userId: number) =>
  config.get<User>(`${RESOURCE}/${userId}`);
