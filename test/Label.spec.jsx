import React from 'react'

import render from './util/render'

import Label from '../src/Label.jsx'

describe('Label', function() {
  it('renders a <label />', function() {
    var sut = render(
      <Label>Foo</Label>
    )

    expect(sut).to.have.property('type', 'label')
    expect(sut.props).to.have.property('className', 'ms-Label')
    expect(sut.props).to.have.property('children', 'Foo')
  })

  it('can be required', function() {
    var sut = render(
      <Label required={true}>Foo</Label>
    )

    expect(sut.props.className.split(' ')).to.include('is-required')
  })

  it('can be disabled', function() {
    var sut = render(
      <Label disabled={true}>Foo</Label>
    )

    expect(sut.props.className.split(' ')).to.include('is-disabled')
  })

  it('can have a for attribute', function() {
    var sut = render(
      <Label htmlFor="bar">Foo</Label>
    )

    expect(sut.props).to.have.property('htmlFor', 'bar')
  })
})
