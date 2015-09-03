import React, { PropTypes} from 'react'
import cn from 'classnames'

export default class Label extends React.Component  {
  static propTypes = {
    required: PropTypes.bool,
    disabled: PropTypes.bool,
  }

  render() {
    const { required, disabled } = this.props

    return (
       <label className={cn({
         'ms-Label': true,
         'is-required': required,
         'is-disabled': disabled,
       })}>
        {this.props.children}
      </label>
    )
  }
}
