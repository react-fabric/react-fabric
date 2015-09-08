import React, { PropTypes} from 'react'
import cx from 'classnames'

export default class SearchBox extends React.Component  {
  static displayName = 'SearchBox'
  static propTypes = {
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
  }

  constructor() {
    super()

    this.state = {
      isActive: false,
      value: '',
    }

    this._onClose = this._onClose.bind(this)
    this._onInputBlur = this._onInputBlur.bind(this)
    this._onInputChange = this._onInputChange.bind(this)
    this._onInputFocus = this._onInputFocus.bind(this)
    this._onInputKeyPress = this._onInputKeyPress.bind(this)
  }

  getValue() {
    return this.state.value
  }

  setValue(value) {
    this.setState({
      ...this.state,
      value: value,
    })
  }

  _onClose() {
    this.setState({
      ...this.state,
      isActive: false,
      value: '',
    })
  }

  _onInputBlur() {
    this.setState({
      ...this.state,
      isActive: false,
    })
  }

  _onInputChange(e) {
    this.setState({
      ...this.state,
      value: e.target.value,
    })

    if (this.props.onChange) { this.props.onChange(e) }
  }

  _onInputFocus() {
    this.setState({
      ...this.state,
      isActive: true,
    })
  }

  _onInputKeyPress(e) {
    const value = this.getValue()
    if (value && e.charCode === 13 /* Enter */ && this.props.onSearch) {
      this.props.onSearch(this.getValue())
    }
  }

  render() {
    const {
      label,
    } = this.props

    return (
      <div className={cx(
        'ms-SearchBox', {
          'is-active': this.state.isActive,
        }
      )}>
        <input className="ms-SearchBox-field"
          onBlur={this._onInputBlur}
          onChange={this._onInputChange}
          onFocus={this._onInputFocus}
          onKeyPress={this._onInputKeyPress}
          value={this.state.value} />
        <label className="ms-SearchBox-label" style={{
          display: this.state.isActive || this.state.value ? 'none' : '',
        }}>
          <i className="ms-SearchBox-icon ms-Icon ms-Icon--search" />
          {label}
        </label>
        <button className="ms-SearchBox-closeButton" onMouseDown={this._onClose}>
          <i className="ms-Icon ms-Icon--x" />
        </button>
      </div>
    )
  }
}
