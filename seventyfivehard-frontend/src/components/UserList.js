import React from 'react'

const UserList = ({users}) => {
    console.log(users)


    return (
        <div>
            {users.map((x, i) => ( <div key={i}> Name: {x.name} Goals: {x.goals} </div>

            ))}
            
        </div>
    )
}
export default UserList; 