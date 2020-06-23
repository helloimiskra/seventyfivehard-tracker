export const fetchUsers = (user_id) => {
    return(dispatch) => {
        dispatch({type: 'LOADING_DAYS'})
        fetch(`http://localhost:3000/api/v1/users/${user_id}/days`)
        .then(response => {
            return response.json()})
        .then(responseJSON => {
            let dayData = responseJSON.data.map(x => x.attributes)
            dispatch({ type: 'ADD_DAYS', days: dayData})
        })
        
        
    }
  
}
