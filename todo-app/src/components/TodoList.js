import React from 'react';
import TodoListItem from './TodoListItem';
import styled from '@emotion/styled';

const TodoListContainer = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </TodoListContainer>
  );
};

export default React.memo(TodoList);
