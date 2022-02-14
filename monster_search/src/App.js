// use capital letters when calling component and also when putting it in tags
import { CardList } from './components/card-list/cardList';
import { Searchbar } from './components/searchbar/searchBar';
import './App.css';
import React from 'react';


// function App() {
// Function based
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

class App extends React.Component {
  // Class based
  constructor() {
    super();
    // state is something that is interchangeable(like using CRUD) like variables in an app whether the users or items 
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
      ],
      searchField: ''
    }
  }
  // to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
  // Lifecycle
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      // .then(bots =>  console.log(bots))
      .then(fetchedUsers => this.setState({ bots: fetchedUsers }))
  }

  render() {
    // destructuring this.state
    const { bots, searchField } = this.state
    const filteredBots = bots.filter(bot => bot.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      // Calling cardList parent and the card children props so Card/item(child) => cardlist/gallery(parent) => App(main)
      <div className="App">
        <div className='bots-container'>
          <h1>Bots</h1>
          <Searchbar
            handleChange={e => this.setState({ searchField: e.target.value }, () => console.log(this.state))}
            placeholder='Search Bots here..'
          />
          {/* Component called in  */}
          <CardList bots={filteredBots} />
        </div>
      </div>
    );
  }
}

export default App;
