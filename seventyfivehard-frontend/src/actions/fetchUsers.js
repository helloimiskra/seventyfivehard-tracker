export const fetchUsers = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING_USERS'})
        fetch('http://localhost:3000/api/v1/users/')
        .then(response => {
            return response.json()})
        .then(responseJSON => {
            let userData = responseJSON.data.map(x => x.attributes)
            let dayData = responseJSON.included.map(x => x.attributes)
            dispatch({ type: 'ADD_USERS', users: userData })
            dispatch({ type: 'ADD_DAYS', days: dayData})
        })
        
        
    }
  
}
