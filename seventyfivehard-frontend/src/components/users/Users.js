import React from 'react'
import User from './User'

const Users= ({users}) => {
    console.log(users)


    return (
        <div>
            {users.map(user => <div key={user.id}><User user={user}/></div>   )}
        </div>
    )
}

export default Users; 
