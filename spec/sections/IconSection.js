import React from 'react'

import Icon from '../../src/Icon'
import { GLYPH_TYPES } from '../../src/propTypes/glyphType.js'

const glyphs = GLYPH_TYPES.sort().filter(glyph => glyph !== 'circle')

const IconSection = () => (
  <section className="icon-section">
    <h2>Icon</h2>
    { glyphs.map(glyph => (
      <Icon glyph={glyph} key={glyph} />
    )) }
  </section>
)

export default IconSection
