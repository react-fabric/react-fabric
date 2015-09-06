import React, { PropTypes } from 'react'
import cx from 'classnames'

export default class ChoiceField extends React.Component {
  static displayName = 'ChoiceField'
  static propTypes = {
    type: PropTypes.oneOf([
      'checkbox',
      'radio'
    ]).isRequired,
    children: PropTypes.element,
    onChange: PropTypes.func,
    checked: PropTypes.bool
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

  render() {
    const {
      type,
      children,
      onChange,
      checked
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
        checked={checked} />
        <label className="ms-ChoiceField-field" htmlFor={inputId}>
          <span className="ms-Label">{children}</span>
        </label>
      </div>
    )
  }
}
