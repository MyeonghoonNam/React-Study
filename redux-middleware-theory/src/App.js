import CounterContainer from './containers/CounterContainer';
import WebApiAsyncContainer from './containers/WebApiAsyncContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <WebApiAsyncContainer />
    </div>
  );
};

export default App;
