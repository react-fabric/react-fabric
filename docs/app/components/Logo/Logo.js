/* eslint-disable max-len */
import React from 'react'
import cssm from 'react-css-modules'

import paths from './paths.js'

import style from './Logo.scss'

const Logo = ({ fill, ...props }) => (
  <svg {...props} styleName="logo" viewBox="0 0 256 233">
    <g stroke="none" fill={fill} fillRule="evenodd">
      <path d={paths.react} id="react"></path>
      <path d={paths.office} id="office"></path>
    </g>
  </svg>
)
Logo.propTypes = {
  fill: React.PropTypes.string
}
Logo.defaultProps = {
  fill: '#D83B01'
}

export default cssm(Logo, style)
