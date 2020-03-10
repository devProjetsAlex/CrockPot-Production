import React, {useState} from 'react';

import Form from '../../component/Form/Form';
import List from '../../component/List/List'

function Reservation() {
    const [userReservation, setUserReservation] = useState([])
    

const addReservation = reservation => {
    setUserReservation(prevReservation=>[
        ...prevReservation,{id:Math.random().toString(),...reservation}
    ])
}    

const removeReservation = reservationId => {
   setUserReservation(prevReservation=>prevReservation.filter(reservation=> reservation.id !== reservationId))
}

  return (
    <div className="App">
      <Form onAddReservation={addReservation}/>

      <section>
       
        <List reservation={userReservation} onRemoveItem={removeReservation}/>
      </section>
    </div>
  );
}

export default Reservation;
