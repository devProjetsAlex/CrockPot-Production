import React from 'react'
import ReservationList from '../../component/Reservation/ReservationList/ReservationList'
import {useParams} from 'react-router-dom'


const DUMMY_RESERVATION = [
    {
      id:'p1',
      title:'WizKhalifa HightTime Party',
      description:' Mega party de Hightime pour wizKhalifa',
      adresse:'103 Rue de la tourelle, Qc',
      date:'12 Juin 2020',
      creator:'u1'
    },
    {
        id:'p2',
        title:'SnoopDog HightTime Party',
        description:' Mega party de Hightime pour SnoopDog',
        adresse:'103 Rue Laviguer, Qc',
        date:'14 Juin 2020',
        creator:'u2'
      }
]

const UserReservation= () => {
    const userId= useParams().userId
    const loadedReservation = DUMMY_RESERVATION.filter(reservation=> reservation.creator === userId)
    return( <ReservationList items={loadedReservation}/>)
}
export default UserReservation