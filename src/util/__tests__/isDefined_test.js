import test from 'tape'
import isDefined from '../isDefined.js'

test('isDefined', t => {
  t.notOk(isDefined(null), 'null')
  t.notOk(isDefined(undefined), 'undefined')
  t.ok(isDefined(false), 'false')
  t.ok(isDefined(0), '0')

  t.end()
})
