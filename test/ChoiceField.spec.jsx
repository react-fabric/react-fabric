import React from 'react'
import sinon from 'sinon'
import TestUtils, { Simulate } from 'react-addons-test-utils'

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

    it('can have a label', () => {
      var sut = render(
        <ChoiceField label="Foo" />
      )
      var [, label] = sut.props.children
      var innerLabel = label.props.children

      expect(innerLabel).to.have.property('type', 'span')
      expect(innerLabel).to.have.deep.property('props.className', 'ms-Label')
      expect(innerLabel).to.have.deep.property('props.children', 'Foo')
    })

    it('can be a checkbox', () => {
      var sut = render(
        <ChoiceField type="checkbox" />
      )
      var [input, ] = sut.props.children

      expect(input).to.have.deep.property('props.type', 'checkbox')
    })

    it('can be a radio button', () => {
      var sut = render(
        <ChoiceField type="radio" />
      )
      var [input, ] = sut.props.children

      expect(input).to.have.deep.property('props.type', 'radio')
    })
  })

  describe('[Functionality]', () => {
    it('generates an id and a \'for\' tag to connect <input /> and <label />', () => {
      var sut = render(
        <ChoiceField />
      )
      var [input, label] = sut.props.children

      expect(input.props.id).to.not.be.undefined
      expect(label.props.htmlFor).to.equal(input.props.id)
    })

    it('supports onChange callback', () => {
      var onChange = sinon.spy()
      var sut = TestUtils.renderIntoDocument(
        <ChoiceField onChange={onChange} />
      )

      var input = TestUtils.findRenderedDOMComponentWithTag(sut, 'input')
      input.checked = true
      Simulate.change(input)

      expect(onChange).to.have.been.calledOnce.and.calledWithMatch({
        target: { checked: true }
      })
    })

    it('supports initial checked state', () => {
      var sut = render(
        <ChoiceField checked={true} />
      )

      var [input, ] = sut.props.children

      expect(input).to.have.deep.property('props.checked', true)
    })

    it('adds name property to <input />', () => {
      var sut = render(
        <ChoiceField name="foo" />
      )

      var [input, ] = sut.props.children

      expect(input).to.have.deep.property('props.name', 'foo')
    })

    it('can have a value', () => {
      var sut = render(
        <ChoiceField value="foo" />
      )

      var [input, ] = sut.props.children

      expect(input).to.have.deep.property('props.value', 'foo')
    })
  })
})
