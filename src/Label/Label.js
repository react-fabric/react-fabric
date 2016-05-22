import React from 'react'
import cx from 'classnames'
import elementType from 'react-prop-types/lib/elementType'

import invokeWhenNotDisabled from '../util/invokeWhenNotDisabled.js'
import fabricComponent from '../fabricComponent.js'

import style from './Label.scss'

const Label = ({
  children,
  componentClass: ComponentClass,
  disabled,
  htmlFor,
  onClick,
  required,
  ...props
  }) => (
  <ComponentClass data-fabric="Label"
    {...props}
    htmlFor={htmlFor}
    onClick={invokeWhenNotDisabled(disabled, onClick)}
    styleName={cx('ms-Label', {
      'is-required': required,
      'is-disabled': disabled
    })}>
    { children }
  </ComponentClass>
)
Label.propTypes = {
  children: React.PropTypes.node,
  componentClass: elementType,
  disabled: React.PropTypes.bool,
  htmlFor: React.PropTypes.string,
  onClick: React.PropTypes.func,
  required: React.PropTypes.bool
}
Label.defaultProps = {
  componentClass: 'label',
  disabled: false,
  required: false
}

export default fabricComponent(Label, style)
