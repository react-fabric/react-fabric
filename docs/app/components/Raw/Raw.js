import React from 'react'
import cssm from 'react-css-modules'

import style from './Raw.scss'

const Raw = ({ className, html, indent }) => (
  <div styleName={indent ? 'raw-indent' : 'raw'}
    className={className}
    dangerouslySetInnerHTML={{ __html: html }} />
)
Raw.propTypes = {
  className: React.PropTypes.string,
  indent: React.PropTypes.bool,
  html: React.PropTypes.string.isRequired
}
Raw.defaultProps = {
  className: '',
  indent: false
}

export default cssm(Raw, style)
