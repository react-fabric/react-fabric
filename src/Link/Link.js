import React from 'react'
import cx from 'classnames'
import isFunction from 'lodash/isFunction'

import fabricComponent from '../fabricComponent.js'

import style from './Link.scss'

const Link = ({ children, hero, styles, className: baseClassName, ...props }) => {
  const className = cx(baseClassName, styles['ms-Link'], {
    [styles['ms-Link--hero']]: hero
  })

  return isFunction(children) ?
    children({ className }) :
    <a {...props} className={className}>
      { children }
    </a>
}
Link.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.func
  ]),
  hero: React.PropTypes.bool,
  className: React.PropTypes.string,
  styles: React.PropTypes.object
}

export default fabricComponent(Link, style)
