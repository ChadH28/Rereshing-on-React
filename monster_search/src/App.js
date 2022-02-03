// use capital letters when calling component and also when putting it in tags
import { CardList } from './components/card-list/cardList';
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
      bots: [
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
      // .then(bots =>  console.log(bots))
      .then(fetchedUsers => this.setState({ bots: fetchedUsers }))
  }

  render() {
    return (
      <div className="App">
        <div className='coach-container'><h1>Bots</h1></div>
        <CardList bots={this.state.bots}/>
      </div>
    );
  }
}

export default App;
