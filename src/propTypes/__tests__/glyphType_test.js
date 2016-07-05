import test from 'tape'
import glyphType, { GLYPH_TYPES } from '../glyphType.js'

test('glyphType', t => {
  t.assert(Array.isArray(GLYPH_TYPES), 'GLYPH_TYPES export')

  t.throws(
    () => { throw glyphType({ glyph: 'foo' }, 'glyph', 'TestComponent') },
    /undefined `glyph` of value `foo`/
  )

  t.equal(
    glyphType({ glyph: GLYPH_TYPES[0] }, 'glyph', 'TestComponent'),
    null
  )

  t.end()
})
