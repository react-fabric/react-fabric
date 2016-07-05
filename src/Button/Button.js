import React from 'react'
import cx from 'classnames'

import onlyWhen from '../propTypes/onlyWhen'
import Icon from '../Icon'
import { glyphType } from '../propTypes'
import fabricComponent from '../fabricComponent'
import invokeWhenNotDisabled from '../util/invokeWhenNotDisabled.js'

import style from './Button.scss'

const BUTTON_TYPES = [
  'command',
  'compound',
  'hero',
  'primary'
]

const Button = ({
  children,
  description,
  disabled,
  glyph,
  onClick,
  submit,
  type,
    ...props
}) => (
  <button data-fabric="Button"
    {...props}
    styleName={cx('ms-Button', {
      'is-disabled': disabled,
      [`ms-Button--${type}`]: type,
    })}
    type={submit ? 'submit' : 'button'}
    onClick={invokeWhenNotDisabled(disabled, onClick)}>
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
Button.displayName = 'Button'
Button.propTypes = {
  children: React.PropTypes.node,
  description: onlyWhen(
    ({ type }) => type === 'compound',
    'type is compound',
    React.PropTypes.node
  ),
  disabled: React.PropTypes.bool,
  glyph: glyphType,
  onClick: React.PropTypes.func,
  submit: React.PropTypes.bool,
  type: React.PropTypes.oneOf(BUTTON_TYPES),
}

export default fabricComponent(Button, style)
