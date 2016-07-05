import test from 'tape'

import * as propTypes from '..'
import glyphType from '../glyphType.js'
import onlyWhen from '../onlyWhen.js'

test('propTypes', t => {
  t.equal(propTypes.glyphType, glyphType, 'glyphType')
  t.equal(propTypes.onlyWhen, onlyWhen, 'onlyWhen')

  t.end()
})
