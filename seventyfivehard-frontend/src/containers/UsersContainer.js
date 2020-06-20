import React, { Component } from 'react'
import UserList from '../components/users/UserList'
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
                <UserInput/>
                <UserList/>
                <User/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(`current state: ${state.users}`)
   return {
      
      users: state.users,
      loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
