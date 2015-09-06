import React from 'react'

import Button from '../src/Button.jsx'

import render from './util/render'

describe('Button', () => {
  it('has a display name', () => {
    expect(Button.displayName).to.equal('Button')
  })

  describe('[Presentation]', () => {
    it('renders a <button />', () => {
      var sut = render(
        <Button>Foo</Button>
      )
      var label = sut.props.children

      expect(sut).to.have.property('type', 'button')
      expect(sut).to.have.deep.property('props.className', 'ms-Button')

      expect(label).to.have.property('type', 'span')
      expect(label).to.have.deep.property('props.className', 'ms-Button-label')
      expect(label).to.have.deep.property('props.children', 'Foo')
    })
  })
})
