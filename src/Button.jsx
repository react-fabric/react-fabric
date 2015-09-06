import React, { PropTypes } from 'react'
import cx from 'classnames'

export default class Button extends React.Component  {
  static displayName = 'Button'
  static propTypes = {
    disabled: PropTypes.bool
  }

  render() {
    const { disabled } = this.props

    return (
      <button className={cx(
        'ms-Button', {
          'is-disabled': disabled
        }
      )}>
        <span className="ms-Button-label">{this.props.children}</span>
      </button>
    )
  }
}
