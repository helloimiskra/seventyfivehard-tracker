import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import NavigationBar from './components/NavigationBar'
import UsersContainer from './containers/UsersContainer'


class App extends React.Component{

  render(){
    return (
      
      <div className="App">
        <NavigationBar/>
        <UsersContainer/>
     
      </div>
    );
  };
};



export default connect()(App);
