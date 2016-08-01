import React from 'react'

import fabricComponent from '../fabricComponent'

import style from './Dialog.scss'

const DialogTitle = ({
  children,
  className,
  styles,
    ...props
    }) => (
  <div {...props}
    styleName="ms-Dialog-header"
    className={className}>
    <p styleName="ms-Dialog-title">
      { children }
    </p>
  </div>
)
DialogTitle.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
}


export default fabricComponent(DialogTitle, style)
