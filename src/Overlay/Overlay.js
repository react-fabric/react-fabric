import React from 'react'
import cx from 'classnames'

import fabricComponent from '../fabricComponent.js'

import style from './Overlay.scss'

const Overlay = ({ dark, hidden, ...props }) => (
  <div data-fabric="Overlay"
    {...props}
    styleName={cx('ms-Overlay', {
      'ms-Overlay--dark': dark,
      'ms-Overlay--none': hidden
    })} />
)
Overlay.propTypes = {
  dark: React.PropTypes.bool,
  hidden: React.PropTypes.bool
}

export default fabricComponent(Overlay, style)
