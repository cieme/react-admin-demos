import React, { Component, Fragment, } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { tabbar } from '@router/tabbar'
import './index.scss'
export default class Tabbar extends Component {

  render() {
    return (
      <div className="tabbar">
        <div className="tabbar-list align-center justify-space-between">
          {/* <div className="tabbar-item">首页</div>
          <div className="tabbar-item">通讯录</div>
          <div className="tabbar-item">发现</div>
          <div className="tabbar-item">我</div> */}
          <Router>
            {tabbar.map((item, index) => {
              return <Fragment key={`tabbar${index}`}><Link to={item.path} className="tabbar-item"><div>{item.text}</div></Link></Fragment>
            })}
          </Router>
        </div>
      </div>
    )
  }
}
