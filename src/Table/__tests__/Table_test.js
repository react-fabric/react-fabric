import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Table from '../index.js'

test('Table', t => {
  t.ok(Table, 'export')
  t.equal(Table.displayName, 'FabricComponent(Table)')

  t.end()
})

test('Table#render - simple', t => {
  const container = render(
    <Table />
  ).contents()

  t.assert(container.is('table.ms-Table', 'container'))
  t.assert(container.is('[data-fabric="Table"]'), 'data-fabric')

  t.end()
})
