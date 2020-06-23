import React, { Component } from 'react'
import Days from '../components/days/Days'
import Day from '../components/days/Day'
import DayInput from '../components/days/DayInput'

import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import { addDay } from '../actions/addDay';

class DaysContainer extends Component {
    
    render() {
        debugger
        return (
            <div>
                <Days days={this.props.user && this.props.user.days}/>
                
                <Switch>
                <Route exact path='/users/:id/days/:id' render={(routerProps) => <Day {...routerProps} days={this.props.user && this.props.user.days}/>} />
                </Switch>

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(`current state: ${state.days}`)
   return {
      
      days: state.days,
 
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        addDay: day => dispatch(addDay(day))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DaysContainer);