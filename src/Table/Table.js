import React from 'react'
import cx from 'classnames'

import fabricComponent from '../fabricComponent.js'

import style from './Table.scss'

const Table = ({ children, className, fixed, ...props }) => (
  <table data-fabric="Table"
    {...props }
    className={className}
    styleName={cx('ms-Table', {
      'ms-Table--fixed': fixed,
    })}>
      { children }
  </table>
)
Table.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  fixed: React.PropTypes.bool
}
Table.defaultProps = {
  fixed: false
}

export default fabricComponent(Table, style)
