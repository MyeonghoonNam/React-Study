import { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserInfoContext } from './contexts/UserInfo';

const FirstComponent = () => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const history = useHistory();
  const handleClick = () => {
    setUserInfo({
      id: '123124',
      name: 'hoon',
    });
    history.push('/context');
  };
  return (
    <div>
      <div>
        first Info: {userInfo.id} {userInfo.name}
      </div>
      <button type="button" onClick={handleClick}>
        move
      </button>
    </div>
  );
};

export default FirstComponent;
