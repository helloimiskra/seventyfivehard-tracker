import React from 'react'
import {Route, Link } from 'react-router-dom'
import {Container} from 'react-bootstrap'

const Users= ({users}) => {
    return (
        
        <div>
          <h3> Current Challengers:</h3> 
            {users.map(user => 
            
            <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link></li>   )}
        </div>
      
    )
}

export default Users; 
