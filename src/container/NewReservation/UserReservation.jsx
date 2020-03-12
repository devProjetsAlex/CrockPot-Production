import React from 'react'
import ReservationList from '../../component/Reservation/ReservationList/ReservationList'

const DUMMY_RESERVSATION = [
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
    return <ReservationList item={DUMMY_RESERVSATION}/>
}
export const UserReservation