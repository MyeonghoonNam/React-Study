import { useUserList } from '../../hooks';

const UserList = () => {
  const userList = useUserList();

  return (
    <div>
      <h2>UserList</h2>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <span style={{ cursor: 'pointer' }}>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
