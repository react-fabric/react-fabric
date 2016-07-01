import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Icon from '../index.js'

test('Icon', t => {
  t.ok(Icon, 'export')
  t.equal(Icon.displayName, 'FabricComponent(Icon)')

  t.end()
})

test('Icon#render - simple', t => {
  const container = render(
    <Icon glyph="star" />
  ).contents()

  t.assert(container.is('i.ms-Icon', 'container'))
  t.assert(container.is('.ms-Icon--star', 'glyph class'))
  t.assert(container.is('[data-fabric="Icon"]'), 'data-fabric')

  t.end()
})
