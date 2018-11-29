import React from "react"
import { hot } from "react-hot-loader"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  handleOnClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleOnClick}>Hello from React</h1>
        <h1>Count: {this.state.count}</h1>
      </div>
    )
  }
}

export default hot(module)(Counter)
