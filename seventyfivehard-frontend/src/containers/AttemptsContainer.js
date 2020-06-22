import React, { Component } from 'react'

import Attempt from '../components/attempts/Attempt'
import Attempts from '../components/attempts/Attempts'
import AttemptInput from '../components/attempts/AttemptInput'

import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { addAttempt } from '../actions/addAttempt';



class AttemptsContainer extends Component {
    render() {
        console.log(`attempts container ${this.props.user}`)
        return (
            <div>
                <Attempts attempts={this.props.user && this.props.user.attempts}/>
                <Attempt/>

                <AttemptInput
                user ={this.props.user}
                addAttempt={this.props.addAttempt} />
         

            </div>
        )
    }
}


//<Route path='/attempts/new' render={()=> <AttemptInput
               // user ={this.props.user}
               // addAttempt={this.props.addAttempt} />}/>

export default AttemptsContainer;