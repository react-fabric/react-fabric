import React from 'react'
import cx from 'classnames'

import Label from '../Label'
import fabricComponent from '../fabricComponent'
import isDefined from '../util/isDefined.js'

import style from './TextField.scss'

const TextField = ({
  active,
  className,
  description,
  disabled,
  id,
  label,
  multiline,
  name,
  placeholder,
  required,
  underlined,
  value,
  ...props
}) => {
  const inputId = `TextField_${id || name || Date.now()}_input`
  const input = React.createElement(multiline ? 'textarea' : 'input', {
    ...props,
    active,
    disabled,
    id: inputId,
    name,
    styleName: 'ms-TextField-field',
    value: isDefined(value) ? value : ''
  })
  const showLabel = placeholder ?
    !active && !value : true

  return (
    <div data-fabric="TextField"
      id={id}
      className={className}
      styleName={cx('ms-TextField', {
        'ms-TextField--underlined': underlined,
        'ms-TextField--multiline': multiline,
        'ms-TextField--placeholder': placeholder,
        'is-disabled': disabled,
        'is-required': required
      })}>
      { label && showLabel && <Label styleName="ms-Label" htmlFor={inputId}>{label}</Label> }
      { input }
      { description && <span styleName="ms-TextField-description">
        { description }
      </span> }
    </div>
  )
}
TextField.propTypes = {
  active: React.PropTypes.bool,
  className: React.PropTypes.string,
  description: React.PropTypes.node,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  label: React.PropTypes.node,
  multiline: React.PropTypes.bool,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.bool,
  required: React.PropTypes.bool,
  underlined: React.PropTypes.bool,
  value: React.PropTypes.string
}
TextField.defaultProps = {
  active: false,
  disabled: false,
  multine: false,
  placeholder: false,
  required: false,
  underlined: false
}

export default fabricComponent(TextField, style)
