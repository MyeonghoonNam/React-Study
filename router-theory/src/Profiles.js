import { Link, Outlet } from 'react-router-dom';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/hoon">프로필 : 훈</Link>
        </li>
        <li>
          <Link to="/profiles/myeong">프로필 : 명</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
export default Profiles;
