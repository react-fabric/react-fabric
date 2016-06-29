import React from 'react'

import Icon from '../Icon'
import glyphPropType from '../Icon/glyphPropType.js'
import fabricComponent from '../fabricComponent'

import style from './ListItem.scss'

const ListItemAction = ({ children, glyph, ...props }) => (
  <div {...props}
    styleName="ms-ListItem-action">
    { glyph && <Icon glyph={glyph} /> }
    { children }
  </div>
)
ListItemAction.propTypes = {
  children: React.PropTypes.node,
  glyph: glyphPropType
}

export default fabricComponent(ListItemAction, style)
