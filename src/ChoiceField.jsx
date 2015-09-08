import React, { PropTypes } from 'react'
import cx from 'classnames'

export default class ChoiceField extends React.Component {
  static displayName = 'ChoiceField'
  static propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    name: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.oneOf([
      'checkbox',
      'radio',
    ]).isRequired,
    value: PropTypes.string,
  }
  static defaultProps = {
    type: 'checkbox',
  }

  constructor(props) {
    super()

    this.state = {
      id: props.id || `ChoiceField-${this.constructor.instanceCount}`,
    }

    this.constructor.instanceCount++
  }

  static instanceCount = 0

  render() {
    const {
      checked,
      label,
      name,
      onChange,
      type,
      value,
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
        name={name}
        value={value} />
        <label className="ms-ChoiceField-field" htmlFor={inputId}>
          <span className="ms-Label">{label}</span>
        </label>
      </div>
    )
  }
}
