import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import NavigationBar from './components/NavigationBar'
import UsersContainer from './containers/UsersContainer'
import {Accordion, Button, Card} from 'react-bootstrap'
import ChallengeIntro from './components/ChallengeIntro'


class App extends React.Component{

  render(){
    return (
      
      
  
      <div className="App">
        <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Challenge Info
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body><ChallengeIntro/></Card.Body>
    </Accordion.Collapse>
  </Card>


  


  </Accordion>
        <UsersContainer/>
     
      </div>
    );
  };
};



export default connect()(App);
