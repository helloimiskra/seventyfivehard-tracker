export const addUser = (user) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users', {
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        })
    }
    
}

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        id
    }
    
}

export const addAttempt = (attempt) => {
    return {
        type: 'ADD_ATTEMPT',
        attempt
    }
    
}

export const deleteAttempt = (id) => {
    return {
        type: 'DELETE_ATTEMPT',
        id
    }
    
}

export const addDay = (day) => {
    return {
        type: 'ADD_DAY',
        day
    }
    
}

export const deleteDay = (id) => {
    return {
        type: 'DELETE_DAY',
        id
    }
    
}