import React, { Component } from 'react'
import Days from '../components/days/Days'
import Day from '../components/days/Day'
import DayInput from '../components/days/DayInput'

import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { addDay } from '../actions/addDay';

class DaysContainer extends Component {
    
    render() {
  
        return (
            
            <div>
            <DayInput addDay={this.props.addDay} user ={this.props.user.id}/>   
            <Days days={this.props.days} user = {this.props.user.id}/>
            <Day days={this.props.user && this.props.days}/>

             
                

                <Switch>

                <Route 
                    path='/users/:id/days/:id' 
                    render={(routerProps) => <Day user={this.props.user.id} days={this.props.days} {...routerProps}/>} />

                <Route 
                    exact ={true} 
                    path ='/users/:id/days' 
                    render={(routerProps) => <Days days={this.props.days}{...routerProps}/>}/>

            
                <Route path='users/:id/days/new' render={(routerProps)=> <DayInput {...routerProps} addDay={this.props.addDay} user ={this.props.user.id}/>}/>
                </Switch>

            </div>
        )
    }
}

const mapStateToProps = state => {
   return {
      
      days: state.days,
 
    }
}

const mapDispatchToProps = dispatch => {
 
    return {
        addDay: day => dispatch(addDay(day))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DaysContainer);