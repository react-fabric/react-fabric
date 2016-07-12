import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import List from '..'
import ListItem from '../../ListItem'

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

test('List#render - selectable', t => {
  // shallow test would be better
  const wrapper = render(
    <List selectable>
      <ListItem primaryText="Foo" />
      <ListItem primaryText="Bar" />
      <ListItem primaryText="Baz" />
    </List>
  )

  t.assert(wrapper.find('.ms-ListItem-selectionTarget').length, 3)

  t.end()
})
