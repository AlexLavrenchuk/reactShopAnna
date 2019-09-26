import React, { Component } from "react";

import { connect } from "react-redux";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import MainTemplate from './components/pages/mainPage/MainTemplate';
import Login from './components/pages/authPage/Login';
import ErrorPage from './components/pages/errorPage/ErrorPage';


export const history = createBrowserHistory();

class App extends Component {
   
  protectedRoute(Component) {
    console.log(localStorage.getItem("token"));
    return (localStorage.getItem("token")) ? (
      <Component />
    ) : (
      <Redirect to='/login' />
    );
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact path='/'
            render={() => this.protectedRoute(MainTemplate)}
          />
          <Route
            path='/market'
            render={() => this.protectedRoute(MainTemplate)}
          />
          <Route
            path='/cart'
            render={() => this.protectedRoute(MainTemplate)}
          />
          
          <Route
            path='/login'
            render={() => <Login />}
          />

          <Route render={() => <ErrorPage />} />
        </Switch>
      </Router>
    );
  }
  
}

export default connect(
  state => ({
    a: state
  }),
  dispatch => ({

  })
)(App);
