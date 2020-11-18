import React, { Component, Fragment } from 'react'

import Tabbar from '@package/Tabbar';
import NavigationBar from '@package/NavigationBar/index'

export default function TabbarHoc(WrapComponent) {
  return class Model extends Component {
    render() {
      return (
        <Fragment>
          <NavigationBar />
          <WrapComponent />
          <Tabbar />
        </Fragment>
      )
    }
  }
}
