import React from 'react'
import cx from 'classnames'

import Label from '../Label'
import fabricComponent from '../fabricComponent'
import invokeWhenNotDisabled from '../util/invokeWhenNotDisabled.js'
import isDefined from '../util/isDefined.js'

import style from './Toggle.scss'

const Toggle = ({
  checked,
  className,
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
        checked={isDefined(checked) ? checked : false}
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
Toggle.displayName = 'Toggle'
Toggle.propTypes = {
  checked: React.PropTypes.bool,
  className: React.PropTypes.string,
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
  labelOff: 'off',
  labelOn: 'on',
  textLeft: false
}

export default fabricComponent(Toggle, style)
