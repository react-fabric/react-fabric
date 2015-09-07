import React, { PropTypes } from 'react'
import cx from 'classnames'

export default class ChoiceField extends React.Component {
  static displayName = 'ChoiceField'
  static propTypes = {
    type: PropTypes.oneOf([
      'checkbox',
      'radio'
    ]).isRequired,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    name: PropTypes.string
  }
  static defaultProps = {
    type: 'checkbox'
  }

  constructor(props) {
    super()

    this.state = {
      id: props.id || `ChoiceField-${this.constructor.instanceCount}`
    }

    this.constructor.instanceCount++
  }

  static instanceCount = 0

  render() {
    const {
      type,
      label,
      onChange,
      checked,
      name
    } = this.props
    const inputId = `${this.state.id}_input`

    return (
      <div id={this.state.id} className={cx(
        'ms-ChoiceField'
      )}>
      <input className="ms-ChoiceField-input"
        id={inputId}
        type={type}
        onChange={onChange}
        checked={checked}
        name={name} />
        <label className="ms-ChoiceField-field" htmlFor={inputId}>
          <span className="ms-Label">{label}</span>
        </label>
      </div>
    )
  }
}
