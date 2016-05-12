import React from 'react'
import cx from 'classnames'

import onlyWhenTypeIs from './onlyWhenTypeIs'
import Icon from '../Icon'
import glyphPropType from '../Icon/glyphPropType.js'
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
  children: React.PropTypes.node,
  type: React.PropTypes.oneOf(BUTTON_TYPES),
  description: onlyWhenTypeIs('compound', React.PropTypes.node),
  disabled: React.PropTypes.bool,
  glyph: glyphPropType,
  submit: React.PropTypes.bool,
}

export default fabricComponent(Button, style)
