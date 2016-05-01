import React from 'react'
import cx from 'classnames'

import fabricComponent from '../fabricComponent.js'

import style from './Icon.scss'

const Icon = ({ glyph, ...props }) => (
  <i {...props}
    data-fabric="Icon"
    styleName={cx('ms-Icon', `ms-Icon--${glyph}`)} />
)
Icon.propTypes = {
  /**
   * An icon name. See http://dev.office.com/fabric/styles#icons
   */
  glyph: React.PropTypes.string.isRequired,
}

export default fabricComponent(Icon, style)
