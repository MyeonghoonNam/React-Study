import { useMemo } from 'react';

function sum(n) {
  console.log('Start');

  let result = 0;

  for (let i = 0; i <= n; i++) {
    result += i;
  }

  console.log('Finished');

  return result;
}

const Sum = ({ label, n }) => {
  // const result = sum(n);
  const result = useMemo(() => sum(n), [n]);

  return (
    <span>
      {label}: {result}
    </span>
  );
};

export default Sum;
