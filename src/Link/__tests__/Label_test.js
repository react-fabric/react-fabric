import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Link from '../index.js'

test('Link', t => {
  t.ok(Link, 'export')
  t.equal(Link.displayName, 'FabricComponent(Link)')

  t.end()
})

test('Link#render - simple', t => {
  const container = render(
    <Link>Foo</Link>
  ).contents()

  t.assert(container.is('a.ms-Link', 'container'))
  t.assert(container.is('[data-fabric="Link"]'), 'data-fabric')
  t.equal(container.text(), 'Foo')

  t.end()
})
