import React from 'react';
import { connect } from 'react-redux'
import './App.css';
//

import UsersContainer from './containers/UsersContainer'
import AttemptsContainer from './containers/AttemptsContainer'
import DaysContainer from './containers/DaysContainer'


class App extends React.Component{




  render(){
  
    return (
      
      <div className="App">
        
    
        <UsersContainer/><br></br>
        <AttemptsContainer/>
        <br></br>
        <DaysContainer/>

       
      </div>
    );
  };
};





export default connect()(App);
