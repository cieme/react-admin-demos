import React, { Component } from 'react'
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../store/index'

// hoc
import TabbarHoc from '../hoc/tabbar'
// import PageHoc from '../hoc/page'

// component
import Index from '../views/Index'

export default class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/index" component={
            TabbarHoc(Index)
          } >
          </Route>
        </Router>
      </Provider>
    )
  }
}