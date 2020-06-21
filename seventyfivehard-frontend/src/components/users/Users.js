import React from 'react'

const Users= ({users}) => {
    console.log(users)


    return (
        <div>
            Users Component
            {users.map((x, i) => ( <div key={i}> User's Name: {x.name} <br></br>Your Goals: {x.goals}</div>))}
            </div>
    )
    }

export default Users; 

//{users.map((x, i) => ( <div key={i}> User's Name: {x.name} <br></br>Your Goals: {x.goals} </div>