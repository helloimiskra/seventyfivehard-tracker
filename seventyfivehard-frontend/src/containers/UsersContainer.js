import React, { Component } from 'react'
import Users from '../components/users/Users'
import User from '../components/users/User'
import UserInput from '../components/users/UserInput'
import {connect} from 'react-redux'
import { fetchUsers } from '../actions/fetchUsers';



class UsersContainer extends Component {
    
    componentDidMount(){

        this.props.fetchUsers()
        
      };
    
      
      
    render() {
        return (
            <div>
                Users Container
                <UserInput
                addUser={this.props.addUser} />
                <Users users={this.props.users}/>
                <User/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(`current state: ${state.users}`)
   return {
      
      users: state.users.users,
      loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers()),
      addUser: user => dispatch({type: 'ADD_USER', user})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
