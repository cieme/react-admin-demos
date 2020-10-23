import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class NavigationBar extends Component {
  static defaultProps = {
    title: '微信',
    leftIcon: true,
    rightIcon: false,
    leftIconType: 'back'
  }
  static propTypes = {
    title: PropTypes.string,
    leftIcon: PropTypes.bool,
    rightIcon: PropTypes.bool,
    leftIconType: PropTypes.string
  } 
  constructor() {
    super()

    this.state = {
      
    }
  }
  render() {
    const {
      title,
      leftIcon,
      rightIcon,
      leftIconType
    } = this.props

    const getIconClass = (leftIconType) => {
      let iconClass = "iconfont "
      if (leftIconType === 'back') {
        iconClass += 'icondirection-left'
      }
      return iconClass
    }
    return (
      <div className="navBar">
        <div className="navBar-fixed align-items">
          <div className="navBar-icon">
            {
              leftIcon ? (<div className={getIconClass(leftIconType)}></div>) : null
            }
          </div>
          <div className="navBar-title flex-1 align-items justify-center">
            {/* <div className="navBar-icon prefix-icon"></div> */}
            <div>{title}</div>
          </div>
          <div className="navBar-icon">
            {
              rightIcon ? (<div className="iconfont icongengduo"></div>) : null
            }
          </div>
        </div>
      </div>
    )
  }
}