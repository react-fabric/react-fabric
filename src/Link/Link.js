import React from 'react'
import elementType from 'react-prop-types/lib/elementType'

import fabricComponent from '../fabricComponent'

import style from './Link.scss'

const Link = ({
  children,
  componentClass: Component,
  styles,
  ...props
}) => (
  <Component data-fabric="Link"
    {...props}
    styleName={'ms-Link'}>
    { children }
  </Component>
)
Link.displayName = 'Link'
Link.propTypes = {
  children: React.PropTypes.node,
  componentClass: elementType
}
Link.defaultProps = {
  componentClass: 'a'
}

export default fabricComponent(Link, style)
