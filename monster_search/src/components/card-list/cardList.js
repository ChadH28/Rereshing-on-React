// Single list of cards or items component
// use capital letters when calling component and also when putting it in tags
import {Card} from '../card/card';
import './cardList.css';
import React from 'react';

// Function based
export const CardList = props => {
  console.log(props)
  return (
    <div className="card-list">
      {
        // this.props.property
        // getting info off props not state
        // Props are key and coach
        props.bots.map(bot => <Card key={bot.id} bot={bot}/>)
      }
    </div>
  );
}