import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import { connect } from 'react-redux';

// Import Root Components and Setup Routes
import Header from './components/Header';
import PrivateRoute from '../../components/routing/PrivateRoute';

import Start from '../Start/Start'
import Login from '../Login/Login'
import Register from '../Register/Register'
import View from '../View/View'
import ViewAdd from '../ViewAdd/ViewAdd'

const App = (props) => (
    <div>
        { props.isAuthenticated && <Header /> }
        <Route exact path="/" component={ Start } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route exact path="/view" component={ View } />
        <Route path="/view/add" component={ ViewAdd } />

        {/* <PrivateRoute path="/view" isAuthenticated={ props.isAuthenticated } component={ View } /> */}
    </div>
);

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(App);
