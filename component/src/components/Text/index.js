import styled from '@emotion/styled';
import { useState } from 'react';

// const fontStyle = {
//   fontWeight: strong ? 'bold' : undefined,
//   fontSize: size,
// };

const TextBox = styled.span(({ size, strong, style }) => ({
  fontSize: size,
  fontWeight: strong && 'bold',
  style,
}));

const Text = ({ children, ...props }) => {
  // const testStyle = { color: 'red' };
  // console.log();
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setCount(count + 1);
    // console.log(e.target);
  };

  return (
    <TextBox
      // style={{ ...testStyle }}
      value={count}
      onClick={handleClick}
      {...props}
    >
      {children}
      {count}
    </TextBox>
  );
};

export default Text;
