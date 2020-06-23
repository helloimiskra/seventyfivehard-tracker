import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addDay} from '../../actions/addDay'

class DayInput extends Component {

    state = {
        diet: false,
        workout_one: false,
        workout_two: false,
        no_alcohol: false,
        no_cheatmeal: false,
        progress_pic: false,
        drank_water: false,
        book_read: false
    }


    handleOnClick = (event) => {
        this.setState({
            [event.target.name]: true
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addDay(this.state, this.props.user.id)
        this.setState({
            diet: false,
            workout_one: false,
            workout_two: false,
            no_alcohol: false,
            no_cheatmeal: false,
            progress_pic: false,
            drank_water: false,
            book_read: false
        })
    }

    render() {
        return (
            <div>
                Complete the checklist below: <br></br>
                
                <form onSubmit={(event)=> this.handleOnSubmit(event)}>

                <li><label>Followed my diet</label> 
                <input 
                    type="checkbox"
                    name="diet" 
                    onClick={this.handleOnClick} /></li><br></br>
                <li><label>Completed Workout #1</label> 
                <input 
                    type="checkbox" 
                    name="workout_one"
                    onClick={this.handleOnClick} /></li><br></br>
                <li><label>Completed Workout #2</label> 
                <input 
                    type="checkbox"
                    name="workout_two" 
                    onClick={this.handleOnClick} /></li><br></br>
                <li><label>No Alcohol Today</label> 
                <input 
                    type="checkbox"
                    name="no_alcohol" 
                    onClick={this.handleOnClick} /></li><br></br>
                <li><label>No Cheatmeal Today</label> 
                <input 
                    type="checkbox"
                    name="no_cheatmeal" 
                    onClick={this.handleOnClick} /></li><br></br>
                <li><label>Took a Progress Picture</label> 
                <input 
                    type="checkbox"
                    name="progess_pic" 
                    onClick={this.handleOnClick} /></li><br></br>
                <li><label>Drank a gallon of water</label> 
                <input 
                    type="checkbox"
                    name="drank_water" 
                    onClick={this.handleOnClick} /></li><br></br>
                <li><label>Read 10 Pages of a Book</label> 
                <input 
                    type="checkbox"
                    name="read_book" 
                    onClick={this.handleOnClick} /></li><br></br>
                <input value="Complete/Update" type="submit"/>
                </form>
               
                
            </div>
        );
    }
}

export default connect(null, {addDay})(DayInput);