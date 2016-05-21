import React from 'react'

import Button from '../Button'
import fabricComponent from '../fabricComponent.js'

import style from './Dialog.scss'

const DialogAction = ({ children, onClick, primary, className }) => (
  <Button className={className}
    styleName="ms-Button ms-Dialog-action"
    primary={primary}
    onClick={onClick}>
    { children }
  </Button>
)
DialogAction.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  primary: React.PropTypes.bool
}

export default fabricComponent(DialogAction, style)
