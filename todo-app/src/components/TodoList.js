import TodoListItem from './TodoListItem';
import styled from '@emotion/styled';

const TodoListContainer = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListContainer>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </TodoListContainer>
  );
};

export default TodoList;
