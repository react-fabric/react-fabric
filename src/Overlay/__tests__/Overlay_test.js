import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Overlay from '..'

test('Overlay', t => {
  t.ok(Overlay, 'export')
  t.equal(Overlay.displayName, 'FabricComponent(Overlay)')

  t.end()
})

test('Overlay#render - simple', t => {
  const container = render(
    <Overlay />
  ).contents()

  t.assert(container.is('div.ms-Overlay', 'container'))
  t.assert(container.is('[data-fabric="Overlay"]'), 'data-fabric')

  t.end()
})
