import { useState, useEffect } from 'react';

const usePromise = (promiseCreator, deps) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const result = await promiseCreator();
      setData(() => result);
    } catch (e) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps || []);

  return [data, loading, error];
};

export default usePromise;
