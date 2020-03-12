import React from 'react'

import './ReservationList.css'
import Card from '../../Card/Card'
import ReservationItem from '../ReservationItem/ReservationItem'

const ReservationList = props => {
if (props.items.length === 0 ) {
    return (<div className='place-list center'>
        <Card>
            <h2> Aucune réservation pour l'instant.</h2>
            <button> Prendre une reservation </button>
        </Card>
    </div>
    
    )
}

return (
    <ul className='reservation-list'>
        {props.items.map(reservation => <ReservationItem 
        key={reservation.id} 
        id={reservation.id}
        date={reservation.date} 
        title={reservation.title}
        description={reservation.description} 
        adresse={reservation.adresse}
        creatorId={reservation.creator}
        
        />)}
    </ul>
)

}

export default ReservationList