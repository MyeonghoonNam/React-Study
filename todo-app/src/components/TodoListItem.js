import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import styled from '@emotion/styled';

const TodoListItemContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center; // 세로 중앙 정렬

  &:nth-of-type(even) {
    background: #f8f9fa;
  }

  // 엘리먼트 사이사이에 테두리를 넣어 줌
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center; // 세로 중앙 정렬
  flex: 1; // 차지할 수 있는 영역 모두 차지
  cursor: pointer;

  svg {
    // 아이콘
    font-size: 1.5rem;
  }

  &.checked {
    svg {
      color: #22b8cf;
    }

    span {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;

const Text = styled.span`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 영역 모두 차지
`;

const TodoListItemRemoveButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <TodoListItemContainer>
      <CheckBox className={checked && 'checked'}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text>{text}</Text>
      </CheckBox>
      <TodoListItemRemoveButton>
        <MdRemoveCircleOutline />
      </TodoListItemRemoveButton>
    </TodoListItemContainer>
  );
};

export default TodoListItem;
