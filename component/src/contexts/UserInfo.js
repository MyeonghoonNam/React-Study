import { createContext, useMemo, useState } from 'react';

export const UserInfoContext = createContext();

const UserInfo = ({ children }) => {
  const [userInfo, setUserInfo] = useState('');
  const value = useMemo(() => ({ userInfo, setUserInfo }), [
    userInfo,
    setUserInfo,
  ]);

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfo;
