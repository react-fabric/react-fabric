import React from 'react'
import cx from 'classnames'

import fabricComponent from '../fabricComponent'

import style from './Overlay.scss'

const Overlay = ({ dark, hidden, styles, ...props }) => (
  <div data-fabric="Overlay"
    {...props}
    styleName={cx('ms-Overlay', {
      'ms-Overlay--dark': dark,
      'ms-Overlay--none': hidden
    })} />
)
Overlay.displayName = 'Overlay'
Overlay.propTypes = {
  dark: React.PropTypes.bool,
  hidden: React.PropTypes.bool
}

export default fabricComponent(Overlay, style)
