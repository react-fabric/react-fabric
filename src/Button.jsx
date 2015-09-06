import React, { PropTypes } from 'react'
import cx from 'classnames'

export default class Button extends React.Component  {
  static displayName = 'Button'
  static propTypes = {
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    hero: PropTypes.bool,
    compound: PropTypes.bool
  }

  render() {
    const {
      disabled,
      primary,
      hero,
      compound
    } = this.props

    return (
      <button className={cx(
        'ms-Button', {
          'is-disabled': disabled,
          'ms-Button--primary': primary,
          'ms-Button--hero': hero,
          'ms-Button--compound': compound,
        }
      )}>
        <span className="ms-Button-label">{this.props.children}</span>
      </button>
    )
  }
}
