import { useState, useEffect } from 'react';
import { getUsers } from '../../api/users';

import type { User } from '../../api/users/types';
import type { ApiError } from '../../api/config/types';

const useUserList = (): [
  userList: User[],
  isLoading: boolean,
  error?: ApiError,
] => {
  const [userList, setUserList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError>();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const userList = await getUsers();
        setUserList(userList);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return [userList, isLoading, error];
};

export default useUserList;
