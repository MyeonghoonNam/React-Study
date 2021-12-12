const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>텍스트</span>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
