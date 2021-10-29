import { useContext } from 'react';
import { UserInfoContext } from './contexts/UserInfo';
import { useHistory } from 'react-router';

const SecondComponent = () => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const history = useHistory();
  const handleClick = () => {
    setUserInfo({
      id: '123124',
      name: 'Won',
    });
    history.push('/');
  };

  return (
    <div>
      <div>
        second Info: {userInfo.id} {userInfo.name}
      </div>
      <button onClick={handleClick}>back</button>
    </div>
  );
};

export default SecondComponent;
