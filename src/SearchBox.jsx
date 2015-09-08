import React, { PropTypes} from 'react'
import cx from 'classnames'

export default class SearchBox extends React.Component  {
  static displayName = 'SearchBox'
  static propTypes = {
    label: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.element,
    ]),
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
  }

  _onInputFocus() {
    this.setState({
      ...this.state,
      isActive: true,
    })
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
          onFocus={this._onInputFocus} />
        <label className="ms-SearchBox-label" style={{
          display: this.state.isActive || this.state.value ? 'none' : '',
        }}>
          <i className="ms-SearchBox-icon ms-Icon ms-Icon--search" />
          {label}
        </label>
        <button className="ms-SearchBox-closeButton" onClick={this._onClose}>
          <i className="ms-Icon ms-Icon--x" />
        </button>
      </div>
    )
  }
}
