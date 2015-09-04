import React, { PropTypes } from 'react'
import cx from 'classnames'

import Label from './Label'

export default class TextField extends React.Component {
  static propTypes = {
    label: PropTypes.node,
    description: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.bool,
    multiline: PropTypes.bool,
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

  _createLabel(content, required) {
    let label

    if (content === void 0 || content === null) {
      label = null
    } else if (content._isReactElement && content.type === Label) {
      label = React.cloneElement(content, { required })
    } else {
      label = <Label required={required}>{content}</Label>
    }

    return label
  }

  render() {
    const {
      description,
      label: labelContent,
      required,
      placeholder,
      multiline,
      underlined
    } = this.props

    const label = this.state.showLabel || !placeholder ? this._createLabel(labelContent, required) : null

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
           'is-active': underlined && this.state.isActive
         }
       )}>
        {label}
        {input}
        <span className="ms-TextField-description">{description}</span>
      </div>
    )
  }

}
