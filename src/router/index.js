import React, { Component } from 'react'
import { Route,  BrowserRouter as Router } from 'react-router-dom'

import Index from '../views/Index'

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Route path="/index" component={Index} ></Route>
      </Router>
    )
  }
}