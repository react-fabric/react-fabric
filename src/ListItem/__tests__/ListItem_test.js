import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import ListItem from '../index.js'

test('ListItem', t => {
  t.ok(ListItem, 'export')
  t.equal(ListItem.displayName, 'FabricComponent(ListItem)')

  t.end()
})

test('ListItem#render - simple', t => {
  const container = render(
    <ListItem primaryText="Foo" />
  ).contents()

  t.assert(container.is('li.ms-ListItem', 'container'))
  t.assert(container.is('[data-fabric="ListItem"]'), 'data-fabric')
  t.equal(container.find('.ms-ListItem-primaryText').text(), 'Foo')

  t.end()
})
