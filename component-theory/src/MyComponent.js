import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 클래스형 컴포넌트
class MyComponent extends Component {
  static defaultProps = {
    name: 'Hoon',
    age: '26',
  };

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
  };

  render() {
    const { name, age } = this.props;

    return (
      <div>
        이름 {name}
        <br />
        나이 {age}
      </div>
    );
  }
}

// 함수형 컴포넌트
// const MyComponent = ({ name, age }) => {
//   return (
//     <div>
//       이름 {name}
//       <br />
//       나이 {age}
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: 'Hoon',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired,

//   // PropTypes에는 다양한 종류가 존재한다.
//   // 더 자세한 정보는  https://github.com/facebook/prop-types 참고하자
// };

export default MyComponent;
