import { useState, useEffect } from 'react';
import { getUsers } from '../../api/users';

import type { User } from '../../api/users/types';

const useUserList = () => {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const userList = await getUsers();
      setUserList(userList);
    })();
  }, []);

  return userList;
};

export default useUserList;
