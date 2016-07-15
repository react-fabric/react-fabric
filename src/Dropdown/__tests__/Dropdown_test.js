import React from 'react'
import { render, mount } from 'enzyme'
import test from 'tape'

import Dropdown from '..'
import events from '../../util/events.js'

const defaultOptions = [
  { label: 'Foo', value: 'foo' },
  { label: 'Bar', value: 'bar' }
]

test('Dropdown', t => {
  t.ok(Dropdown, 'export')
  t.equal(Dropdown.displayName, 'FabricComponent(Dropdown)')

  t.end()
})

test('Dropdown#render - simple', t => {
  const container = render(
    <Dropdown options={defaultOptions} />
  ).contents()

  t.assert(container.is('div.ms-Dropdown', 'container'))
  t.assert(container.is('[data-fabric="Dropdown"]'), 'data-fabric')
  t.equal(container.find('.ms-Dropdown-items > .ms-Dropdown-item').length, defaultOptions.length)

  t.end()
})

test('Dropdown lifecycle - unmount', t => {
  t.plan(1)

  const removeEventsFromDocument = events.removeEventsFromDocument

  events.removeEventsFromDocument = ({ click }) => {
    t.ok(click)
  }

  const wrapper = mount(
    <Dropdown active options={defaultOptions} />
  )

  wrapper.unmount()

  events.removeEventsFromDocument = removeEventsFromDocument
})

test('Dropdown lifecycle - update', t => {
  t.plan(2)

  const addEventsToDocument = events.addEventsToDocument
  const removeEventsFromDocument = events.removeEventsFromDocument

  events.addEventsToDocument = ({ click }) => {
    t.ok(click, 'add click handler')
  }
  events.removeEventsFromDocument = ({ click }) => {
    t.ok(click)
  }

  const wrapper = mount(
    <Dropdown options={defaultOptions} />
  )

  wrapper.setProps({ active: true })
  wrapper.setProps({ active: false })

  events.addEventsToDocument = addEventsToDocument
  events.removeEventsFromDocument = removeEventsFromDocument
})

test('Dropdown - blur', t => {
  t.plan(1)

  const handleBlur = e => t.ok(e, 'blur called')

  const wrapper = mount(
    <Dropdown onBlur={handleBlur}
      options={defaultOptions} />
  )

  wrapper.setProps({ active: true })

  const event = document.createEvent('HTMLEvents')
  event.initEvent('click', true, false)
  document.body.dispatchEvent(event)
})

test('Dropdown - focus', t => {
  t.plan(1)

  const handleFocus = e => t.ok(e, 'focus called')

  const wrapper = mount(
    <Dropdown onFocus={handleFocus}
      options={defaultOptions} />
  )

  wrapper.find('.ms-Dropdown-title').simulate('mouseDown')
})

test('Dropdown - select', t => {
  t.plan(2)

  const handleBlur = e => t.equal(e.target.value, 'foo', 'blur called')
  const handleChange = e => t.ok(e.target.value, 'foo', 'change called')

  const wrapper = mount(
    <Dropdown onBlur={handleBlur} onChange={handleChange} value={null}
      options={defaultOptions} />
  )

  wrapper.setProps({ active: true })

  wrapper.find('.ms-Dropdown-item > div').first().simulate('mouseDown')

  t.end()
})

