import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import NavBar, { NavBarItem, NavBarLink, NavBarTitle } from '..'

test('NavBar', t => {
  t.ok(NavBar, 'export')
  t.equal(NavBar.Item || false, NavBarItem, '.Item export')
  t.equal(NavBar.Link || false, NavBarLink, '.Link export')
  t.equal(NavBar.Title || false, NavBarTitle, '.Title export')
  t.equal(NavBar.displayName, 'FabricComponent(NavBar)')

  t.end()
})

test('NavBar#render - simple', t => {
  const container = render(
    <NavBar>
      <NavBar.Title>Foo</NavBar.Title>
      <NavBar.Item>Bar</NavBar.Item>
    </NavBar>
  ).contents()

  t.assert(container.is('div.ms-NavBar', 'container'))
  t.assert(container.is('[data-fabric="NavBar"]'), 'data-fabric')
  t.equal(container.find('.ms-NavBar-title').text(), 'Foo')
  t.equal(container.find('.ms-NavBar-items').children().length, 1)

  t.end()
})
