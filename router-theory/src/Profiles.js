import { NavLink, Outlet } from 'react-router-dom';

const activeStyle = {
  background: 'black',
  color: 'white',
};

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink
            style={(isActive) => (isActive ? { ...activeStyle } : '')}
            to="/profiles/hoon"
          >
            프로필 : 훈
          </NavLink>
        </li>
        <li>
          <NavLink style={activeStyle} to="/profiles/myeong">
            프로필 : 명
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
export default Profiles;
