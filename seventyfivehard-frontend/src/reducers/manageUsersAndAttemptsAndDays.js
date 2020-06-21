import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    users: usersReducer,
    attempts: attemptsReducer,
    days: daysReducer
});

export default rootReducer;

function usersReducer(state = { users: [], loading: false } , action){
    let idx;
    switch(action.type){
        case 'LOADING_USERS':
            return {
                ...state,
                users: [...state.users],
                loading: true
            }
        case "ADD_USERS":
            console.log(action.users)
            return {
                ...state, 
                users: action.users,
                loading: true
            }
        case "ADD_USER":
            debugger
            return {
                ...state,
                users: [...state.users, action.payload.data.attributes],
                loading: true
            }
        case "DELETE_USER":
            idx = state.findIndex(user => user.id===action.id);
            return {
                ...state, 
                users: [...state.slice(0, idx), ...state.slice(idx + 1)], 
                loading: false
            };
        default:
            return state; 
    }    
}

function attemptsReducer(state = [], action){
    let idx;
    switch(action.type){
        case "ADD_ATTEMPT":
            return [...state, action.attempt];
        case "DELETE_ATTEMPT":
            idx = state.findIndex(attempt => attempt.id===action.id);
            return {
                ...state, attempts: [...state.slice(0, idx), ...state.slice(idx + 1)]
            };
        default:
            return state; 
    }    
}

function daysReducer(state = [], action){
    let idx;
    switch(action.type){
        case "ADD_DAY":
            return [...state, action.day];
        case "DELETE_DAY":
            idx = state.findIndex(day => day.id===action.id);
            return {
                ...state, days: [...state.slice(0, idx), ...state.slice(idx + 1)]
            };
        default:
            return state; 
    }    
}