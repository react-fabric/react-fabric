import React from 'react'
import cx from 'classnames'

import { glyphType } from '../propTypes'
import fabricComponent from '../fabricComponent'

import style from './Icon.scss'

const Icon = ({ glyph, styles, ...props }) => (
  <i data-fabric="Icon"
    {...props}
    styleName={cx('ms-Icon', `ms-Icon--${glyph}`)} />
)
Icon.displayName = 'Icon'
Icon.propTypes = {
  glyph: glyphType.isRequired
}

export default fabricComponent(Icon, style)
