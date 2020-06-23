import React from 'react'

const Day = (props) => {
    
    if (props.days === undefined){
        return null
    } else {
        
        let day = props.days[0]
        console.log(day)

        let date = day.created_at.split('')
    console.log(date)
        debugger
        return (
        <div>
        {`Started on: ${day.created_at} Completed?: ${day.completed ? 'Yes' : 'No' }`}

        
        </div>
        )
    }
}

export default Day
