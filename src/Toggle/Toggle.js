import React from 'react'
import cx from 'classnames'

import Label from '../Label'
import fabricComponent from '../fabricComponent.js'
import invokeWhenNotDisabled from '../util/invokeWhenNotDisabled.js'

import style from './Toggle.scss'

const Toggle = ({
  checked,
  className,
  defaultChecked,
  description,
  disabled,
  id,
  labelOff,
  labelOn,
  name,
  onChange,
  textLeft,
  ...props
  }) => {
  const inputId = `Toggle_${id || name || Date.now()}_input`
  const styleName = cx('ms-Toggle', {
    'is-disabled': disabled,
    'ms-Toggle--textLeft': textLeft
  })
  return (
    <div data-fabric="Toggle"
      id={id}
      className={className}
      styleName={styleName}>
      { description && <span styleName="ms-Toggle-description">
        { description }
      </span> }
      <input {...props} type="checkbox"
        styleName="ms-Toggle-input"
        name={name}
        id={inputId}
        checked={typeof checked === 'boolean' ? checked : defaultChecked}
        defaultChecked={defaultChecked}
        onChange={invokeWhenNotDisabled(disabled, onChange)} />
      <label styleName="ms-Toggle-field" htmlFor={inputId}>
        <Label styleName="ms-Label ms-Label--off"
          componentClass="span">
          { labelOff }
        </Label>
        <Label styleName="ms-Label ms-Label--on"
          componentClass="span">
          { labelOn }
        </Label>
      </label>
    </div>
  )
}
Toggle.propTypes = {
  checked: React.PropTypes.bool,
  className: React.PropTypes.string,
  defaultChecked: React.PropTypes.bool,
  description: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  labelOff: React.PropTypes.string,
  labelOn: React.PropTypes.string,
  name: React.PropTypes.string,
  onChange: React.PropTypes.func,
  textLeft: React.PropTypes.bool
}
Toggle.defaultProps = {
  defaultChecked: false,
  labelOff: 'off',
  labelOn: 'on',
  textLeft: false
}

export default fabricComponent(Toggle, style)
