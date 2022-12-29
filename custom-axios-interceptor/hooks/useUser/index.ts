import { useState, useEffect } from 'react';
import { getUser } from '../../api/users';

import type { User } from '../../api/users/types';
import type { ApiError } from '../../api/config/types';

const useUser = (
  userId: number,
): [user?: User, isLoading?: boolean, error?: ApiError] => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError>();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const user = await getUser(userId);
        setUser(user);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [userId]);

  return [user, isLoading, error];
};

export default useUser;
