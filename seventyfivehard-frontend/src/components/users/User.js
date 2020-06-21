import React from 'react'


const User = (props) => {
    console.log()

    let user = props.users[props.match.params.id - 1]

    return <li>
           {user ? `User's Name: ${user.name} Your Goals: ${user.goals}` : null}     
            
    </li>
    
}

export default User

//