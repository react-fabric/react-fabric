import React, { PropTypes } from 'react'
import cx from 'classnames'

import FontIcon from './FontIcon'

export default class Button extends React.Component  {
  static displayName = 'Button'
  static propTypes = {
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    hero: PropTypes.bool,
    compound: PropTypes.bool,
    command: PropTypes.bool,
    type: PropTypes.string,
    description: PropTypes.node,
    iconName: PropTypes.string
  }

  render() {
    const {
      children,
      disabled,
      primary,
      hero,
      compound,
      command,
      type,
      description,
      iconName
    } = this.props

    return (
      <button type={type} className={cx(
        'ms-Button', {
          'is-disabled': disabled,
          'ms-Button--primary': primary,
          'ms-Button--hero': hero,
          'ms-Button--compound': compound,
          'ms-Button--command': command
        }
      )}>
        { iconName ? <span className="ms-Button-icon">
            <FontIcon name={iconName}/>
          </span> : null
        }
        {
          children ? <span className="ms-Button-label">
            {this.props.children}
          </span> : null
        }
        {
          description ? <span className="ms-Button-description">
            {description}
          </span> : null
        }
      </button>
    )
  }
}
