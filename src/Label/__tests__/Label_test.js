import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Label from '../index.js'

test('Label', t => {
  t.plan(2)

  t.equal(
    Label.displayName,
    'FabricComponent(Label)'
  )

  t.test('render', q => {
    const sut = render(<Label>Foo</Label>).contents()

    q.plan(1)
    q.ok(
      sut.is('label.ms-Label')
    )
  })
})
