import React from 'react'
import {Link} from 'react-router-dom'
import Day from '../days/Day'
import DayInput from '../days/DayInput'

const Days = (props) => {
    if (!props.days){
        return null }
        else {
            let days = props.days
            return (
            <div>
                <h4>Days:</h4>
                {days.map(day => 
                <li key={day.id}>
                    <Link to={`/users/${day.user_id}/days/${props.days.indexOf(day)+1}`}>Day #{props.days.indexOf(day)+1}
                    </Link> 
                    
                    </li>
                    )}
                    
            </div>
            )

        }
    }
   

export default Days


