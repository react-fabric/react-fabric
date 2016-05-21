import React from 'react'

import Button from '../Button'
import fabricComponent from '../fabricComponent.js'

import style from './Dialog.scss'

const DialogAction = ({ children, className, ...props }) => (
  <Button {...props}
    styleName="ms-Button ms-Dialog-action"
    className={className}>
    { children }
  </Button>
)
DialogAction.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
}

export default fabricComponent(DialogAction, style)
