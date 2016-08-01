import React from 'react'
import cx from 'classnames'

import NavBarItem from './NavBarItem.js'
import fabricComponent from '../fabricComponent'

import style from './NavBar.scss'

const NavBarLink = ({ children, styles, ...props }) => (
  <NavBarItem {...props}>
    { React.Children.map(children, child => (child ? (
       React.cloneElement(child, {
         className: cx(child.props.className, style['ms-NavBar-link'])
       })
    ) : null)) }
  </NavBarItem>
)
NavBarLink.propTypes = {
  ...NavBarItem.propTypes
}

export default fabricComponent(NavBarLink, style)
