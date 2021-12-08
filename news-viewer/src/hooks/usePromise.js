import { useState, useEffect } from 'react';

const usePromise = (promiseCreator, deps) => {
  // 대기/완료/실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);

      try {
        const resolved = await promiseCreator();

        setResolved(resolved);
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    };

    process();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
};

export default usePromise;
