import React from 'react'
import cx from 'classnames'
import elementType from 'react-prop-types/lib/elementType'

import fabricComponent from '../fabricComponent.js'

import style from './Link.scss'

const Link = ({
  children,
  hero,
  componentClass: Component,
  ...props
}) => (
  <Component {...props}
    data-fabric="Link"
    styleName={cx('ms-Link', { ['ms-Link--hero']: hero })}>
    { children }
  </Component>
)
Link.propTypes = {
  children: React.PropTypes.node,
  componentClass: elementType,
  hero: React.PropTypes.bool,
  styles: React.PropTypes.object
}
Link.defaultProps = {
  componentClass: 'a'
}

export default fabricComponent(Link, style)
