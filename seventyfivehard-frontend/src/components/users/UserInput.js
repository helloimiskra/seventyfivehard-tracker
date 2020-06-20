import React, { Component } from 'react'

export default class UserInput extends Component {

    state = {
        username: '',
        name: '',
        goals: ''
    };

    handleOnChange(event){
        this.setState({
            [event.target.value]: event.target.value
        })
    }

    handleOnSubmit(event){
        event.preventDefault()
        let user = {name: this.state.name, username: this.state.username, goals: this.state.goals}
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

                UserInput
                
            </div>
        )
    }
}
