import React from 'react'
import cx from 'classnames'

import Icon from '../Icon'
import NavBarItem from './NavBarItem.js'
import NavBarLink from './NavBarLink.js'
import NavBarTitle from './NavBarTitle.js'

import fabricComponent, { isFabricComponent } from '../fabricComponent.js'

import style from './NavBar.scss'

const scanChildren = children => React.Children.toArray(children).reduce((r, child) => {
  if (isFabricComponent(child, NavBarItem, NavBarLink)) {
    r.items.push(child)
  }
  if (isFabricComponent(child, NavBarTitle)) {
    r.title = child // eslint-disable-line no-param-reassign
  }
  return r
}, { title: null, items: [] })

@fabricComponent(style)
class NavBar extends React.Component {
  static propTypes = {
    title: React.PropTypes.node,
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
        if (!isFabricComponent(propValue[key], NavBarItem, NavBarLink, NavBarTitle)) {
          return new Error(
            `Invalid prop '${propFullName}' supplied to '${componentName}'. Must be one of
            NavBar.Item, NavBar.Link or NavBar.Title`
          )
        }
        if (propValue.filter(value => isFabricComponent(value, NavBarTitle)).length > 1) {
          return new Error(
            `Multiple NavBar.Title props supplied to '${componentName}'. Maximal one is allowed.`
          )
        }
        return null
      })
    ]),
    openMenu: React.PropTypes.func,
    closeMenu: React.PropTypes.func,
    isMenuOpen: React.PropTypes.bool,
    styles: React.PropTypes.object
  };
  static defaultProps = {
    isMenuOpen: false,
  };

  _closeMenu() {
    const { closeMenu, isMenuOpen } = this.props

    if (isMenuOpen) {
      if (closeMenu) { closeMenu() }
    }
  }

  _openMenu() {
    const { openMenu } = this.props

    if (openMenu) { openMenu() }
  }

  render() {
    const { children, isMenuOpen, ...props } = this.props
    const { title, items } = scanChildren(children)

    return (
      <div data-fabric="NavBar" {...props}
        onClick={::this._closeMenu}
        styleName={cx('ms-NavBar', { 'is-open': isMenuOpen })}>
        { items.length > 0 && <div onClick={::this._openMenu}
          styleName={cx('ms-NavBar-openMenu', {
            'is-open': isMenuOpen
          })}>
          <Icon glyph="menu" />
        </div> }

        { title }

        <ul styleName="ms-NavBar-items">
          { items }
        </ul>
      </div>
    )
  }
}
NavBar.Item = NavBarItem
NavBar.Link = NavBarLink
NavBar.Title = NavBarTitle

export default NavBar
