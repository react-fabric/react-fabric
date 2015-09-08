import React, { PropTypes } from 'react'
import cx from 'classnames'

import Label from './Label'

export default class TextField extends React.Component {
  static displayName = 'TextField'
  static propTypes = {
    description: PropTypes.node,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
    multiline: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.bool,
    required: PropTypes.bool,
    underlined: PropTypes.bool,
  }

  constructor(props) {
    super()

    this.state = {
      showLabel: true,
      isActive: false,
      id: props.id || `TextField-${TextField.instanceCount}`,
    }

    TextField.instanceCount++
  }

  static instanceCount = 0

  _onInputChange(e) {
    this.setState({
      ...this.state,
      showLabel: e.target.value === '',
    })

    if (this.props.onChange) { this.props.onChange(e) }
  }

  _onInputFocus() {
    this.setState({
      ...this.state,
      isActive: true,
    })
  }

  _onInputBlur() {
    this.setState({
      ...this.state,
      isActive: false,
    })
  }

  render() {
    const {
      description,
      disabled,
      label,
      multiline,
      name,
      placeholder,
      required,
      underlined,
    } = this.props
    const inputId = `${this.state.id}_input`

    const input = React.cloneElement(multiline ? <textarea /> : <input />, {
      className: 'ms-TextField-field',
      id: inputId,
      name,
      onBlur: this._onInputBlur.bind(this),
      onChange: this._onInputChange.bind(this),
      onFocus: this._onInputFocus.bind(this),
    })

    return (
       <div id={this.state.id} className={cx(
         'ms-TextField', {
           'ms-TextField--placeholder': placeholder,
           'ms-TextField--underlined': underlined,
           'is-active': underlined && this.state.isActive,
           'is-disabled': disabled,
         }
       )}>
        <Label style={this.state.showLabel ? {} : {display: 'none'}}
          required={required}
          disabled={disabled}
          htmlFor={inputId}>
          {label}
        </Label>
        {input}
        <span className="ms-TextField-description">
          {description}
        </span>
      </div>
    )
  }
}
