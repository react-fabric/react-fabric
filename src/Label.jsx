import React, { PropTypes} from 'react'
import cx from 'classnames'

export default class Label extends React.Component  {
  static displayName = 'Label'
  static propTypes = {
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    htmlFor: PropTypes.string
  }

  render() {
    const { required, disabled, htmlFor } = this.props

    return (
       <label htmlFor={htmlFor} className={cx(
         'ms-Label', {
           'is-required': required,
           'is-disabled': disabled,
         }
       )}>
        {this.props.children}
      </label>
    )
  }
}
