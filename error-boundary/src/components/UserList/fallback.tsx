import { FallbackProps } from 'react-error-boundary';

const UserListFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  // error의 타입 지정을 자신의 프로젝트 환경에 맞춰야한다.
  return (
    <div>
      <p> UserList 에러: {error.message} </p>
      <button onClick={() => resetErrorBoundary()}> 다시 시도 </button>
    </div>
  );
};

export default UserListFallback;
