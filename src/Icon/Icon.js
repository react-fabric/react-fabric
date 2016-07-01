import React from 'react'
import cx from 'classnames'

import glyphPropType from './glyphPropType.js'
import fabricComponent from '../fabricComponent'

import style from './Icon.scss'

const Icon = ({ glyph, ...props }) => (
  <i data-fabric="Icon"
    {...props}
    styleName={cx('ms-Icon', `ms-Icon--${glyph}`)} />
)
Icon.displayName = 'Icon'
Icon.propTypes = {
  glyph: glyphPropType.isRequired
}

export default fabricComponent(Icon, style)
