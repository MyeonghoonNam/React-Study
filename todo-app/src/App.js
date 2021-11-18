import React, { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리엑트 공부하기',
      checked: true,
    },
    {
      id: 2,
      text: '타입스크립트 공부하기',
      checked: true,
    },
    {
      id: 3,
      text: '자바스크립트 공부하기',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
