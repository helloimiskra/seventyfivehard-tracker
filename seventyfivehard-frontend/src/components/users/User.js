import React from 'react'
import {Redirect} from 'react-router-dom'
import AttemptsContainer from '../../containers/AttemptsContainer'


const User = (props) => {
    console.log()

    let user = props.users[props.match.params.id - 1]

    return (
        <div>
            <h1>
             {user ? `Your Name: ${user.name} Your Goals: ${user.goals}` : null}     
         
            </h1>
        <AttemptsContainer user={user}/>
        </div>
        
    
    )
}

export default User
