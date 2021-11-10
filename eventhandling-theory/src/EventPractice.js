// class형 컴포넌트

// import React, { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     name: '',
//     message: '',
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.name + ' : ' + this.state.message);

//     this.setState({
//       name: '',
//       message: '',
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="name"
//           placeholder="name..."
//           value={this.state.name}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="message..."
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// 함수형 컴포넌트
import { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    name: '',
    message: '',
  });

  const { name, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(nextForm);
  };

  const onClick = () => {
    alert(name + ' : ' + message);

    setForm({
      name: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="name"
        placeholder="name..."
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="message..."
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
