import React from 'react'
import cssm from 'react-css-modules'

import { IndexLink } from 'react-router'

import NavBar from 'react-fabric/NavBar'

import style from './AppBar.scss'

const AppBar = () => (
  <NavBar styleName="app-bar">
    <NavBar.Item styleName="brand">
      <IndexLink styleName="ms-NavBar-link" to="/">react-fabric</IndexLink>
    </NavBar.Item>
    <NavBar.Item>
      <IndexLink styleName="ms-NavBar-link" to="/getting-started">Getting Started</IndexLink>
    </NavBar.Item>
    <NavBar.Item>
      <IndexLink styleName="ms-NavBar-link" to="/components">Components</IndexLink>
    </NavBar.Item>
    <NavBar.Item right>
      <a styleName="ms-NavBar-link"
        href="https://github.com/kmees/react-fabric"
        target="_blank">
        <img styleName="icon" src="images/GitHub-Mark-32px.png" />
      </a>
    </NavBar.Item>
  </NavBar>
)

export default cssm(AppBar, style)
