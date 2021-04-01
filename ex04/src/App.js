import React, {Component} from 'react';

class App extends Component {
  

  render() { 
    return ( 
      <div className="App">
        <button onClick={this.setMyStorage}>Set Cookie</button>
      </div>);
  }
}
export default App;
