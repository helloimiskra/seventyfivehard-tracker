import React, { Component } from 'react'

class UserInput extends Component {

    state = {
        username: '',
        name: '',
        goals: ''
    };

    handleOnChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit(event){
        event.preventDefault()
        let user = {name: this.state.name, username: this.state.username, goals: this.state.goals}
        console.log(this.props)
        this.props.addUser(user)
        this.setState({
            name: '',
            username: '',
            goals: ''
        })
    }
    
    render() {
        return (
            <div>
                User Input
                <h1>Sign-up or log-in:</h1>

                <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                <label>Name: </label>
                <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={(event)=> this.handleOnChange(event)}/><br></br>
                <label>Username: </label>
                <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={(event)=> this.handleOnChange(event)}/><br></br>
                <label>Your goals for this challenge: </label>
                <input
                type="text"
                name="goals"
                value={this.state.goals}
                onChange={(event)=> this.handleOnChange(event)}/><br></br>
                <input type="submit"/>
                </form>
                
            </div>
        )
    }
}

export default UserInput