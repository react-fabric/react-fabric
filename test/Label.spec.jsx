import React from 'react'

import render from './util/render'

import Label from '../src/Label.jsx'

describe('Label', function() {
  it('renders a <label /> tag', function() {
    var sut = render(
      <Label>Foo</Label>
    )

    expect(sut).to.have.property('type', 'label')
    expect(sut.props).to.deep.equal({
      className: 'ms-Label',
      children: 'Foo'
    })
  })

  it('can be required', function() {
    const sut = render(
      <Label required={true}>Foo</Label>
    )

    expect(sut.props.className.split(' ')).to.include('is-required')
  })

  it('can be disabled', function() {
    const sut = render(
      <Label disabled={true}>Foo</Label>
    )

    expect(sut.props.className.split(' ')).to.include('is-disabled')
  })
})
