import React from 'react'
import { render, mount } from 'enzyme'
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
      <NavBar.Link><a href="#">Link</a></NavBar.Link>
      <span>Baz</span>
    </NavBar>
  ).contents()

  t.assert(container.is('div.ms-NavBar', 'container'))
  t.assert(container.is('[data-fabric="NavBar"]'), 'data-fabric')
  t.equal(container.find('.ms-NavBar-title').text(), 'Foo')
  t.equal(container.find('.ms-NavBar-items').children().length, 3)

  t.end()
})

test('NavBar#render - is-open', t => {
  const container = render(
    <NavBar isMenuOpen />
  ).contents()

  t.assert(container.is('.is-open', 'container'))

  t.end()
})

test('NavBar - handler', t => {
  t.plan(2)

  t.test('open', q => {
    q.plan(2)

    const handleOpen = () => { q.pass('openMenu called') }

    const wrapper = mount(
      <NavBar openMenu={handleOpen}>
        <NavBar.Item>Foo</NavBar.Item>
      </NavBar>
    )

    const clickElement = wrapper.find('.ms-NavBar-openMenu')

    q.equal(clickElement.length, 1)

    clickElement.simulate('click')
  })

  t.test('close', q => {
    q.plan(2)

    const handleClose = () => { q.pass('closeMenu called') }

    const wrapper = mount(
      <NavBar closeMenu={handleClose} isMenuOpen>
        <NavBar.Item>Foo</NavBar.Item>
      </NavBar>
    )

    const clickElement = wrapper.find('.ms-NavBar')

    q.equal(clickElement.length, 1)

    clickElement.simulate('click')
  })
})

test('NavBar - propTypes', t => {
  /* eslint-disable no-console */
  t.plan(1)

  const error = console.error

  console.error = msg => { t.ok(/invalid prop `children`/i.test(msg)) }

  render(
    <NavBar>
      <NavBar.Title>First Title</NavBar.Title>
      <NavBar.Title>Second Title</NavBar.Title>
      <NavBar.Item>Item</NavBar.Item>
    </NavBar>
  )

  console.error = error
  /* eslint-enable no-console */
})
