import React from 'react'
import cx from 'classnames'

import fabricComponent from '../fabricComponent'

import style from './Table.scss'

const Table = ({ children, fixed, styles, ...props }) => (
  <table data-fabric="Table"
    {...props }
    styleName={cx('ms-Table', {
      'ms-Table--fixed': fixed,
    })}>
      { children }
  </table>
)
Table.displayName = 'Table'
Table.propTypes = {
  children: React.PropTypes.node,
  fixed: React.PropTypes.bool
}
Table.defaultProps = {
  fixed: false
}

export default fabricComponent(Table, style)
