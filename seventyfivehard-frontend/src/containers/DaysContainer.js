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
                




                Days Container
                <Days days={this.props.days}/>
                <Day/>
                <DayInput/>

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
    return {
      addDay: () => dispatch(addDay())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DaysContainer);