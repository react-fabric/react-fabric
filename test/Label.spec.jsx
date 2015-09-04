import React from 'react'
import { findDOMNode } from 'react-dom'

import Label from '../src/Label.jsx'

describe('Label', function() {
  it('renders a <label /> tag', function() {
    const label = TestUtils.renderIntoDocument(
      <Label>Foo</Label>
    )

    const $label = findDOMNode(label)

    expect($label.tagName).to.equal('LABEL')
    expect($label.textContent).to.equal('Foo')
    expect($label.className.split(' ')).to.have.members([
      'ms-Label'
    ])
  })

  it('can be required', function() {
    const label = TestUtils.renderIntoDocument(
      <Label required={true}>Foo</Label>
    )

    const $label = findDOMNode(label)

    expect($label.className.split(' ')).to.include.members([
      'is-required'
    ])
  })

  it('can be disabled', function() {
    const label = TestUtils.renderIntoDocument(
      <Label disabled={true}>Foo</Label>
    )

    const $label = findDOMNode(label)

    expect($label.className.split(' ')).to.include.members([
      'is-disabled'
    ])
  })
})
