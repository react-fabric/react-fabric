import test from 'tape'
import colSizeType, { COL_SIZES } from '../colSizeType.js'

test('glyphType', t => {
  t.assert(Array.isArray(COL_SIZES), 'COL_SIZES export')

  t.throws(
    () => { throw colSizeType({ sm: -1 }, 'sm', 'TestComponent') },
    /undefined `sm` of value `-1`/
  )

  t.equal(
    colSizeType({ sm: COL_SIZES[0] }, 'sm', 'TestComponent'),
    null
  )

  t.end()
})
