import React from 'react'
import fabricComponent from 'fabric/decorator'

import style from './Dialog.scss'

const DialogSubtext = ({ className, children }) => (
  <p styleName="ms-Dialog-subText" className={className}>{ children }</p>
)
DialogSubtext.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
}

export default fabricComponent(DialogSubtext, style)
