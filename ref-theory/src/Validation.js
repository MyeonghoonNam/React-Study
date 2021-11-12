import React, { Component } from 'react';
import './Validation.css';

class Validation extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  // ref는 DOM을 꼭 직접적으로 건드려야 할 때 사용
  // ref를 만드는 가장 기본적인 방법은 콜백 함수를 사용
  // ref를 만드는 또 다른 방법은 리액트에 내장되어 있는 createRef라는 함수를 사용
  input = React.createRef();

  handleChange = (e) => {
    this.setState({
      ...this.state,
      password: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      ...this.state,
      clicked: !this.clicked,
      validated: this.state.password === '0000',
    });

    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={this.input}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleClick}>검증하기</button>
      </div>
    );
  }
}

export default Validation;
