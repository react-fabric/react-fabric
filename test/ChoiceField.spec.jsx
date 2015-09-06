import React from 'react'

import ChoiceField from '../src/ChoiceField'

import render from './util/render'

describe('ChoiceField', () => {
  it('has a display name', () => {
    expect(ChoiceField).to.have.property('displayName', 'ChoiceField')
  })

  describe('[Presentation]', () => {
    it('renders a wrapped <input /> with a <label />', () => {
      var sut = render(
        <ChoiceField />
      )
      var [input, label] = sut.props.children

      expect(sut).to.have.property('type', 'div')
      expect(sut).to.have.deep.property('props.className', 'ms-ChoiceField')

      expect(input).to.have.property('type', 'input')
      expect(input).to.have.deep.property('props.className', 'ms-ChoiceField-input')

      expect(label).to.have.property('type', 'label')
      expect(label).to.have.deep.property('props.className', 'ms-ChoiceField-field')
    })

    it('renders the children as the label', () => {
      var sut = render(
        <ChoiceField>Foo</ChoiceField>
      )
      var [, label] = sut.props.children
      var innerLabel = label.props.children

      expect(innerLabel).to.have.property('type', 'span')
      expect(innerLabel).to.have.deep.property('props.className', 'ms-Label')
      expect(innerLabel).to.have.deep.property('props.children', 'Foo')
    })
  })
})
