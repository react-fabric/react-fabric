import React, { PropTypes } from 'react'
import cx from 'classnames'

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
    icon: PropTypes.string
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
      icon
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
        { icon ? <span className="ms-Button-icon">
            <i className={`ms-Icon ms-Icon--${icon}`}/>
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
