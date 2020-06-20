import React, { Component } from 'react'
import Days from '../components/days/Days'
import Day from '../components/days/Day'
import DayInput from '../components/days/DayInput'
import {connect} from 'react-redux'
import { fetchDays } from '../actions/fetchDays';

class DaysContainer extends Component {
    render() {
        return (
            <div>
                Days Container
                <Days/>
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
      fetchDays: () => dispatch(fetchDays())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DaysContainer);