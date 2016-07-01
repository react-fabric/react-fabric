import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Dropdown from '../index.js'

test('Dropdown', t => {
  t.ok(Dropdown, 'export')
  t.equal(Dropdown.displayName, 'FabricComponent(Dropdown)')

  t.end()
})

test('Dropdown#render - simple', t => {
  const container = render(
    <Dropdown options={[
      { label: 'Foo', value: 'foo' },
      { label: 'Bar', value: 'bar' }
    ]} />
  ).contents()

  t.assert(container.is('div.ms-Dropdown', 'container'))
  t.assert(container.is('[data-fabric="Dropdown"]'), 'data-fabric')
  t.equal(container.find('.ms-Dropdown-items > .ms-Dropdown-item').length, 2)

  t.end()
})
