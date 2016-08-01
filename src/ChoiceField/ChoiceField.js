import React from 'react'

import Label from '../Label'
import fabricComponent from '../fabricComponent'
import isDefined from '../util/isDefined.js'

import style from './ChoiceField.scss'

const ChoiceField = ({
  checked,
  className,
  disabled,
  id,
  label,
  name,
  required,
  styles,
  type,
  ...props
}) => {
  const inputId = `ChoiceField_${id || name || Date.now()}_input`

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
ChoiceField.displayName = 'ChoiceField'
ChoiceField.propTypes = {
  checked: React.PropTypes.bool,
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  label: React.PropTypes.node,
  name: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['radio', 'checkbox']).isRequired
}
ChoiceField.defaultProps = {
  disabled: false,
  required: false,
  type: 'checkbox'
}

export default fabricComponent(ChoiceField, style)
