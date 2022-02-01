import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

// Function based
  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           yo
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }


// Class based
class App extends Component {
  constructor() {
    super();
    // calling state property
    this.state = {
      string: 'whats happening'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* curly brackets for javascript expression for variables */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button
            className="App-link"
            // changes the state of the property string
            onClick={() => this.setState({string: 'you have a click'})}
          >
            Learn React
          </button>
        </header>
      </div>
    );
  }
}

export default App;
