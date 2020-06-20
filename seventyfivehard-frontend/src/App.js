import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { fetchUsers } from './actions/fetchUsers';
import UserList from './components/UserList'


class App extends React.Component{

  componentDidMount(){

    this.props.fetchUsers()
    
  };

  handleLoading = () => {
    console.log(this.props.users.users)
    if(this.props.loading){
      return <div>Loading...</div>
    } else {
      console.log(`props: ${this}`)
      return <UserList users={this.props.users.users}/>
    }
  }

  render(){
    console.log(`render: ${this.props.users.users}`)
    return (
      
      <div className="App">
        Users
        {this.handleLoading()}
       
      </div>
    );
  };
};

const mapStateToProps = state => {
  console.log(`current state: ${state.users}`)
 return {
    
    users: state.users,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
