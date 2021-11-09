import React from 'react';

const MyComponent = (props) => {
  return <div>이름 {props.name}</div>;
};

MyComponent.defaultProps = {
  name: 'Hoon',
};

export default MyComponent;
