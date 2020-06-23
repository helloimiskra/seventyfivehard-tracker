import React from 'react'
import {Redirect} from 'react-router-dom'
import DaysContainer from '../../containers/DaysContainer'


const User = (props) => {

    let user = props.users[props.match.params.id - 1]

    return (
        <div>
            <h1>
             {user ? `Your Name: ${user.name} Your Goals: ${user.goals}` : null}     
         
            </h1>
        <DaysContainer user={user} />
        </div>
        
    
    )
}

export default User
