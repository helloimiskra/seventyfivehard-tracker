import React, { Component } from 'react'

import Attempt from '../components/attempts/Attempt'
import Attempts from '../components/attempts/Attempts'
import AttemptInput from '../components/attempts/AttemptInput'

import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import { addAttempt } from '../actions/addAttempt';



class AttemptsContainer extends Component {
    render() {
        return (
            <div>

                <Switch>
              <Route exact path='users/:id/attempts/new' render={()=> <AttemptInput addAttempt={this.props.addAttempt} user ={this.props.user}/>}/>
              
              <Route exact path='/users/:id/attempts/:id' render={(routerProps) => <Attempt {...routerProps} attempts={this.props.user && this.props.user.attempts}/>} />
              
              <Route exact path ='/users/:id/attempts' render={(routerProps) => <Attempts {...routerProps} attempts={this.props.user && this.props.user.attempts}/>}/>
        

              
              <AttemptInput user ={this.props.user}addAttempt={this.props.addAttempt} />
              
              <Attempts attempts={this.props.user && this.props.user.attempts}/>
              
              
              </Switch>
                
         

            </div>
        )
    }
}


//<Route path='/attempts/new' render={()=> <AttemptInput
               // user ={this.props.user}
               // addAttempt={this.props.addAttempt} />}/>

export default connect(null, {addAttempt})(AttemptsContainer);


//<Attempts attempts={this.props.user && this.props.user.attempts}/>

//<Route path='/users/:id/attempts/:id' render={(routerProps) => <Attempt {...routerProps} attempts={this.props.user & this.props.user.attempts}/>} />

//<AttemptInput
//user ={this.props.user}
//addAttempt={this.props.addAttempt} />