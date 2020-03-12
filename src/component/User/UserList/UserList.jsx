import React from 'react'
import UserItem from '../UserItem/UserItem'
import './UserList.css'

const UserList = props => {
    if (props.items.length === 0) {
        return (
            <div>
                <h2>
                    No User Found. 
                </h2>
            </div>
        )
    }

    return( <ul>
        {props.items.map(user => (
            <UserItem className='users-list' key={user.id} id={user.id} name={user.name} reservation={user.reservation} />
        ))}
    </ul>)
}

export default UserList