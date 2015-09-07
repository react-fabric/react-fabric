import React, { PropTypes } from 'react'

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
    onChange: PropTypes.func
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
      id,
      onChange
    } = this.props

    const inputId = `${id}_input`

    return (
      <div className="ms-Toggle" id={id}>
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
