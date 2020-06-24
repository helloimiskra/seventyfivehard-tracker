import React, { Component } from 'react'
import User from '../components/users/User'
import Users from '../components/users/Users'
import UserInput from '../components/users/UserInput'
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchUsers } from '../actions/fetchUsers';
import { addUser } from '../actions/addUser'
import { fetchDays } from '../actions/fetchDays'
import {Container} from 'react-bootstrap'
import ChallengeIntro from '../components/ChallengeIntro'



class UsersContainer extends Component {
    
    componentDidMount(){
        this.props.fetchUsers()
      };
    
      
      
    render() {
        return (
            <div>
              <ChallengeIntro/>
            
              <Switch>
              <Route path='/users/new' render={()=> <UserInput addUser={this.props.addUser} />}/>
              
              <Route path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users}/>} />
            
              <Route exact path ='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users}/>}/>
              </Switch>
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
      addUser: user => dispatch(addUser(user))
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
