import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';
import React, { useCallback } from 'react';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);
  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default React.memo(CounterContainer);
