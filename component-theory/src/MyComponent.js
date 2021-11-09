import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, age }) => {
  return (
    <div>
      이름 {name}
      <br />
      나이 {age}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'Hoon',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,

  // PropTypes에는 다양한 종류가 존재한다.
  // 더 자세한 정보는  https://github.com/facebook/prop-types 참고하자
};

export default MyComponent;
