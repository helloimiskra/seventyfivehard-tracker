import React from 'react'

const Day = ({day}) => {
        
    if (day === undefined){
        return <div>

        </div>
    }
    
    
    else {
        debugger

        let date = day.created_at.slice(0, 10)   
        return (
            
        <div>
        Date: {date} Completed?: {day.day_complete ? 'Yes' : 'No' }<br></br>
        <li>Diet followed?: {day.diet ? 'Yes' : 'No' }</li>

        <li>Workout #1 Completed?: {day.workout_one ? 'Yes' : 'No' }</li>

        <li>Workout #2 Completed?: {day.workout_two ? 'Yes' : 'No' }</li>

        <li>No Alcohol?: {day.no_alcohol ? 'Yes' : 'No' }</li>
        <li>No Cheatmeal?: {day.no_cheatmeal ? 'Yes' : 'No' }</li>

        <li>Progress Pic Taken?: {day.progress_pic ? 'Yes' : 'No' }</li>
        
        <li>Drank a gallon of water?: {day.drank_water ? 'Yes' : 'No' }</li>

        <li>Read 10 pages of a book?: {day.book_read ? 'Yes' : 'No' }</li>
        
    

        
        </div>
        )
}   
    }


export default Day
