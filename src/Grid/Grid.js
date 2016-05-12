import React from 'react'

import Row from './Row'
import Col from './Col'
import fabricComponent from '../fabricComponent.js'

import style from './Grid.scss'

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
