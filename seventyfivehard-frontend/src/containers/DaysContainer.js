import React, { Component } from 'react'
import Days from '../components/days/Days'
import Day from '../components/days/Day'
import DayInput from '../components/days/DayInput'

import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { addDay } from '../actions/addDay';
import {Container, Col} from 'react-bootstrap'
import {Accordion, Card, Button} from 'react-bootstrap'

class DaysContainer extends Component {

    
    render() {
  
        return (
    <div>
            <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Days
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <Days days={this.props.days} user = {this.props.user.id}/></Card.Body>
    </Accordion.Collapse>
    </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Add a Day
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body><DayInput addDay={this.props.addDay} user ={this.props.user.id}/></Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>


 

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