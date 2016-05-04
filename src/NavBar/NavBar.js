import React, { PropTypes } from 'react'
import cx from 'classnames'

import Icon from '../Icon'
import NavBarItem from './NavBarItem.js'

import fabricComponent from '../fabricComponent.js'

import style from './NavBar.scss'

// TODO make NavBar less suck

@fabricComponent(style)
class NavBar extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    titleClassName: PropTypes.string,
    children: PropTypes.node,
    styles: PropTypes.object
  };
  static defaultProps = {
    items: []
  }

  constructor() {
    super()

    this.state = {
      isMenuOpen: false
    }
  }

  _toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    const { title, titleClassName, children, ...props } = this.props

    return (
      <div data-fabric="NavBar" {...props} styleName="ms-NavBar">
        <div onClick={::this._toggleMenu}
          styleName={cx('ms-NavBar-openMenu', {
            'is-open': this.state.isMenuOpen
          })}>
          <Icon glyph="menu" />
        </div>

        { title && <div className={titleClassName} styleName="ms-NavBar-title">
          { title }
        </div> }

        <ul styleName="ms-NavBar-items">
          { children }
        </ul>
      </div>
    )
  }
}
NavBar.Item = NavBarItem

export default NavBar
