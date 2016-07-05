import test from 'tape'

import Grid, { Row, Col } from '..'

test('Grid module', t => {
  t.ok(Grid)
  t.ok(Row)
  t.ok(Col)

  t.end()
})
