import React from 'react';
import { Route, IndexRoute, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Import Root Components and Setup Routes
import Header from './components/Header';
import PrivateRoute from '../../components/routing/PrivateRoute';

import Start from '../Start/Start'
import Login from '../Login/Login'
import Register from '../Register/Register'
import View from '../View/View'
import ViewAdd from '../ViewAdd/ViewAdd'

class App extends React.Component {
    render() {
        return (
            <div >
                {this.props.isAuthenticated && <Header />}
                <Switch>
                    <Route exact path="/" component={ Start } />
                    <Route path="/login" component={ Login } />
                    <Route path="/register" component={ Register } />
                    <Route exact path="/view" component={ View } />
                    <Route path="/view/add" component={ ViewAdd } />

                    {/* <Route path="add" component={ Add } /> */}
                    {/* <PrivateRoute path="/view" isAuthenticated={ props.isAuthenticated } component={ View } /> */}
                </Switch>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default withRouter(connect(mapStateToProps, null)(App));
