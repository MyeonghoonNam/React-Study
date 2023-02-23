import Head from 'next/head';
import { Suspense, useState, useCallback } from 'react';
import { UserList, Spinner } from '@/components';
import { ErrorBoundary } from 'react-error-boundary';

export default function Home() {
  const [toggleUserList, setToggleUserList] = useState(false);

  const handleUserListToggle = useCallback(() => {
    setToggleUserList((prev) => !prev);
  }, []);

  return (
    <>
      <Head>
        <title>Error Boundary</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <h1>Init Project</h1>

        <button type="button" onClick={handleUserListToggle}>
          getUserList
        </button>

        {toggleUserList && (
          <ErrorBoundary FallbackComponent={UserList.Fallback}>
            <Suspense fallback={<Spinner />}>
              <UserList />
            </Suspense>
          </ErrorBoundary>
        )}
      </main>
    </>
  );
}
