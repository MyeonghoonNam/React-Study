import { css } from '@emotion/react';
import { NavLink, Outlet } from 'react-router-dom';

const NavLinkStyle = css`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }

  &:hover {
    color: hotpink;
  }
`;

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink css={NavLinkStyle} to="/profiles/hoon">
            프로필 : 훈
          </NavLink>
        </li>
        <li>
          <NavLink css={NavLinkStyle} to="/profiles/myeong">
            프로필 : 명
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
export default Profiles;
