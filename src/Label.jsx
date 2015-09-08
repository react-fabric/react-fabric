import React, { PropTypes} from 'react'
import cx from 'classnames'

export default class Label extends React.Component  {
  static displayName = 'Label'
  static propTypes = {
    disabled: PropTypes.bool,
    required: PropTypes.bool,
  }

  render() {
    const {
      children,
      disabled,
      required,
      ...props,
    } = this.props

    if (children && children._isReactElement && children.type === this.constructor) {
      return React.cloneElement(children, {
        disabled,
        required,
      })
    }

    return (
       <label className={cx(
         'ms-Label', {
           'is-required': required,
           'is-disabled': disabled,
         }
       )} {...props}>
        {children}
      </label>
    )
  }
}
