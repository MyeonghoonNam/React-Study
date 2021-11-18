import styled from '@emotion/styled';

const TodoContainer = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const TodoTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoContent = styled.div`
  background: white;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoContainer>
      <TodoTitle>일정 관리</TodoTitle>
      <TodoContent>{children}</TodoContent>
    </TodoContainer>
  );
};

export default TodoTemplate;
