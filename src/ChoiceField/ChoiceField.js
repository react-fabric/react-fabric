import React from 'react'

import Label from '../Label'
import fabricComponent from '../fabricComponent.js'
import isDefined from '../util/isDefined.js'

import style from './ChoiceField.scss'

const ChoiceField = ({
  className, disabled, groupId, id, label, name, required, type, checked, ...props
}) => {
  const groupIdSuffix = isDefined(groupId) ? `[${groupId}]` : ''
  const inputId = `ChoiceField_${id || name || Date.now()}${groupIdSuffix}_input`

  return (
    <div data-fabric="ChoiceField"
      id={id}
      className={className}
      styleName="ms-ChoiceField">
      <input {...props}
        children={null}
        id={inputId}
        name={name}
        type={type}
        disabled={disabled}
        checked={isDefined(checked) ? checked : false}
        styleName="ms-ChoiceField-input" />
      <label styleName="ms-ChoiceField-field"
        htmlFor={inputId}>
        <Label componentClass="span" styleName="ms-Label" required={required}>{label}</Label>
      </label>
    </div>
  )
}
ChoiceField.propTypes = {
  checked: React.PropTypes.bool,
  className: React.PropTypes.string,
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
  disabled: false,
  require: false,
  type: 'checkbox'
}

export default fabricComponent(ChoiceField, style)
