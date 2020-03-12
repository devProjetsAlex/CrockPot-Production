import React from 'react'
import UserList from './UserList/UserList'

const Users = () => {

    const USERS = [{
        id: 'u1',
        name: 'Alex',
        reservation: 1
    }]

    return (
    <>
   
    <UserList items={USERS}/>
    </>
    )
}

export default Users