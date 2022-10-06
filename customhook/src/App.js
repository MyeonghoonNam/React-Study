import Box from './components/Box';
import CheckBox from './components/CheckBox';
import Dropdown from './components/Dropdown';
import useToggle from './hooks/useToggle';
import useHover from './hooks/useHover';
import useKeyPress from './hooks/useKeyPress';

function App() {
  const [state, toggle] = useToggle();
  const [ref, isHover] = useHover();
  const keyPressed = useKeyPress('a');

  return (
    <div>
      <CheckBox checked={state} onChange={toggle} />
      <button onClick={toggle}>{state ? 'True' : 'False'}</button>

      {isHover ? 'hover' : 'mouseOut'}
      <Box ref={ref} />
      {keyPressed && 'Pressed'}

      <Dropdown />
    </div>
  );
}

export default App;
