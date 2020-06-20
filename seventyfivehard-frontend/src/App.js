import React from 'react';
import { connect } from 'react-redux'
import './App.css';
//

import UserContainer from './containers/UsersContainer'


class App extends React.Component{




  render(){
  
    return (
      
      <div className="App">
        
    
        <UserContainer/>
       
      </div>
    );
  };
};





export default connect()(App);
