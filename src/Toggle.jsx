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
  }

  render() {
    const { onLabel, offLabel, description } = this.props

    return (
      <div className="ms-Toggle">
        {
          description ? <span className="ms-Toggle-description">
            {description}
          </span> : null
        }
        <input type="checkbox" className="ms-Toggle-input" />
        <label className="ms-Toggle-field">
          <span className="ms-Label ms-Label--on">{onLabel}</span>
          <span className="ms-Label ms-Label--off">{offLabel}</span>
        </label>
      </div>
    )
  }
}
