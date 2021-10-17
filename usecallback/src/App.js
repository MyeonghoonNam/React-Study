import { useCallback, useState } from 'react';
import CheckBox from './components/CheckBox';

function App() {
  const [foodOn, setFoodOn] = useState(false);
  const [clothesOn, setClothesOn] = useState(false);
  const [shelterOn, setShelterOn] = useState(false);

  const foodChange = useCallback((e) => setFoodOn(e.target.checked), []);
  const clothesChange = useCallback((e) => setClothesOn(e.target.checked), []);
  const shelterChange = useCallback((e) => setShelterOn(e.target.checked), []);

  return (
    <div>
      <CheckBox label="Food" on={foodOn} onChange={foodChange} />
      <CheckBox label="Clothes" on={clothesOn} onChange={clothesChange} />
      <CheckBox label="Shelter" on={shelterOn} onChange={shelterChange} />
    </div>
  );
}

export default App;
