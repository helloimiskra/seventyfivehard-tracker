import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'



const Attempts = ({attempts}) => {

    return (
        <div>
           { attempts ? 
                attempts.map(attempt => 
            
             <li key={attempt.id}>
              <Link to={`/users/${attempt.user_id}/attempts/${attempt.id}`}>Attempt #{attempt.id}</Link></li>   ) : null}
        </div>
    )
}

//<Attempt/>//

//<//Route path='/users/' render={(routerProps) => <Attempt {...routerProps} attempts={this.props.attempts}/>} />


export default Attempts
//{attempts.map(attempt => 
            
  //  <li key={attempt.id}>
   //     <Link to={`/users/${attempt.user_id}/${attempt.id}`}>Attempt #{attempt.id}</Link></li>   )}
