import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // this.handleOnClick = this.handleOnClick.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Hello from React</h1>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
