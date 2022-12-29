import { useUserList } from '../../hooks';

import type { Props } from './types';

const UserList = ({ onClick }: Props) => {
  const userList = useUserList();

  return (
    <div>
      <h2>UserList</h2>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <span
              data-userid={user.id}
              onClick={onClick}
              style={{ cursor: 'pointer' }}
            >
              {user.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
