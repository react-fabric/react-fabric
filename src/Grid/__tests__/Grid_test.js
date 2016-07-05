import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Grid from '../Grid.js'
import Col from '../Col.js'
import Row from '../Row.js'

test('Grid', t => {
  t.ok(Grid, 'export')
  t.equal(Grid.Row, Row, '.Row export')
  t.equal(Grid.Col, Col, '.Col export')
  t.equal(Grid.displayName, 'FabricComponent(Grid)')

  t.end()
})

test('Grid#render', t => {
  const container = render(
    <Grid />
  ).contents()

  t.assert(container.is('div.ms-Grid', 'container'))
  t.assert(container.is('[data-fabric="Grid"]'), 'data-fabric')

  t.end()
})
