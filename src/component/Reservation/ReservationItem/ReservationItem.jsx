import React from 'react'

import Card from '../../Card/Card'
import './ReservationItem.css'

const ReservationItem = props => {
    return
    <li className={'place=item'}>
        <Card className='place-item__content'>
        <div place-item__info>
        <h2>{props.title}</h2>
        <h3>{props.adresse}</h3>
        <h4>{props.date}</h4>
        <p> {props.description}</p>
        </div>
        <div className='place-item__actions'>
            <button>
                Voir Réservation
            </button>

            <button>
                Modifié
            </button>
            <button>
                Cancellé
            </button>
        </div>
        </Card>
    </li>

}

export default ReservationItem