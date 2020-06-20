import React, { Component } from 'react'

import Attempt from '../components/attempts/Attempt'
import Attempts from '../components/attempts/Attempts'
import AttemptInput from '../components/attempts/AttemptInput'

import {connect} from 'react-redux'
import { fetchAttempts } from '../actions/fetchAttempts';

class AttemptsContainer extends Component {
    render() {
        return (
            <div>
                Attempts Container
                <Attempts/>
                <Attempt/>
                <AttemptInput/>

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(`current attempt state: ${state.attempts}`)
   return {
      
      users: state.attempts,
      loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchAttempts: () => dispatch(fetchAttempts())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AttemptsContainer);