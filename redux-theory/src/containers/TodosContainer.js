// import { connect } from 'react-redux';
import React from 'react';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../hooks/useActions';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   },
// )(TodosContainer);

// useSelector를 통한 리덕스 상태 조회시 다음과 같은 최적화 작업을 해야 리렌더링시 최적화가 이루어진다.
export default React.memo(TodosContainer);
