import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../store/index'

// hoc
import TabbarHoc from '../hoc/tabbar'
// import PageHoc from '../hoc/page'

// component
import Index from '../views/Index'
import Mine from '../views/Mine'
import AuthRoute from '../utils/authRoute'
export default class AppRouter extends Component {
  // getUserConfirmation = (message, callback) => {
  //   const allowTransition = window.confirm(message)
  //   callback(message)
  // }
  render() {
    // const message = this
    return (
      <Provider store={store}>
        {/* getUserConfirmation={ this.getUserConfirmation(message, (e) => console.log(e)) } */}
        <Router>
          <Route exact={true} path="/" component={
            TabbarHoc(Index)
          } >
          </Route>

          <AuthRoute exact={true} path="/mine" component={
            TabbarHoc(Mine)
          }></AuthRoute>
        </Router>
      </Provider>
    )
  }
}
