import React, { useEffect } from 'react';

export const Input = React.forwardRef((_, ref) => {
  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <>
      Input: <input ref={ref} />
    </>
  );
});
