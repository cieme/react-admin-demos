import React, { Component } from 'react'
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import TabbarHoc from '../hoc/tabbar'
import PageHoc from '../hoc/page'

import Index from '../views/Index'

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Route path="/index" component={TabbarHoc(Index)} ></Route>
      </Router>
    )
  }
}