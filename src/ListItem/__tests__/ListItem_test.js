import React from 'react'
import { render, mount } from 'enzyme'
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

test('ListItem#render - DOM', t => {
  t.plan(4)


  const handlers = [
    (checked) => t.equal(checked, true),
    (checked) => t.equal(checked, false),
  ]

  const wrappers = [
    mount(<ListItem selectable checked={false} onChange={handlers[0]} />),
    mount(<ListItem selectable checked onChange={handlers[1]} />)
  ]

  const selectionTargets = wrappers.map(wrapper => (
    wrapper.find('.ms-ListItem-selectionTarget')
  ))

  selectionTargets.forEach(selectionTarget => {
    t.equal(selectionTarget.length, 1)

    selectionTarget.simulate('click')
  })
})
