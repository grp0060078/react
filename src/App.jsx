
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props); // to call the parent class constructor

    // define the state
    this.state = {
      count: 0,
    }
  }

  increment = () => {
    // update the state (data) of the count
    this.setState({
      // provide the new state
      count: this.state.count + 1,
    })
  }

  decrement = () => {
    // update the state (data) of the count
    this.setState({
      // provide the new state
      count: this.state.count - 1,
    })
  }

  reset = () => {
    // update the state (data) of the count
    this.setState({
      // provide the new state
      count:0
    })
  }

  render() {
    return (
      <div>
        <p>Count: { this.state.count }</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}

export default App;