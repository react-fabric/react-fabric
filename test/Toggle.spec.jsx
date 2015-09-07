import React from 'react'
import sinon from 'sinon'
import TestUtils, { Simulate } from 'react-addons-test-utils'

import Toggle from '../src/Toggle'

import render from './util/render'

describe('Toggle', () => {
  it('has a display name', () => {
    expect(Toggle).to.have.property('displayName', 'Toggle')
  })

  describe('[Presentation]', () => {
    it('renders a wrapper <input />', () => {
      var sut = render(
        <Toggle />
      )

      var [, input, ] = sut.props.children

      expect(sut).to.have.property('type', 'div')
      expect(sut).to.have.deep.property('props.className', 'ms-Toggle')

      expect(input).to.have.property('type', 'input')
      expect(input).to.have.deep.property('props.className', 'ms-Toggle-input')
    })

    it('can have an on and off label', () => {
      var sut = render(
        <Toggle onLabel="On" offLabel="Off" />
      )

      var [, , label] = sut.props.children
      var [on, off] = label.props.children

      expect(label).to.have.property('type', 'label')
      expect(label).to.have.deep.property('props.className', 'ms-Toggle-field')

      expect(on).to.have.property('type', 'span')
      expect(on).to.have.deep.property('props.className', 'ms-Label ms-Label--on')
      expect(on).to.have.deep.property('props.children', 'On')

      expect(off).to.have.property('type', 'span')
      expect(off).to.have.deep.property('props.className', 'ms-Label ms-Label--off')
      expect(off).to.have.deep.property('props.children', 'Off')
    })

    it('can have a description', () => {
      var sut = render(
        <Toggle description="Foo" />
      )

      var [description, ] = sut.props.children

      expect(description).to.have.property('type', 'span')
      expect(description).to.have.deep.property('props.className', 'ms-Toggle-description')
      expect(description).to.have.deep.property('props.children', 'Foo')
    })

    it('can have the text on the left', () => {
      var sut = render(
        <Toggle textLeft={true} />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Toggle--textLeft')
    })
  })

  describe('[Functionality]', () => {
    it('generates an id and a \'for\' tag to connect <input /> and <label />', () => {
      var sut = render(
        <Toggle />
      )
      var [, input, label] = sut.props.children

      expect(input.props.id).to.not.be.undefined
      expect(label.props.htmlFor).to.equal(input.props.id)
    })

    it('supports onChange callback', () => {
      var onChange = sinon.spy()
      var sut = TestUtils.renderIntoDocument(
        <Toggle onChange={onChange} />
      )

      var input = TestUtils.findRenderedDOMComponentWithTag(sut, 'input')
      input.checked = true
      Simulate.change(input)

      expect(onChange).to.have.been.calledOnce.and.calledWithMatch({
        target: { checked: true }
      })
    })
  })
})
