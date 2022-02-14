// Single card component
import './searchBar.css';
import React from 'react';

// Function based
export const Searchbar = ({placeholder,handleChange}) => {
  return (
    <div className="searchbar">
      {/* changing the state value of searchfield : '' to whatever the value the user tye in then running a callback funtion to update the values state */}
      <input
        className="searchbar-input"
        type='search'
        placeholder={placeholder}
        // updating state evertime something is typed
        // onChange={e => this.setState({ searchField: e.target.value }, () => console.log(this.state))}
        // placeholder='Search Bots here..'
        onChange={handleChange}
      />
    </div>
  );
}
