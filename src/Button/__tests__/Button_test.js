import React from 'react'
import test from 'tape'
import { render } from 'enzyme'

import Button from '..'

test('Button', t => {
  t.assert(Button, 'export')
  t.equal(Button.displayName, 'FabricComponent(Button)')

  t.end()
})

test('Button#render - simple', t => {
  const el = render(
    <Button>Foo</Button>
  )
  const container = el.contents()

  t.assert(container.is('button.ms-Button', 'container'))
  t.assert(container.is('[data-fabric="Button"]'), 'data-fabric')

  t.equal(container.find('.ms-Button-label').text(), 'Foo')

  t.end()
})

test('Button#render - primary', t => {
  const container = render(
    <Button type="primary"
      glyph="star" submit>
      Foo
    </Button>
  ).contents()

  t.assert(container.is('.ms-Button--primary'), 'has primary class')
  t.equal(container.find('.ms-Button-icon > .ms-Icon.ms-Icon--star').length, 1)
  t.equal(container.attr('type'), 'submit')

  t.end()
})
