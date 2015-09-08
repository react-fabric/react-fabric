import React, { PropTypes} from 'react'
import cx from 'classnames'

export default class Label extends React.Component  {
  static displayName = 'Label'
  static propTypes = {
    disabled: PropTypes.bool,
    htmlFor: PropTypes.string,
    required: PropTypes.bool,
  }

  render() {
    const {
      disabled,
      htmlFor,
      required,
    } = this.props

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
