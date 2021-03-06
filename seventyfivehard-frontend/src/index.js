import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/manageUsersAndAttemptsAndDays';
import { BrowserRouter as Router} from 'react-router-dom'; 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));


ReactDOM.render(
  
  <Provider store={store}>
    
    <Router>
    <NavigationBar/>
    <App />

    </Router>
    

  </Provider>,
  document.getElementById('root')
);

