import React from 'react'

const Day = (props) => {
    
    if (props || props.days === undefined){
        return null
    } else {
        
        
        let day = props[props.match.params.id - 1]
        console.log(`Day Component: ${day}`)
        let date = day.created_at.slice(0, 10)   
        return (
        <div>
        Started on: {date} Completed?: {day.completed ? 'Yes' : 'No' }
    

        
        </div>
        )
    }
}

export default Day
