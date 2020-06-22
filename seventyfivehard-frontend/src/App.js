import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import UsersContainer from './containers/UsersContainer'


class App extends React.Component{

  render(){
    return (
      <div className="App">
        
        <UsersContainer/>
  
      </div>
    );
  };
};



export default connect()(App);
