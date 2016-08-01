import React from 'react'

import fabricComponent from '../fabricComponent'

import style from './Grid.scss'

const Row = ({ children, styles, ...props }) => (
  <div {...props} styleName="ms-Grid-row">
    { children }
  </div>
)
Row.propTypes = {
  children: React.PropTypes.node
}

export default fabricComponent(Row, style)
