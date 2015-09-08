import React, { PropTypes } from 'react'
import cx from 'classnames'

export default class Toggle extends React.Component  {
  static displayName = 'Toggle'
  static propTypes = {
    onLabel: PropTypes.string,
    offLabel: PropTypes.string,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    id: PropTypes.string,
    onChange: PropTypes.func,
    textLeft: PropTypes.bool
  }

  constructor(props) {
    super()

    this.state = {
      id: props.id || `Toggle-${this.constructor.instanceCount}`
    }

    this.constructor.instanceCount++
  }

  static instanceCount = 0

  render() {
    const {
      onLabel,
      offLabel,
      description,
      onChange,
      textLeft
    } = this.props

    const inputId = `${this.state.id}_input`

    return (
     <div id={this.state.id} className={cx(
       'ms-Toggle', {
         'ms-Toggle--textLeft': textLeft
       }
     )}>
        {
          description ? <span className="ms-Toggle-description">
            {description}
          </span> : null
        }
        <input className="ms-Toggle-input" id={inputId} onChange={onChange} type="checkbox" />
        <label className="ms-Toggle-field" htmlFor={inputId}>
          <span className="ms-Label ms-Label--on">{onLabel}</span>
          <span className="ms-Label ms-Label--off">{offLabel}</span>
        </label>
      </div>
    )
  }
}
