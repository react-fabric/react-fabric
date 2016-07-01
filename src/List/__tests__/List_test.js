import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import List from '../index.js'

test('List', t => {
  t.ok(List, 'export')
  t.equal(List.displayName, 'FabricComponent(List)')

  t.end()
})

test('List#render - simple', t => {
  const container = render(
    <List>Foo</List>
  ).contents()

  t.assert(container.is('ul.ms-List', 'container'))
  t.assert(container.is('[data-fabric="List"]'), 'data-fabric')
  t.equal(container.text(), 'Foo')

  t.end()
})
