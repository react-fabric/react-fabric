import React from 'react'

import render from './util/render'

import Label from '../src/Label.jsx'

describe('Label', () => {
  it('has a display name', () => {
    expect(Label).to.have.property('displayName', 'Label')
  })

  describe('[Functionality]', () => {
    it('can have a for attribute', () => {
      var sut = render(
        <Label htmlFor="bar">Foo</Label>
      )

      expect(sut.props).to.have.property('htmlFor', 'bar')
    })
  })

  describe('[Presentation]', () => {
    it('renders a <label />', () => {
      var sut = render(
        <Label>Foo</Label>
      )

      expect(sut).to.have.property('type', 'label')
      expect(sut.props).to.have.property('className', 'ms-Label')
      expect(sut.props).to.have.property('children', 'Foo')
    })

    it('can be required', () => {
      var sut = render(
        <Label required={true}>Foo</Label>
      )

      expect(sut.props.className.split(' ')).to.include('is-required')
    })

    it('can be disabled', () => {
      var sut = render(
        <Label disabled={true}>Foo</Label>
      )

      expect(sut.props.className.split(' ')).to.include('is-disabled')
    })
  })
})
