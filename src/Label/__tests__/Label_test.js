import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Label from '../index.js'

test('Label', t => {
  t.ok(Label, 'export')
  t.equal(Label.displayName, 'FabricComponent(Label)')

  t.end()
})

test('Label#render - simple', t => {
  const container = render(
    <Label>Foo</Label>
  ).contents()

  t.assert(container.is('label.ms-Label', 'container'))
  t.assert(container.is('[data-fabric="Label"]'), 'data-fabric')
  t.equal(container.text(), 'Foo')

  t.end()
})
