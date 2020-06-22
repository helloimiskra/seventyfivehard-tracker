import React from 'react'
import DaysContainer from '../../containers/DaysContainer'

const Attempt = (props) => {
    if (props.attempts === undefined){
        return null
    } else {
        let attempt = props.attempts[props.match.params.id - 1]
        return (
        <div>
        {`Started on: ${attempt.created_at} Completed?: ${attempt.completed ? 'Yes' : 'No' }`}
        <DaysContainer attempt={attempt}/>
        </div>
        )
    }
}
    


export default Attempt
