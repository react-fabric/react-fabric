import React from 'react'

import Row from './Row'
import Col from './Col'
import fabricComponent from '../fabricComponent'

import style from './Grid.scss'

const Grid = ({ children, ...props }) => (
  <div data-fabric="Grid"
    {...props}
    styleName="ms-Grid">
    { children }
  </div>
)
Grid.displayName = 'Grid'
Grid.propTypes = {
  children: React.PropTypes.node
}
Grid.Row = Row
Grid.Col = Col

export default fabricComponent(Grid, style)
