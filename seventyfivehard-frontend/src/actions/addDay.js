export const addDay = (day, userId, attemptId) => {

    return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/attempts/${attemptId}/days`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(day)
    })
        .then(response => {response.json()})
        .then(day => {
            if(day.error){
                alert(day.error)
            } else {
                dispatch({type: 'ADD_DAY', payload: day})
            }
            
        })
        
        
    }
  
}

//let attemptData = responseJSON.data.map(x => x.attributes)
   //         dispatch({ type: 'ADD_ATTEMPT', payload: attempt})