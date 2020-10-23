import React, { Component } from 'react'
import './index.scss'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="navBar-fixed">
          <div className="icon"></div>
          <div className="navBar-title">
            <div className="prefix-icon"></div>
            <div>标题</div>
          </div>
          <div className="icon"></div>
        </div>
      </div>
    )
  }
}