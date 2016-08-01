import React from 'react'
import cx from 'classnames'

import fabricComponent from '../fabricComponent'

import style from './NavBar.scss'

const NavBarItem = ({ children, right, styles, ...props }) => (
  <li {...props}
    styleName={cx('ms-NavBar-item', {
      'ms-NavBar-item--right': right
    })}>
    { children }
  </li>
)
NavBarItem.propTypes = {
  children: React.PropTypes.node,
  right: React.PropTypes.bool
}

export default fabricComponent(NavBarItem, style)
