import { useReducer } from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export default function useInputs(initialform) {
  const [state, dispatch] = useReducer(reducer, initialform);

  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
}
