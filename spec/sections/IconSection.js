import React from 'react'

import Icon from '../../src/Icon'
import { ALL_GLYPHS } from '../../src/Icon/glyphPropType.js'

const glyphs = ALL_GLYPHS.sort().filter(glyph => glyph !== 'circle')

const IconComponent = () => (
	<section className="icon-section">
		<h2>Icon</h2>
    { glyphs.map(glyph => (
      <Icon glyph={glyph} key={glyph} />
    )) }
	</section>
)

export default IconComponent
