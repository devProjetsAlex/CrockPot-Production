import React from 'react';

import './List.css';

const List = props => {
  return (
    <section className="ingredient-list">
      <h2>Prendre une réservation</h2>
      <ul>
        {props.reservation.map(reservation => (
          <li key={reservation.id} onClick={props.onRemoveItem.bind(this, reservation.id)}>
            <span>{reservation.name}</span>
            <span>{reservation.amount}x</span>
            <span>{reservation.phone}</span>
            <span>{reservation.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;
