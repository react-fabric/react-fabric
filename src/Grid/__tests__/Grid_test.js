import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import Grid, { Row, Col } from '../index.js'

test('Grid', t => {
  t.ok(Grid, 'export')
  t.equal(Grid.Row || false, Row, '.Row export')
  t.equal(Grid.Col || false, Col, '.Col export')
  t.equal(Grid.displayName, 'FabricComponent(Grid)')

  t.end()
})

test('Grid#render - simple', t => {
  const container = render(
    <Grid />
  ).contents()

  t.assert(container.is('div.ms-Grid', 'container'))
  t.assert(container.is('[data-fabric="Grid"]'), 'data-fabric')

  t.end()
})
