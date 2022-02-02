
import './App.css';
import React from 'react';

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
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // calling state property
      // string: 'whats happening'
      coaches: [
        // hard coded data
        // {
        //   id: '1',
        //   name: 'Xavi'
        // },
        // {
        //   id: '2',
        //   name: 'Lampard'
        // },
        // {
        //   id: '3',
        //   name: 'Gerrard'
        // },
        // {
        //   id: '4',
        //   name: 'Pep'
        // },
        // {
        //   id: '5',
        //   name: 'Tuchel'
        // },
      ]
    }
  }
  // to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(coaches =>  console.log(coaches))
    .then(fetchedUsers =>  this.setState({coaches: fetchedUsers}))
  }

  render() {
    return (
      <div className="App">
        {
          // this.state.property
          this.state.coaches.map(coach => <h1 key={coach.id}> {coach.name} </h1>)
        }
      </div>
    );
  }
}

export default App;
