import config from '../config';
import type { User } from './types';

const RESOURCE = '/users'; // 정상적인 리소스
// const RESOURCE = '/users'; // 에러를 유발하는 잘못된 리소스

export const getUserList = () => config.get<User[]>(`${RESOURCE}`);
