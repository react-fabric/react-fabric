import React from 'react'
import elementType from 'react-prop-types/lib/elementType'

import fabricComponent from '../fabricComponent.js'

import style from './Link.scss'

const Link = ({
  children,
  componentClass: Component,
  ...props
}) => (
  <Component {...props}
    data-fabric="Link"
    styleName={'ms-Link'}>
    { children }
  </Component>
)
Link.propTypes = {
  children: React.PropTypes.node,
  componentClass: elementType,
  styles: React.PropTypes.object
}
Link.defaultProps = {
  componentClass: 'a'
}

export default fabricComponent(Link, style)
