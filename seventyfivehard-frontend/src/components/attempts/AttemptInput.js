import React, { Component } from 'react';
import { addAttempt } from '../../actions/addAttempt'
import {connect} from 'react-redux'

class AttemptInput extends Component {

    state = {
        completed: false,
        startdate: Date.today
    }


    handleOnSubmit(event){
        event.preventDefault()
        this.props.addAttempt(this.state, this.props.user.id)
    }
    render() {
        return (
            <div>
                Start an attempt below:

                <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                <input type="submit" label="start"/>

                </form>
            </div>
        );
    }
}



export default connect(null, {addAttempt})(AttemptInput);