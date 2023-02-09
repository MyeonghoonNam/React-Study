import config from '../config';
import type { User } from './types';

const RESOURCE = '/users';

export const getUserList = () => config.get<User[]>(`${RESOURCE}`);
