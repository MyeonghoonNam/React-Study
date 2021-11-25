import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/hoon">프로필 : 훈</Link>
        </li>
        <li>
          <Link to="/profile/myeong">프로필 : 명</Link>
        </li>
      </ul>

      <hr />
    </>
  );
};

export default Navigation;
