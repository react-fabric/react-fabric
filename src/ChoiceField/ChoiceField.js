import React from 'react'

import Label from '../Label'
import fabricComponent from '../fabricComponent.js'

import style from './ChoiceField.scss'

const ChoiceField = ({
  children, className, disabled, groupId, id, label, name, required, type, ...props
}) => {
  const groupIdSuffix = typeof idx === 'undefined' ? '' : `[${groupId}]`
  const inputId = `ChoiceField_${id || name || Date.now()}${groupIdSuffix}_input`

  return (
    <div data-fabric="ChoiceField"
      id={id}
      styleName="ms-ChoiceField"
      className={className}>
      <input {...props}
        id={inputId}
        name={name}
        type={type}
        disabled={disabled}
        styleName="ms-ChoiceField-input" />
      <label styleName="ms-ChoiceField-field"
        htmlFor={inputId}>
        <Label componentClass="span" styleName="ms-Label" required={required}>{label}</Label>
        { children }
      </label>
    </div>
  )
}
ChoiceField.propTypes = {
  checked: React.PropTypes.bool,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  defaultChecked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  groupId: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  id: React.PropTypes.string,
  label: React.PropTypes.node,
  name: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['radio', 'checkbox']).isRequired
}
ChoiceField.defaultProps = {
  defaultChecked: false,
  disabled: false,
  require: false,
  type: 'checkbox'
}

export default fabricComponent(ChoiceField, style)
