import React, { Component, Fragment } from 'react'

import NavigationBar from '../../package/NavigationBar/index'

export default function PagerHoc(WrapComponent) {
  return class Model extends Component {
    render() {
      return (
        <Fragment>
          <NavigationBar />
          <WrapComponent />
        </Fragment>
      )
    }
  }
} 