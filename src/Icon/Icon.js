import React from 'react'
import cx from 'classnames'

import glyphPropType from './glyphPropType.js'
import fabricComponent from '../fabricComponent.js'

import style from './Icon.scss'

const Icon = ({ glyph, ...props }) => (
  <i {...props}
    data-fabric="Icon"
    styleName={cx('ms-Icon', `ms-Icon--${glyph}`)} />
)
Icon.propTypes = {
  glyph: glyphPropType.isRequired
}

export default fabricComponent(Icon, style)
