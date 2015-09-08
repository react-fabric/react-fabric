import React, { PropTypes} from 'react'
import cx from 'classnames'

export default class Link extends React.Component  {
  static displayName = 'Link'
  static propTypes = {
    hero: PropTypes.bool,
  }

  render() {
    const {
      children,
      hero,
      ...props,
    } = this.props

    return (
      <a className={cx(
         'ms-Link', {
           'ms-Link--hero': hero,
         }
       )} {...props}>
        {children}
      </a>
    )
  }
}
