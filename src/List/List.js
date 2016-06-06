import React from 'react'
import elementType from 'react-prop-types/lib/elementType'

// import ListItem from '../ListItem'
import fabricComponent from '../fabricComponent.js'

import style from './List.scss'

const List = ({ children, componentClass: Component, ...props }) => (
  <Component data-fabric="List"
    {...props}
    styleName="ms-List">
    { children }
  </Component>
)
List.propTypes = {
  children: React.PropTypes.node,
  // TODO Array of ListItems
  // children: React.PropTypes.oneOfType([
  //   React.PropTypes.instanceOf(ListItem),
  //   React.PropTypes.arrayOf(React.PropTypes.instanceOf(ListItem))
  // ]),
  componentClass: elementType
}
List.defaultProps = {
  componentClass: 'ul'
}

export default fabricComponent(List, style)
