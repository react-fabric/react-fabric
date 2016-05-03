import React, { PropTypes } from 'react'
import { Link as RouterLink } from 'react-router'
import cx from 'classnames'
import FabricLink from 'react-fabric/Link'

const isExternal = (url = '') => /^http/.test(url)

const Link = ({ className, children, hero, target, to, ...props }) => {
  const link = isExternal(to) ?
    <a href={to} target={target || '_blank'} /> :
    <RouterLink to={to} target={target} />

  return (
    <FabricLink hero={hero}>
      { ({ className: linkClassName }) => React.cloneElement(link, {
        className: cx(className, linkClassName),
        ...props
      }, children) }
    </FabricLink>
  )
}
Link.propTypes = {
  ...FabricLink.propTypes,
  ...RouterLink.propTypes,
  children: PropTypes.node,
  className: PropTypes.string
}
Link.defaultProps = {
  ...RouterLink.defaultProps,
}

export default Link
