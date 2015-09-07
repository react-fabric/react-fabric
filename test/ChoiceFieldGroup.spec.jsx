import React from 'react'
import TestUtils, { Simulate } from 'react-addons-test-utils'
import sinon from 'sinon'

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

    it('can be required', () => {
      var sut = render(
        <ChoiceFieldGroup required={true} title="Foo" />
      )
      var [{props: {children: label}}, ] = sut.props.children

      expect(label).to.have.deep.property('props.required', true)
    })
  })

  describe('[Functionality]', () => {
    it('can have an initially checked children as the default selected value', () => {
      var sut = TestUtils.renderIntoDocument(
        <ChoiceFieldGroup>
          <ChoiceField value="foo" />
          <ChoiceField value="bar" checked={true} />
        </ChoiceFieldGroup>
      )

      expect(sut).to.have.deep.property('state.selectedValue', 'bar')
    })

    it('supports a default value', () => {
      var sut = TestUtils.renderIntoDocument(
        <ChoiceFieldGroup defaultValue="bar">
          <ChoiceField value="foo" />
          <ChoiceField value="bar" />
        </ChoiceFieldGroup>
      )

      expect(sut).to.have.deep.property('state.selectedValue', 'bar')
    })

    it('supports onChange callback', () => {
      var onChange = sinon.spy()
      var sut = TestUtils.renderIntoDocument(
        <ChoiceFieldGroup onChange={onChange}>
          <ChoiceField value="foo" />
          <ChoiceField value="bar" />
        </ChoiceFieldGroup>
      )

      var [input, ] = TestUtils.scryRenderedDOMComponentsWithTag(sut, 'input')
      input.checked = true
      Simulate.change(input)

      expect(onChange).to.have.been.calledOnce.and.calledWithMatch({
        target: { value: 'foo' }
      })
    })

    it('throws a warning and uses the first one when multiple initially checked choices are passed', () => {
      /* eslint-disable no-console */
      console.warn = sinon.spy()
      var sut = TestUtils.renderIntoDocument(
        <ChoiceFieldGroup>
          <ChoiceField value="foo" checked={true} />
          <ChoiceField value="bar" checked={true} />
        </ChoiceFieldGroup>
      )

      expect(console.warn).to.have.been.calledOnce
      expect(sut).to.have.deep.property('state.selectedValue', 'foo')
      /* eslint-enable no-console */
    })

    it('throws a warning and uses the default value when an initially checked choice and a default value is passed', () => {
      /* eslint-disable no-console */
      console.warn = sinon.spy()
      var sut = TestUtils.renderIntoDocument(
        <ChoiceFieldGroup defaultValue="bar">
          <ChoiceField value="foo" checked={true} />
          <ChoiceField value="bar" />
        </ChoiceFieldGroup>
      )

      expect(console.warn).to.have.been.calledOnce
      expect(sut).to.have.deep.property('state.selectedValue', 'bar')
      /* eslint-enable no-console */
    })
  })
})
