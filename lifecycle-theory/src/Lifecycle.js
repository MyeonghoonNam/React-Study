// 모든 리액트 컴포넌트에는 라이프사이클(수명 주기)이 존재한다.
// 컴포넌트의 수명은 페이지에 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝난다.
// 라이프사이클 메서드는 클래스형 컴포넌트에서만 사용할 수 있습니다. 함수형 컴포넌트에서는 사용할 수 없는데 그 대신에 Hooks 기능을 사용하여 비슷한 작업을 처리할 수 있습니다.

// 라이프사이클은 총 세 가지, 즉 마운트, 업데이트, 언마운트 카테고리로 나눕니다.
// 1. 마운트
// DOM이 생성되고 웹 브라우저상에 나타나는 것

// 2. 업데이트는 아래와 같은 총 네 가지 경우에 업데이트
// 1) props가 바뀔 때
// 2) state가 바뀔 때
// 3) 부모 컴포넌트가 리렌더링될 때
// 4) this.forceUpdate로 강제로 렌더링을 트리거할 때

// 3. 언마운트
// 마운트의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것을 언마운트라고 한다.

/* 
라이프사이클 메서드는 컴포넌트 상태에 변화가 있을 때마다 실행하는 메서드입니다. 이 메서드들은 서드파티 라이브러리를 사용하거나 DOM을 직접 건드려야 하는 상황에서 유용합니다.

라이프 사이클 메서드 종류에 대해 알아보자.

render() 메서드

이 메서드 안에서 this.props와 this.state에 접근할 수 있으며, 리액트 요소를 반환합니다. 요소는 div 같은 태그가 될 수도 있고, 따로 선언한 컴포넌트가 될 수도 있습니다. 아무것도 보여 주고 싶지 않다면 null 값이나 false 값을 반환하도록 하세요.

이 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState를 사용하면 안 되며, 브라우저의 DOM에 접근해서도 안 됩니다. DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서 처리해야 합니다.
*/

/*
constructor 메서드

constructor(props) { ... }
이것은 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행됩니다. 이 메서드에서는 초기 state를 정할 수 있습니다.
*/

/*
getDerivedStateFromProps 메서드

props로 받아 온 값을 state에 동기화시키는 용도로 사용하며, 컴포넌트가 마운트될 때와 업데이트될 때 호출

static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.value != = prevState.value) { // 조건에 따라 특정 값 동기화
      return { value: nextProps.value };
    }
    return null; // state를 변경할 필요가 없다면 null을 반환
}
*/

/*
componentDidMount 메서드

componentDidMount() { ... }

컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행합니다. 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리에 유용하다.
*/

/*
shouldComponentUpdate 메서드

shouldComponentUpdate(nextProps, nextState) { ... }

props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드입니다. 이 메서드에서는 반드시 true 값 또는 false 값을 반환해야 합니다. 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 언제나 true 값을 반환합니다. 이 메서드가 false 값을 반환한다면 업데이트 과정은 여기서 중지됩니다.

이 메서드 안에서 현재 props와 state는 this.props와 this.state로 접근하고, 새로 설정될 props 또는 state는 nextProps와 nextState로 접근할 수 있습니다.

프로젝트 성능을 최적화할 때, 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할 때는 false 값을 반환하게 합니다.
*/

/*
getSnapshotBeforeUpdate 메서드

render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됩니다. 이 메서드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있으며 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용됩니다

예: 스크롤바 위치 유지

getSnapshotBeforeUpdate(prevProps, prevState) {
    if(prevState.array != = this.state.array) {
    const { scrollTop, scrollHeight } = this.list
      return { scrollTop, scrollHeight };
    }
}
*/

/*
componentDidUpdate 메서드

componentDidUpdate(prevProps, prevState, snapshot) { ... }

리렌더링을 완료한 후 실행합니다. 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 무방합니다. 여기서는 prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있습니다. 또 getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달받을 수 있습니다.
*/

/*
componentWillUnmount 메서드

componentWillUnmount() { ... }

컴포넌트를 DOM에서 제거할 때 실행합니다. componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야 합니다.
*/

/*
componentDidCatch 메서드

컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여 줄 수 있게 해 줍니다.

componentDidCatch(error, info) {
  this.setState({
      error: true
  });
  console.log({ error, info });
}

여기서 error는 파라미터에 어떤 에러가 발생했는지 알려 주며, info 파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 줍니다. 앞의 코드에서는 그저 console.log만 했지만, 나중에 실제로 사용할 때 오류가 발생하면 서버 API를 호출하여 따로 수집할 수도 있습니다.

그러나 이 메서드를 사용할 때는 컴포넌트 자신에게 발생하는 에러를 잡아낼 수 없고 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있다
*/

import React, { Component } from 'react';

class LifeCycle extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycle;
