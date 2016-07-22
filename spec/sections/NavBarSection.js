import React from 'react'

import NavBar from '../../src/NavBar'

const IndexLink = ({ to, children, ...props }) => (
  <a {...props} href={to}>{children}</a>
)
IndexLink.propTypes = {
  children: React.PropTypes.node,
  to: React.PropTypes.string
}

const NavBarSection = () => (
  <NavBar>
    <div>Foo</div>
    <div>Foo</div>
  </NavBar>
)

export default NavBarSection
