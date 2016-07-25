import React from 'react'
import { render } from 'enzyme'
import test from 'tape'

import SearchBox from '..'

test('SearchBox', t => {
  t.ok(SearchBox, 'export')
  t.equal(SearchBox.displayName, 'FabricComponent(SearchBox)')

  t.end()
})

test('SearchBox#render - simple', t => {
  const container = render(
    <SearchBox placeholder="Test" />
  ).contents()

  t.assert(container.is('div.ms-SearchBox', 'container'))
  t.assert(container.is('[data-fabric="SearchBox"]'), 'data-fabric')
  t.equal(container.find('.ms-SearchBox-label .ms-SearchBox-icon').length, 1, 'icon')
  t.equal(container.find('.ms-SearchBox-label').text(), 'Test', 'placeholder text')

  t.end()
})

test('SearchBox#render - active', t => {
  const container = render(
    <SearchBox active />
  ).contents()

  t.assert(container.is('div.ms-SearchBox.is-active', 'container'))

  t.end()
})

// test('SearchBox#mount', t => {
//   const wrapper = mount(
//     <SearchBox active />
//   )
//   const container = wrapper.find('.ms-SearchBox')
//
//   t.equal(wrapper.state('hover'), false)
//
//   container.simulate('mouseOver')
//
//   t.equal(wrapper.state('hover'), true)
//
//   t.end()
// })
