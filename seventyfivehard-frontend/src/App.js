import React from 'react';
//import { connect } from 'react-redux'

import './App.css';



class App extends React.Component{

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users/1/attempts/1/days/1')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
