import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addDay} from '../../actions/addDay'

class DayInput extends Component {

    state = {

    }

    handleOnSubmit(event){
        event.preventDefault()
        this.props.attempt.id
    }
    render() {
        return (
            <div>
                Complete the checklist below:
                <form onSubmit={(event)=> this.handleOnSubmit(event)}>

                </form>
                DayInput
                
            </div>
        );
    }
}

export default DayInput;