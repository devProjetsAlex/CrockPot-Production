import React, {useState} from 'react'
import './Form.css'
import Card from '../Card/Card'
import Button from '../Button/Button'
import {VALIDATOR_MIN} from '../../util/validator'


const Form = props => {
const [userName, setUserName] = useState('')
    const [userAmount, setUserAmount] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userDate, setUserDate] = useState('')


    const submitHandler = event => {
        event.preventDefault()
        props.onAddReservation({name:userName, amount:userAmount, phone:userPhone, date:userDate})
    }


    return (
        <section className="ingredient-form">
          <Card>
            <form onSubmit={submitHandler}>

              <div className="form-control">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" value={userName} onChange={event=>{setUserName(event.target.value)}}/>
              </div>

              <div className="form-control">
                <label htmlFor="amount">Nombre de personne (Min. 6)</label>
                <input type="number" id="amount" value={userAmount} validators={[VALIDATOR_MIN(5)]} errorText="Please enter a valid description (at least 5 characters)." onChange={event=>{setUserAmount(event.target.value)}}/>
              </div>
          
              <div className="form-control">
                <label htmlFor="phone">Numéro de téléphone</label>
                <input type="number" id="phone" value={userPhone} onChange={event=>{setUserPhone(event.target.value)}} />
              </div>

              <div className="form-control">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" value={userDate} onChange={event=>{setUserDate(event.target.value)}} />
              </div>

            
              <div className="ingredient-form__actions">
                <Button type="submit" >Prendre une réservation</Button>
              </div>
            </form>
          </Card>
        </section>
      );
    }
    export default Form