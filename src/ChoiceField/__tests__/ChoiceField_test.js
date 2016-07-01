import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import ChoiceField from '..'

test('ChoiceField', t => {
  t.ok(ChoiceField, 'export')
  t.equal(ChoiceField.displayName, 'FabricComponent(ChoiceField)')

  t.end()
})

test('ChoiceField#render - simple', t => {
  const container = render(
    <ChoiceField label="Foo">Foo</ChoiceField>
  ).contents()

  t.assert(container.is('div.ms-ChoiceField', 'container'))
  t.assert(container.is('[data-fabric="ChoiceField"]'), 'data-fabric')
  t.equal(container.find('.ms-ChoiceField-field > .ms-Label').text(), 'Foo')

  t.end()
})
