import { useState, useEffect } from 'react';
import { getUser } from '../../api/users';

import type { User } from '../../api/users/types';

const useUser = (userId: number) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const user = await getUser(userId);
      setUser(user);
    })();
  }, [userId]);

  return user;
};

export default useUser;
