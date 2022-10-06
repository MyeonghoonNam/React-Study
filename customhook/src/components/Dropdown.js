import styled from 'styled-components';
import { useRef, useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;
  overflow: hidden;
`;

const DropdownMenu = styled.ul`
  display: ${({ open }) => (open ? 'block' : 'none')};
  margin: 0;
  width: 100%;
  padding: 0;
  list-style: none;
`;

const DropdownItem = styled.li`
  text-align: center;
`;

const Dropdown = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useOutsideClick(ref, () => {
    setOpen(() => false);
  });

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container>
      <button type="button" onClick={handleClick}>
        buttom 1
      </button>

      <DropdownMenu ref={ref} open={open}>
        <DropdownItem>menu 1</DropdownItem>
        <DropdownItem>menu 2</DropdownItem>
        <DropdownItem>menu 3</DropdownItem>
      </DropdownMenu>
    </Container>
  );
};

export default Dropdown;
