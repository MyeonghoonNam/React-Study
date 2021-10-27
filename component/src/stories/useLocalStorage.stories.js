import useLocalStorage from '../hooks/useLocalStorage';

export default {
  title: 'Hook/useLocalStorage',
};

export const Default = () => {
  const [status, setStatus] = useLocalStorage('value', '');

  return (
    <div>
      <button onClick={() => setStatus('200 OK')}>Resend</button>
      {status}
    </div>
  );
};
