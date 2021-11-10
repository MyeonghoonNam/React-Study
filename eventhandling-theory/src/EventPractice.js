import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    name: '',
    message: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.name + ' : ' + this.state.message);

    this.setState({
      name: '',
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="name"
          placeholder="name..."
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="message..."
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
