import React from 'react'

import ChoiceFieldGroup from '../src/ChoiceFieldGroup'
import ChoiceField from '../src/ChoiceFieldGroup'
import Label from '../src/Label'

import render from './util/render'

describe('ChoiceFieldGroup', () => {
  it('has a display name', () => {
    expect(ChoiceFieldGroup).to.have.property('displayName', 'ChoiceFieldGroup')
  })

  describe('[Presentation]', () => {
    it('renders a wrapped list of <ChoiceField />s', () => {
      var sut = render(
        <ChoiceFieldGroup>
          <ChoiceField />
          <ChoiceField />
        </ChoiceFieldGroup>
      )

      expect(sut).to.have.property('type', 'div')
      expect(sut).to.have.deep.property('props.className', 'ms-ChoiceFieldGroup')
      expect(sut.props.children).to.have.lengthOf(2)
    })

    it('can have a label', () => {
      var sut = render(
        <ChoiceFieldGroup title="Foo" />
      )
      var [title, ] = sut.props.children
      var label = title.props.children

      expect(title).to.have.property('type', 'div')
      expect(title).to.have.deep.property('props.className', 'ms-ChoiceFieldGroup-title')

      expect(label).to.have.property('type', Label)
      expect(label).to.have.deep.property('props.children', 'Foo')
    })
  })
})
