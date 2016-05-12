import React from 'react'
import fabricComponent from 'fabric/decorator'

import style from './Grid.scss'

import Row from './Row'
import Col from './Col'

const Grid = ({ children, ...props }) => (
  <div {...props} styleName="ms-Grid">
    { children }
  </div>
)
Grid.propTypes = {
  children: React.PropTypes.node
}
Grid.Row = Row
Grid.Col = Col

export default fabricComponent(Grid, style)
