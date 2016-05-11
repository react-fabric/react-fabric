import React from 'react'
import fabricComponent from 'fabric/decorator'

import style from './Grid.scss'

const Row = ({ children }) => (
  <div styleName="ms-Grid-row">
    { children }
  </div>
)
Row.propTypes = {
  children: React.PropTypes.node
}

export default fabricComponent(Row, style)
