import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Col from '../Col.js'

test('Col', t => {
  t.ok(Col, 'export')

  t.end()
})

test('Col#render', t => {
  const container = render(
    <Col sm={3} mdPush={4} lgPull={5}>Foo</Col>
  ).contents()

  t.assert(container.is('div.ms-Grid-col'), 'container')
  t.assert(container.hasClass('ms-u-sm3'), 'size class')
  t.assert(container.hasClass('ms-u-mdPush4'), 'push class')
  t.assert(container.hasClass('ms-u-lgPull5'), 'pull class')
  t.equal(container.text(), 'Foo', 'children')

  t.end()
})
