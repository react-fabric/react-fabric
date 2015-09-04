import React, { PropTypes } from 'react'
import cx from 'classnames'

import Label from './Label'

export default class TextField extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.node,
    multiline: PropTypes.bool,
    placeholder: PropTypes.bool,
    required: PropTypes.bool,
    underlined: PropTypes.bool
  }

  constructor() {
    super()

    this.state = {
      showLabel: true,
      isActive: false
    }
  }

  _onInputChange(e) {
    this.setState({
      ...this.state,
      showLabel: e.target.value === ''
    })
  }

  _onInputFocus() {
    this.setState({
      ...this.state,
      isActive: true
    })
  }

  _onInputBlur() {
    this.setState({
      ...this.state,
      isActive: false
    })
  }

  _createLabel({disabled, label: content, required}) {
    let label

    if (content === void 0 || content === null) {
      label = null
    } else if (content._isReactElement && content.type === Label) {
      label = React.cloneElement(content, { required, disbled })
    } else {
      label = <Label required={required} disabled={disabled}>{content}</Label>
    }

    return label
  }

  render() {
    const {
      description,
      disabled,
      multiline,
      placeholder,
      underlined
    } = this.props

    const label = this.state.showLabel || !placeholder ? this._createLabel(this.props) : null

    const input = React.cloneElement(multiline ? <textarea /> : <input />, {
      className: 'ms-TextField-field',
      onChange: this._onInputChange.bind(this),
      onFocus: this._onInputFocus.bind(this),
      onBlur: this._onInputBlur.bind(this)
    })

    return (
       <div className={cx(
         'ms-TextField', {
           'ms-TextField--placeholder': placeholder,
           'ms-TextField--underlined': underlined,
           'is-active': underlined && this.state.isActive,
           'is-disabled': disabled
         }
       )}>
        {label}
        {input}
        <span className="ms-TextField-description">{description}</span>
      </div>
    )
  }
}
