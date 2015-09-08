import React, { PropTypes } from 'react'
import cx from 'classnames'

import FontIcon from './FontIcon'

const BUTTON_TYPES = [
  'command',
  'compound',
  'hero',
  'primary',
]

export default class Button extends React.Component  {
  static displayName = 'Button'
  static propTypes = {
    type: PropTypes.oneOf(BUTTON_TYPES),
    description: PropTypes.node,
    disabled: PropTypes.bool,
    iconName: PropTypes.string,
    submit: PropTypes.bool,
  }

  render() {
    const {
      children,
      description,
      disabled,
      iconName,
      submit,
      type,
      ...props,
    } = this.props

    return (
      <button type={submit ? 'submit' : 'button'} className={cx(
        'ms-Button', {
          'is-disabled': disabled,
          [`ms-Button--${type}`]: type,
        }
      )} {...props}>
        <span className="ms-Button-icon">
          { iconName ? <FontIcon name={iconName}/> : null }
        </span>
        <span className="ms-Button-label">
          {children}
        </span>
        <span className="ms-Button-description">
          {description}
        </span>
      </button>
    )
  }
}
