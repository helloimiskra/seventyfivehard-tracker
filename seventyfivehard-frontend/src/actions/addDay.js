export const addDay = (day, userId) => {
   
    return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/days`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(day)
    })
        .then(response => {
            return response.json()})
        .then(day => {
            debugger
            dispatch({type: 'ADD_DAY', payload: day})
        })
        
        
    }
  
}
