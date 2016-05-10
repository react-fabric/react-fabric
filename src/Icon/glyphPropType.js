import React from 'react'
import style from './Icon.scss'

const GLYPH_REGEX = /Icon--(\w+)/

export const ALL_GLYPHS = Object.keys(style).map(key => {
  const match = key.match(GLYPH_REGEX)

  return match ? match[1] : null
}).filter(glyph => !!glyph)

export default React.PropTypes.oneOf(ALL_GLYPHS)
