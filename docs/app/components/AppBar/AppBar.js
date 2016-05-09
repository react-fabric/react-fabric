import React from 'react'
import cssm from 'react-css-modules'

import { IndexLink } from 'react-router'

import NavBar from 'react-fabric/NavBar'

import style from './AppBar.scss'

class AppBar extends React.Component {
  constructor() {
    super()

    this.state = {
      isMenuOpen: false
    }
  }

  _onOpenMenu() {
    this.setState({ isMenuOpen: true })
  }

  _onCloseMenu() {
    this.setState({ isMenuOpen: false })
  }

  render() {
    return (
      <NavBar styleName="app-bar"
        isMenuOpen={this.state.isMenuOpen}
        openMenu={::this._onOpenMenu}
        closeMenu={::this._onCloseMenu}>
        <NavBar.Title styleName="title">
          <IndexLink styleName="title-link" to="/">react-fabric</IndexLink>
        </NavBar.Title>
        <NavBar.Link>
          <IndexLink to="/getting-started">Getting Started</IndexLink>
        </NavBar.Link>
        <NavBar.Link>
          <IndexLink to="/components">Components</IndexLink>
        </NavBar.Link>
        <NavBar.Link right>
          <a href="https://github.com/kmees/react-fabric"
            target="_blank">
            <img styleName="icon" src="images/GitHub-Mark-32px.png" />
          </a>
        </NavBar.Link>
      </NavBar>
    )
  }
}
AppBar.propTypes = {
  styles: React.PropTypes.object
}

export default cssm(AppBar, style)
