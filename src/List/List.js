import React from 'react'
import elementType from 'react-prop-types/lib/elementType'

// import ListItem from '../ListItem'
import fabricComponent from '../fabricComponent'

import style from './List.scss'

const List = ({ children, componentClass: Component, selectable, ...props }) => (
  <Component data-fabric="List"
    {...props}
    styleName="ms-List">
    { selectable ? React.Children.map(children, child => (
       React.cloneElement(child, { selectable })
    )) : children }
  </Component>
)
List.propTypes = {
  children: React.PropTypes.node,
  // TODO Array of ListItems
  // children: React.PropTypes.oneOfType([
  //   React.PropTypes.instanceOf(ListItem),
  //   React.PropTypes.arrayOf(React.PropTypes.instanceOf(ListItem))
  // ]),
  componentClass: elementType,
  selectable: React.PropTypes.bool
}
List.defaultProps = {
  componentClass: 'ul',
  selectable: false
}

export default fabricComponent(List, style)
