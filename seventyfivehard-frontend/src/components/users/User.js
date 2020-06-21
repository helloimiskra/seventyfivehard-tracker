import React from 'react'


const User = ({user}) => {
    console.log(user)
    return <li>
             User's Name: {user.name} <br></br> Your Goals: {user.goals}      
            
    </li>
    
}

export default User
