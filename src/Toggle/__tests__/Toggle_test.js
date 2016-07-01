import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Toggle from '../index.js'

test('Toggle', t => {
  t.ok(Toggle, 'export')
  t.equal(Toggle.displayName, 'FabricComponent(Toggle)')

  t.end()
})

test('Toggle#render - simple', t => {
  const container = render(
    <Toggle />
  ).contents()

  t.assert(container.is('div.ms-Toggle', 'container'))
  t.assert(container.is('[data-fabric="Toggle"]'), 'data-fabric')
  t.equal(container.find('> input[type="checkbox"].ms-Toggle-input').length, 1)

  t.end()
})
