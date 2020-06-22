import React, { Component } from 'react';
import { addAttempt } from '../../actions/addAttempt'
import {connect} from 'react-redux'

class AttemptInput extends Component {

    state = {
        completed: false,
        startdate: ""
    }


    handleOnSubmit(event){
       
        event.preventDefault()
        console.log(this.props.user.id)
        let attempt = {completed: this.state.completed, startdate: Date.today, user_id: this.props.user.id}
        this.props.addAttempt(attempt, this.props.user.id)
        this.setState({
            completed: false,
            startdate: ""
        })
    }
    render() {
        return (
            <div>
                Start an attempt below:

                <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                <input value="Start" type="submit"/>



                </form>
            </div>
        );
    }
}



export default connect(null, {addAttempt})(AttemptInput);