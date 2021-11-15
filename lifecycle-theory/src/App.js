import React, { Component } from 'react';
import LifeCycle from './Lifecycle';

// 랜덤 색상 시정
const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 1677215).toString(16);
};

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜던 색상</button>
        <LifeCycle color={this.state.color} />
      </div>
    );
  }
}

export default App;
