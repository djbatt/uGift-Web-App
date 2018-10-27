// Redux Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Page Imports
import NotFound from './components/pages/404/404';
import Home from './components/pages/home/home';
import Dashboard from './components/pages/dashboard/dashboard';
import Login from './components/pages/login/login';

// Redux Imports
import { Provider } from 'react-redux';
import store from './components/util/store/index';

// Okta Imports
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';
require('dotenv').config()


function AuthHandler({ history }) {
  history.push('/login');
}

console.log(process.env.REACT_APP_OKTA_ISSUER)

const config = {
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: process.env.REACT_APP_OKTA_CLIENTID
}

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri} onAuthRequired={AuthHandler}>
            <Switch>
              <Route path='/dashboard' exact={false} component={Dashboard} />
              <Route path='/' exact={true} component={Home} />
              <Route component={NotFound} />
              <Route path='/login' render={() => <Login baseUrl={process.env.REACT_APP_OKTA_BASEURL} />} />
              <Route path='/implicit/callback' component={ImplicitCallback} />
            </Switch>
          </Security>
        </Router>
      </Provider>
    )
  }
}
