import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Row from '../Row.js'

test('Row', t => {
  t.ok(Row, 'export')

  t.end()
})

test('Row#render', t => {
  const container = render(
    <Row>Foo</Row>
  ).contents()

  t.assert(container.is('div.ms-Grid-row'), 'container')
  t.equal(container.text(), 'Foo', 'children')

  t.end()
})
