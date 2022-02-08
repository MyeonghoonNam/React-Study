import Counter from '../components/Counter';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { useCallback } from 'react';

//리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 한다.
const CounterContainer = () => {
  // const 결과 = useSelector(상태 선택 함수);
  const number = useSelector((state) => state.counter.number);
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

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// mapStateToProps와 mapDispatchToProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.
// mapStateToProps는 state를 파라미터로 받아오며, 이 값은 현재 스토어가 지니고 있는 상태를 가리킨다.
// mapDispatchToProps의 경우 store의 내장 함수 dispatch를 파라미터로 받아온다.
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   },
// )(CounerContainer);

export default CounterContainer;
