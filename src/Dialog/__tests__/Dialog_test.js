import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Dialog, { DialogAction, DialogTitle, DialogSubtext } from '../index.js'

test('Dialog', t => {
  t.ok(Dialog, 'export')
  t.equal(Dialog.Action || false, DialogAction, '.Action export')
  t.equal(Dialog.Title || false, DialogTitle, '.Title export')
  t.equal(Dialog.Subtext || false, DialogSubtext, '.Subtext export')
  t.equal(Dialog.displayName, 'FabricComponent(Dialog)')

  t.end()
})

test('Dialog#render - simple', t => {
  const container = render(
    <Dialog>Foo</Dialog>
  ).contents()

  t.assert(container.is('div.ms-Dialog', 'container'))
  t.assert(container.is('[data-fabric="Dialog"]'), 'data-fabric')
  t.equal(container.find('.ms-Dialog-title').text(), 'Dialog')
  t.equal(container.find('.ms-Dialog-content').text(), 'Foo')

  t.end()
})
