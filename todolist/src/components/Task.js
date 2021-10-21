import styled from '@emotion/styled';

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
`;

const Task = ({ content, complete, ...props }) => {
  return (
    <ListItem {...props}>
      <input type="checkbox" defaultChecked={complete} />
      <span>{content}</span>
    </ListItem>
  );
};

export default Task;
