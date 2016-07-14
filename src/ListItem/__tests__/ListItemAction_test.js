import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import ListItemAction from '../ListItemAction.js'

test('ListItemAction', t => {
  t.ok(ListItemAction, 'export')

  t.end()
})

test('ListItem#render - simple', t => {
  const container = render(
    <ListItemAction glyph="star" />
  ).contents()

  t.assert(container.is('div.ms-ListItem-action', 'container'))
  t.equal(container.find('.ms-ListItem-action .ms-Icon--star').length, 1)

  t.end()
})
