import React, { PropTypes } from 'react'
import cx from 'classnames'

import Label from './Label'
import { isBlank } from './util'

export default class TextField extends React.Component {
  static displayName = 'TextField'
  static propTypes = {
    description: PropTypes.node,
    disabled: PropTypes.bool,
    label: PropTypes.node,
    multiline: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.bool,
    required: PropTypes.bool,
    underlined: PropTypes.bool,
    id: PropTypes.string
  }

  constructor(props) {
    super()

    this.state = {
      showLabel: true,
      isActive: false,
      id: props.id || `TextField-${TextField.instanceCount}`
    }

    TextField.instanceCount++
  }

  static instanceCount = 0

  _onInputChange(e) {
    this.setState({
      ...this.state,
      showLabel: e.target.value === ''
    })

    if (this.props.onChange) { this.props.onChange(e) }
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

  _createLabel() {
    const { disabled, label: content, required } = this.props
    const { showLabel, id } = this.state
    const style = showLabel ? null : { display: 'none' }

    const attributes = {
      required,
      disabled,
      style,
      htmlFor: `${id}_input`
    }

    let label
    if (isBlank(content)) {
      label = null
    } else if (content._isReactElement && content.type === Label) {
      label = React.cloneElement(content, attributes)
    } else {
      label = <Label {...attributes}>{content}</Label>
    }

    return label
  }

  render() {
    const {
      description: descriptionContent,
      disabled,
      multiline,
      placeholder,
      underlined
    } = this.props

    const label = this._createLabel()
    const input = React.cloneElement(multiline ? <textarea /> : <input />, {
      className: 'ms-TextField-field',
      onChange: this._onInputChange.bind(this),
      onFocus: this._onInputFocus.bind(this),
      onBlur: this._onInputBlur.bind(this),
      id: `${this.state.id}_input`
    })
    const description = !isBlank(descriptionContent) ? <span className="ms-TextField-description">
      {descriptionContent}
    </span> : null

    return (
       <div id={this.state.id} className={cx(
         'ms-TextField', {
           'ms-TextField--placeholder': placeholder,
           'ms-TextField--underlined': underlined,
           'is-active': underlined && this.state.isActive,
           'is-disabled': disabled
         }
       )}>
        {label}
        {input}
        {description}
      </div>
    )
  }
}
