import React from 'react'
import {Redirect} from 'react-router-dom'
import DaysContainer from '../../containers/DaysContainer'
import Days from '../days/Days'


const User = (props) => {

    let user = props.users[props.match.params.id - 1]
    if (user){
    return (
        <div>
            <h3>Name:</h3> 
            <h4><li>{user.name}</li></h4> 
            <h3>  Your Goals: </h3>
            <h4><li>{user.goals}</li></h4>
             
             <h3>Challenge Completed?:</h3> <h4><li>{user.challenge_completed ? 'Yes' : 'No' } </li> </h4>
            
        
         
            <br></br>
        <DaysContainer user={user} />
        
                

        </div>
        
    
    )
}else{
    return null
}
}

export default User
