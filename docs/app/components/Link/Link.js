import React, { PropTypes } from 'react'
import { Link as RouterLink } from 'react-router'
import FabricLink from 'react-fabric/Link'

const isExternal = (url = '') => /^http/.test(url)

const Link = ({ children, target, to, ...props }) => (
  isExternal(to) ? (
    <FabricLink {...props} href={to} target={target || '_blank'}>
      { children }
    </FabricLink>
  ) : (
    <FabricLink {...props} componentClass={RouterLink} to={to} target={target}>
      { children }
    </FabricLink>
  )
)
Link.propTypes = {
  ...FabricLink.propTypes,
  ...RouterLink.propTypes,
  children: PropTypes.node
}
Link.defaultProps = {
  ...RouterLink.defaultProps,
}

export default Link
