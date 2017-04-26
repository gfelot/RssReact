import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Import Root Components and Setup Routes
import Header from './components/Header';
import PrivateRoute from '../../components/routing/PrivateRoute';

import Start from '../Start/Start'
import Login from '../Login/Login'
import Register from '../Register/Register'
import View from '../View/View'

const App = (props) => (
    <div>
        { props.loggedIn && <Header /> }
        <Route exact path="/" component={ Start } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
<<<<<<< HEAD
        <PrivateRoute path="/view" isAuthenticated={ props.isAuthenticated } component={ View } />
=======
        <Route path="/view" component={ View } />

        {/* <PrivateRoute path="/view" isAuthenticated={ props.isAuthenticated } component={ View } /> */}
>>>>>>> 4d454d307a7524233f8c272cbd662bef438fc2e9
    </div>
);

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(App);
