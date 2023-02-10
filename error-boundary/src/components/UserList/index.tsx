import useUserList from '@queries/useUserList';
import styled from 'styled-components';

const UserList = () => {
  const { data } = useUserList();

  return (
    <Container>
      <h2>UserList</h2>
      <ul>
        {data?.map(({ id, name }) => (
          <li key={id}>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.article`
  span {
    cursor: pointer;
  }
`;

export default UserList;
