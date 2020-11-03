import React, { Component } from 'react'
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../store/index'

// hoc
import TabbarHoc from '../hoc/tabbar'
// import PageHoc from '../hoc/page'

// component
import Index from '../views/Index'
import Mine from '../views/Mine'



export default class AppRouter extends Component {
  getUserConfirmation = (message, callback) => {
    // const allowTransition = window.confirm(message)
    callback(message)
  }
  render() {
    const message = this
    return (
      <Provider store={store}>
        <Router getUserConfirmation={ this.getUserConfirmation(message, (e) => console.log(e)) }>
          <Route path="/index" component={
            TabbarHoc(Index)
          } >
          </Route>
          <Route path="/mine" component={
            TabbarHoc(Mine)
          } >
          </Route>
        </Router>
      </Provider>
    )
  }
}