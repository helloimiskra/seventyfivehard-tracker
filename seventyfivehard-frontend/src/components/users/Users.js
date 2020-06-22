import React from 'react'
import {Route, Link } from 'react-router-dom'

const Users= ({users}) => {
    return (
        <div>
            {users.map(user => 
            
            <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link></li>   )}
        </div>
    )
}

export default Users; 
