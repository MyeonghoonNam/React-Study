const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log('prev state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;
