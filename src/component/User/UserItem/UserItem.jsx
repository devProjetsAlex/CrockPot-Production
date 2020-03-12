import React from 'react'
import './UserItem.css'
import Avatar from '../../../UIElement/Avatar'
import {Link} from 'react-router-dom'
import Card from '../../../UIElement/Card/Card'

const UserItems = props  => {
    return (
        <ul className='user-item'>
            <div className='user-item__content'>
            <Card>
                <Link to={`/${props.id}/reservation`}>
                <div className='user-item__image' >
                    <Avatar />
                </div>

                <div className='user-item__info'>
                    <h2>{props.name}</h2>
                    <h3>{ props.reservation} Reservation </h3>
                </div>
                </Link>
             </Card>
            </div>
        </ul>
    )
}

export default UserItems