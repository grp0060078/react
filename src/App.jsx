
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props); // to call the parent class constructor

    // define the state
    this.state = {
      addcart:false
    }
  }

  removecart = () => {
    // update the state (data) of the count
    this.setState({
      // provide the new state
      addcart:!this.state.addcart
      }
    )
  }

  
  

  render() {
    return (
      <div>
        {this.state.addcart ? (
          <button onClick={this.removecart}>addcart</button>
        )
        
       : (
        <button onClick={this.removecart}>Removecart</button>
       )
        }
      </div>
    )
  }
}

export default App;