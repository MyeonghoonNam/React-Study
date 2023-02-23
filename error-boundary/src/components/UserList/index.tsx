import styled from 'styled-components';
import UserListFallback from './fallback';
import { useUserList } from '@/queries';

const UserList = () => {
  const { data: users } = useUserList();

  return users ? (
    <Container>
      <h2>UserList</h2>

      <ul>
        {users?.map(({ id, name }) => (
          <li key={id}>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </Container>
  ) : null;
};

const Container = styled.article`
  span {
    cursor: pointer;
  }
`;

UserList.Fallback = UserListFallback;

export default UserList;
