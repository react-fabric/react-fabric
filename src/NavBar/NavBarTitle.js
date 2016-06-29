import React from 'react'

import fabricComponent from '../fabricComponent'

import style from './NavBar.scss'

const NavBarTitle = ({ children, ...props }) => (
  <div {...props} styleName="ms-NavBar-title">
    { children }
  </div>
)
NavBarTitle.propTypes = {
  children: React.PropTypes.node
}

export default fabricComponent(NavBarTitle, style)
