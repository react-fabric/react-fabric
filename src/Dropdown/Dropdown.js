import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'

import Label from '../Label'
import Icon from '../Icon'
import events from '../util/events'
import fabricComponent from '../fabricComponent'

import style from './Dropdown.scss'

const valuePropType = React.PropTypes.oneOfType([
  React.PropTypes.number,
  React.PropTypes.string
])

@fabricComponent(style)
class Dropdown extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    id: React.PropTypes.string,
    label: React.PropTypes.node,
    name: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    options: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label: React.PropTypes.string,
        value: valuePropType
      })
    ).isRequired,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    textLeft: React.PropTypes.bool,
    value: valuePropType
  };

  static defaultProps = {
    active: false,
    disabled: false,
    required: false,
    textLeft: false,
    options: []
  };

  componentWillUpdate(nextProps) {
    if (!this.props.active && nextProps.active) {
      events.addEventsToDocument({ click: this.handleDocumentClick })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active && !this.props.active) {
      events.removeEventsFromDocument({ click: this.handleDocumentClick })
    }
  }

  componentWillUnmount() {
    if (this.props.active) {
      events.removeEventsFromDocument({ click: this.handleDocumentClick })
    }
  }

  getSelectedOption = () => {
    const { options, value } = this.props

    return options.filter(option => option.value === value)[0]
  }

  handleMouseDown = (event) => {
    const { onFocus, disabled } = this.props

    events.pauseEvent(event)

    if (!disabled) {
      if (onFocus) { onFocus(event) }
    }
  }

  handleSelect = (option, event) => {
    const { onBlur, onChange, disabled } = this.props

    if (onBlur) { onBlur(event) }

    if (!disabled) {
      if (onChange) { onChange(option, event) }
    }
  }

  handleDocumentClick = (event) => {
    const { active, onBlur } = this.props

    if (active && !events.targetIsDescendant(event, ReactDOM.findDOMNode(this))) {
      if (onBlur) { onBlur(event) }
    }
  }

  renderItem(option, i) {
    const styleName = cx('ms-Dropdown-item', {
      'is-selected': option.value === this.props.value
    })
    const handleSelect = this.handleSelect.bind(this, option.value)

    return (
      <li key={i}
        styleName={styleName}>
        <div onMouseDown={handleSelect}>
          { option.label }
        </div>
      </li>
    )
  }

  render() {
    const {
      className,
      disabled,
      label,
      name,
      onFocus,
      options,
      placeholder,
      required,
      value,
      ...props
    } = this.props

    const selected = this.getSelectedOption()
    const styleName = cx('ms-Dropdown', {
      'ms-Dropdown--textLeft': this.props.textLeft,
      'is-open': this.props.active,
      'is-disabled': this.props.disabled
    })

    return (
      <div data-fabric="Dropdown"
        styleName={styleName}
        className={className}>
        { label && <Label styleName="ms-Label"
          htmlFor=""
          onClick={onFocus}
          required={required}
          disabled={disabled}>
          { label }
        </Label> }
        <div styleName="ms-Dropdown-inner">
          <Icon styleName="ms-Dropdown-caretDown" glyph="caretDown" />
          <select {...props}
            styleName="ms-Dropdown-select"
            name={name}
            value={value}>
            { options.map((option, i) => (
              <option key={i} value={option.value}>{option.label}</option>
              )) }
          </select>
          <span styleName="ms-Dropdown-title" onMouseDown={this.handleMouseDown}>
            { selected ? selected.label : placeholder }
          </span>
          <ul styleName="ms-Dropdown-items">
            { options.map(::this.renderItem) }
          </ul>
        </div>
      </div>
    )
  }
}

export default Dropdown
