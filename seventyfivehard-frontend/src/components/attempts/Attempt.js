import React from 'react'
import DaysContainer from '../../containers/DaysContainer'

const Attempt = (props) => {
    if (props.attempts === undefined){
        return null
    } else {
        return (
        <div>
        {`Started on: ${props.attempts[props.match.params.id - 1].created_at} Completed?: ${props.attempts[props.match.params.id - 1].completed ? 'Yes' : 'No' }`}
        <DaysContainer/>
        </div>
        )
    }
}
    


export default Attempt



//<h1>
       //      {attempt ? `Started on: ${attempt.startdate} Completed?: ${attempt.completed ? 'Yes' : 'No' }` : null}     
         
       //     </h1>
     //   <DaysContainer/>