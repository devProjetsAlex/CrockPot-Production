import React,{useState} from 'react'

import Modal from '../../../UIElement/Modal/Modal'
import Button from '../../Button/Button'
import Card from '../../Card/Card'
import './ReservationItem.css'

const ReservationItem = props => {
    const [showReservation, setShowReservation] = useState(false)

    const openReservationHandler = () => {
            setShowReservation(true)
    }
    const closeReservationHandler =() => {
            setShowReservation(false)
    }

    return(
        <>
        <Modal 
        show={showReservation}
        onCancel={closeReservationHandler}
        header={props.adresse}
        contentClass='place-item__modal-content'
        footer={<Button onClick={closeReservationHandler}>Fermé</Button>}
        >
            <div className='reservation-container'>
                    <h2> The reservation !</h2>
            </div>
        </Modal>
    <li className={'place=item'}>
        <Card className='place-item__content'>
        <div place-item__info>
        <h2>{props.title}</h2>
        <h3>{props.adresse}</h3>
        <h4 type='date'>{props.date}</h4>
        <p> {props.description}</p>
        </div>
        <div className='place-item__actions'>
            <Button onClick={openReservationHandler} >
                Réservation
            </Button >

            <Button to={`/reservation/${props.id}`} >
                Modifié
            </Button >

            <Button danger>
                Cancellé
            </Button>
        </div>
        </Card>
    </li>
    </>
)
}

export default ReservationItem