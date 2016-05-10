import React, { PropTypes } from 'react'
import cx from 'classnames'

import Icon from '../Icon'
import fabricComponent from '../fabricComponent.js'

import style from './Button.scss'

const BUTTON_TYPES = [
  'command',
  'compound',
  'hero',
  'primary'
]

const Button = ({ children, type, description, disabled, submit, glyph, ...props }) => (
  <button {...props}
    type={submit ? 'submit' : 'button'}
    styleName={cx('ms-Button', {
      'is-disabled': disabled,
      'ms-Button--primary': type === 'primary',
      [`ms-Button--${type}`]: type,
    })}>
    <span styleName="ms-Button-icon">
      { glyph && <Icon styleName="ms-Icon" glyph={glyph} /> }
    </span>
    <span styleName="ms-Button-label">
      {children}
    </span>
    <span styleName="ms-Button-description">
      {description}
    </span>
  </button>
)
Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(BUTTON_TYPES),
  description: PropTypes.node,
  disabled: PropTypes.bool,
  glyph: PropTypes.string,
  submit: PropTypes.bool,
}

export default fabricComponent(Button, style)
