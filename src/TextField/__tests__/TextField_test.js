import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import TextField from '../index.js'

test('TextField', t => {
  t.ok(TextField, 'export')
  t.equal(TextField.displayName, 'FabricComponent(TextField)')

  t.end()
})

test('TextField#render - simple', t => {
  const container = render(
    <TextField />
  ).contents()

  t.assert(container.is('div.ms-TextField', 'container'))
  t.assert(container.is('[data-fabric="TextField"]'), 'data-fabric')
  t.equal(container.find('> input.ms-TextField-field').length, 1)

  t.end()
})
