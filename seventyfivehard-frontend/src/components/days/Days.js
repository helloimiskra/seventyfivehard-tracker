import React from 'react'
import {Route, Link} from 'react-router-dom'
import Day from '../days/Day'
import DayInput from '../days/DayInput'

const Days = (props) => {
    debugger
    if (!props.days){
        return null }
        else {
            let days = props.days
            return (
                <div>
                <h2>Days:</h2>
                {days.map(day => 
                <li key={day.id}>
              <Link to={`/users/${day.user_id}/days/${day.id}`}>Day #{day.id}</Link> <Day/>
             </li> )}

             
             <Route exact path='users/:id/days/new' render={()=> <DayInput addDay={this.props.addAttempt} user ={this.props.user.id}/>}/>
                </div>
            )



    }
}
   

export default Days


