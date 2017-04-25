import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Start from '../components/Start'
import Login from '../components/Login'
import Register from '../components/Register'

import Header from '../components/Header'

import View from '../components/View'
import ViewAdd from '../components/ViewAdd'

export default (
  <div>
    PLOP
    <Route exact path="/" component={ Start } />
    <Route path="/login" component={ Login } />
    <Route path="/register" component={ Register } />

    {/*<Route path="/view" component={ Header } />
    <Route path="/view" component={ View } />

    <Route path="/view/add" component={ Header } />
    <Route path="/view/add" component={ ViewAdd } />*/}
  </div>
);
