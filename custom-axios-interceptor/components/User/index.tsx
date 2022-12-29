import useUser from '../../hooks/useUser';
import type { Props } from './types';

const User = ({ userId }: Props) => {
  const user = useUser(userId);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>UserInfo</h2>
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
      </ul>
    </div>
  );
};

export default User;
