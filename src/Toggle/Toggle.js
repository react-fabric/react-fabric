import React from 'react'
import cx from 'classnames'

import Label from '../Label'
import fabricComponent from '../fabricComponent.js'

import style from './Toggle.scss'

const Toggle = ({ id, name, description, labelOn, labelOff, textLeft, ...props }) => {
  const inputId = `Toggle_${id || name || Date.now()}_input`
  const styleName = cx('ms-Toggle', {
    'ms-Toggle--textLeft': textLeft
  })
  return (
    <div styleName={styleName}>
      { description && <span styleName="ms-Toggle-description">
        { description }
      </span> }
      <input {...props}
        styleName="ms-Toggle-input"
        type="checkbox"
        id={inputId}
        name={name} />
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
  description: React.PropTypes.string,
  id: React.PropTypes.string,
  labelOff: React.PropTypes.string,
  labelOn: React.PropTypes.string,
  name: React.PropTypes.string,
  textLeft: React.PropTypes.bool
}
Toggle.defaultProps = {
  labelOff: 'off',
  labelOn: 'on',
  textLeft: false
}

export default fabricComponent(Toggle, style)
