import React from 'react'
import cx from 'classnames'

import Icon from '../Icon'
import fabricComponent from '../fabricComponent'

import style from './Dialog.scss'

const DialogButton = ({
  children,
  className,
  close,
  onClick
}) => (
  <button onClick={onClick}
    styleName={cx('ms-Dialog-button', {
      'ms-Dialog-button--close': close
    })}
    className={className}>
    { close && <Icon styleName="ms-Icon ms-Icon--x" glyph="x" /> }
    { children }
  </button>
)
DialogButton.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  close: React.PropTypes.bool,
  onClick: React.PropTypes.func
}

export default fabricComponent(DialogButton, style)
