import React from 'react'

const Day = (props) => {

    if (props.days.length === 0 || !props.match){
        return null
    } else {
        let user_days = props.days.filter(day => day.user_id === props.user)
        let day = user_days.find(d => d.id == props.match.params.id)
        let date = day.created_at.slice(0, 10)   
        return (
        <div>
        Started on: {date} Completed?: {day.completed ? 'Yes' : 'No' }
        </div>
        )
    }
}

export default Day
