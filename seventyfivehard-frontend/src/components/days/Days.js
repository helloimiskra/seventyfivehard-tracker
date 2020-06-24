import React from 'react'
import {Link} from 'react-router-dom'
import Day from '../days/Day'
import DayInput from '../days/DayInput'

const Days = (props) => {
    if (!props.days){
        return null}
        else {
            
            let days = props.days.filter(day => day.user_id === props.user)
            
            if (days.length == 0){
                return <div>
                Add a day to continue
            </div> 
            } else {
            return (
            <div>
                {days.map(day => 
                <div key={day.id}><h5>Day #{days.indexOf(day)+1}:</h5> <Day day ={day}/>
                    </div>
                    )}
                    
            </div>
            )
        }
        }
    }
   

export default Days


