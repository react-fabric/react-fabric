import React from 'react'

import AppBar from '../../components/AppBar'

require('../../global.js')

const Layout = ({ children }) => (
  <div>
    <AppBar fixed />
    { children }
  </div>
)
Layout.propTypes = {
  children: React.PropTypes.node
}

export default Layout
