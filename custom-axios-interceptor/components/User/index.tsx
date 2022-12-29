import useUser from '../../hooks/useUser';
import type { Props } from './types';

const User = ({ userId }: Props) => {
  const [user, isLoading, error] = useUser(userId);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!user || isLoading) {
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
