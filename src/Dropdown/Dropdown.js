import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'

import Label from '../Label'
import Icon from '../Icon'
import events from '../util/events'
import fabricComponent from '../fabricComponent.js'

import style from './Dropdown.scss'

@fabricComponent(style)
class Dropdown extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    initialValue: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]),
    label: React.PropTypes.node,
    name: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    options: React.PropTypes.array.isRequired,
    textLeft: React.PropTypes.bool,
    value: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ])
  };

  static defaultProps = {
    active: false,
    disabled: false,
    required: false,
    textLeft: false
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
    const { options, value, initialValue } = this.props

    for (const option of options) {
      if (option.value === (value === undefined ? initialValue : value)) {
        return option
      }
    }

    return null
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
      options,
      placeholder,
      required
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
        { label && <Label styleName="ms-Label" required={required} disabled={disabled}>
          { label }
        </Label> }
        <div styleName="ms-Dropdown-inner">
          <Icon styleName="ms-Dropdown-caretDown" glyph="caretDown" />
          <select name={name} styleName="ms-Dropdown-select">
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
