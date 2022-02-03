// Single card component
import './card.css';
import React from 'react';

// Function based
export const Card = (props) => {
  return (
    <div className="card">
      <img alt='monsterImg' src={`https://robohash.org/${props.bot.id}?set=2&size=160x160`}/>
      <h2>
        {props.bot.name} AKA '{props.bot.username}'
      </h2>
      <p>
        Residing at <b>{props.bot.address.street}</b>
      </p>
      <p>
        Email: <a href={`mailto:${props.bot.email}`}>{props.bot.email}</a>
      </p>
      <p>
        Contact: #{props.bot.phone}
      </p>
    </div>
  );
}
 
// List of properties to call off Bot prop 
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },