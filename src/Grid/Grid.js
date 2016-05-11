import React, { PropTypes } from 'react'
import fabricComponent from 'fabric/decorator'

import style from './Grid.scss'

import Row from './Row'
import Col from './Col'

const Grid = ({ children }) => (
  <div styleName="ms-Grid">
    { children }
  </div>
)
Grid.propTypes = {
  children: PropTypes.node
}
Grid.Row = Row
Grid.Col = Col

export default fabricComponent(Grid, style)
