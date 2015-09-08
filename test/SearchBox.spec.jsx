import React from 'react'
import TestUtils, { Simulate } from 'react-addons-test-utils'

import render from './util/render'

import SearchBox from '../src/SearchBox'

describe('SearchBox', () => {
  it('has a display name', () => {
    expect(SearchBox).to.have.property('displayName', 'SearchBox')
  })

  describe('[Presentation]', () => {
    it('renders a wrapped <input />', () => {
      var sut = render(
        <SearchBox />
      )

      var [input] = sut.props.children

      expect(sut).to.have.property('type', 'div')
      expect(sut).to.have.deep.property('props.className', 'ms-SearchBox')

      expect(input).to.have.property('type', 'input')
      expect(input).to.have.deep.property('props.className', 'ms-SearchBox-field')
    })

    it('can have a label', () => {
      var sut = render(
        <SearchBox label="Foo" />
      )

      var [, label] = sut.props.children

      expect(label).to.have.property('type', 'label')
      expect(label).to.have.deep.property('props.className', 'ms-SearchBox-label')

      expect(label.props.children[0]).to.have.deep.property('props.className', 'ms-SearchBox-icon ms-Icon ms-Icon--search')
      expect(label.props.children[1]).to.equal('Foo')
    })

    it('has a close button', () => {
      var sut = render(
        <SearchBox />
      )

      var [, , closeBtn] = sut.props.children

      expect(closeBtn).to.have.property('type', 'button')
      expect(closeBtn).to.have.deep.property('props.className', 'ms-SearchBox-closeButton')

      expect(closeBtn.props.children).to.have.deep.property('props.className', 'ms-Icon ms-Icon--x')
    })
  })

  describe('[Functionality]', () => {
    it('handles active state', () => {
      var sut = TestUtils.renderIntoDocument(
        <SearchBox />
      )

      var node = React.findDOMNode(sut)
      var input = TestUtils.findRenderedDOMComponentWithTag(sut, 'input')
      Simulate.focus(input)

      expect(node.className).to.include('is-active')

      Simulate.blur(input)

      expect(node.className).to.not.include('is-active')
    })

    it('hides label when input has focus', () => {
      var sut = TestUtils.renderIntoDocument(
        <SearchBox label="Foo" />
      )

      var label = TestUtils.findRenderedDOMComponentWithTag(sut, 'label')
      var input = TestUtils.findRenderedDOMComponentWithTag(sut, 'input')
      Simulate.focus(input)

      expect(label).to.have.deep.property('style.display', 'none')
    })

    it('hides label when input has a value', () => {
      var sut = TestUtils.renderIntoDocument(
        <SearchBox label="Foo" />
      )

      var label = TestUtils.findRenderedDOMComponentWithTag(sut, 'label')
      var input = TestUtils.findRenderedDOMComponentWithTag(sut, 'input')
      input.value = 'Bar'
      Simulate.change(input)

      expect(label).to.have.deep.property('style.display', 'none')
    })

    it('clears value and active state when close button is clicked', () => {
      var sut = TestUtils.renderIntoDocument(
        <SearchBox label="Foo" />
      )

      var node = React.findDOMNode(sut)
      var label = TestUtils.findRenderedDOMComponentWithTag(sut, 'label')
      var input = TestUtils.findRenderedDOMComponentWithTag(sut, 'input')
      var closeBtn = TestUtils.findRenderedDOMComponentWithTag(sut, 'button')
      Simulate.focus(input)
      input.value = 'Bar'
      Simulate.change(input)

      Simulate.click(closeBtn)

      expect(node.className).to.not.include('is-active')
      expect(label).to.have.deep.property('style.display', '')
    })
  })
})
