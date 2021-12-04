import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      console.log(data);
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      <div>{data && JSON.stringify(data)}</div>
    </div>
  );
};

export default App;
