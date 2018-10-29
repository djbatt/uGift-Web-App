// Redux Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Page Imports
import NotFound from './components/pages/404/404';
import Home from './components/pages/home/home';
import Dashboard from './components/pages/dashboard/dashboard';

// Redux Imports
import { Provider } from 'react-redux';
import store from './components/util/store/index';

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Switch>
              <Route path='/dashboard' exact={false} component={Dashboard}/>
              <Route path='/' exact={true} component={Home} />
              <Route component={NotFound} />
            </Switch>
        </Router>
      </Provider>
    )
  }
}
