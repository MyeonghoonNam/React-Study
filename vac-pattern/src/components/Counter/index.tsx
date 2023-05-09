import { useCallback, useState } from 'react';

import VCounter from './view';

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  const handleDecrease = useCallback(() => {
    setValue((prev) => prev - 1);
  }, []);

  const props = {
    value,
    disabledIncrease: value >= 5,
    disabledDecrease: value <= 0,
    onIncrease: handleIncrease,
    onDecrease: handleDecrease,
  };

  return <VCounter {...props} />;
};

export default Counter;
