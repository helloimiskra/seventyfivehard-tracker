export const addAttempt = (attempt, userId) => {

    return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/attempts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(attempt)
    })
        .then(response => {response.json()})
        .then(attempt => {
                dispatch({type: 'ADD_ATTEMPT', payload: attempt})
            }
            
        )    
    }
  
}
