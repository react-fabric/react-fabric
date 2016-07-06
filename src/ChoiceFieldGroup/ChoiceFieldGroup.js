import React from 'react'

import Label from '../Label'
import fabricComponent from '../fabricComponent'

import style from '../ChoiceField/ChoiceField.scss'

const handleChildChanged = onChange => e => {
  if (onChange && e.target.checked) {
    onChange(e)
  }
}

const createChoices = ({ children, name, value, onChange }) => (
  React.Children.map(children, (child, i) => {
    if (child === null) { return child }

    return React.cloneElement(child, {
      type: 'radio',
      name,
      id: `ChoiceFieldGroup_${name}[${i}]`,
      checked: value === child.props.value,
      onChange: handleChildChanged(onChange)
    })
  })
)

const ChoiceFieldGroup = ({
  children, name, required, title, value, onChange, ...props
}) => (
  <div data-fabric="ChoiceFieldGroup"
    {...props}
    styleName="ms-ChoiceFieldGroup">
    <div>
      { title && <Label required={required}>{title}</Label> }
    </div>
    { createChoices({ children, name, value, onChange }) }
  </div>
)
ChoiceFieldGroup.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  title: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
}
ChoiceFieldGroup.defaultProps = {
  required: false
}

export default fabricComponent(ChoiceFieldGroup, style)
