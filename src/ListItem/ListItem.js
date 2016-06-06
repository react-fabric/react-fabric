import React from 'react'
import elementType from 'react-prop-types/lib/elementType'
import cx from 'classnames'
import isFunction from 'lodash.isfunction'

import ListItemAction from './ListItemAction.js'
import fabricComponent from '../fabricComponent.js'

import style from './ListItem.scss'

const handleSelectionTargetClick = (onChange, checked) => (
  isFunction(onChange) ? onChange.bind(null, !checked) : undefined
)

const ListItem = ({
  checked,
  children,
  componentClass: Component,
  image,
  itemIcon,
  metaText,
  onChange,
  primaryText,
  secondaryText,
  selectable,
  tertiaryText,
  type,
  ...props
}) => (
  <Component data-fabric="ListItem"
    {...props}
    styleName={cx('ms-ListItem', {
      [`ms-ListItem--${type}`]: !!type,
      ['is-selectable']: !!selectable,
      ['is-selected']: !!checked
    })}>
    { image && <div styleName="ms-ListItem-image">{ image }</div> }
    { primaryText && <span styleName="ms-ListItem-primaryText">{ primaryText }</span> }
    { secondaryText && <span styleName="ms-ListItem-secondaryText">{ secondaryText }</span> }
    { tertiaryText && <span styleName="ms-ListItem-tertiaryText">{ tertiaryText }</span> }
    { metaText && <span styleName="ms-ListItem-metaText">{ metaText }</span> }
    { itemIcon && <div styleName="ms-ListItem-itemIcon">{ itemIcon }</div> }
    { selectable && <div
      styleName="ms-ListItem-selectionTarget"
      onClick={handleSelectionTargetClick(onChange, checked)} /> }
    { children && React.Children.count(children) > 0 && <div styleName="ms-ListItem-actions">
      { children }
    </div> }
  </Component>
)
ListItem.propTypes = {
  children: React.PropTypes.node,
  // TODO Array of ListItemActions
  // children: React.PropTypes.oneOfType([
  //   React.PropTypes.instanceOf(ListItemAction),
  //   React.PropTypes.arrayOf(React.PropTypes.instanceOf(ListItemAction))
  // ]),
  componentClass: elementType,
  image: React.PropTypes.node,
  itemIcon: React.PropTypes.node,
  metaText: React.PropTypes.node,
  onChange: React.PropTypes.func,
  primaryText: React.PropTypes.node,
  secondaryText: React.PropTypes.node,
  selectable: React.PropTypes.bool,
  checked: React.PropTypes.bool,
  tertiaryText: React.PropTypes.node,
  type: React.PropTypes.oneOf([
    'document'
  ])
}
ListItem.defaultProps = {
  componentClass: 'li'
}

ListItem.Action = ListItemAction

export default fabricComponent(ListItem, style)
