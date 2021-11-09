import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);

  //   // state의 초깃값 설정하기
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  // 또 다른 상태 지정 방식
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회

    return (
      <div>
        <h1>{number}</h1>
        <h2>불변값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다
            // this.setState({ number: number + 1 });

            // 위 코드와 아래 코드는 완전히 똑같은 기능
            // 아래 코드는 함수에서 바로 객체를 반환
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));

            // setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두 번째 파라미터로 콜백(callback) 함수를 등록하여 작업을 처리
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('setState 호출 후...');
                console.log(this.state); // 이전 상태에서 1이 더해진 상태값 출력
              },
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
