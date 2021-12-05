import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const { data } = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=7cfafbc6441c457e8a96802f5b096f59',
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
