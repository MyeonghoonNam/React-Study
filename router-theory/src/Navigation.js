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
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>

      <hr />
    </>
  );
};

export default Navigation;
