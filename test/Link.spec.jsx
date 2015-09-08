import React from 'react'

import render from './util/render'

import Link from '../src/Link.jsx'

describe('Link', () => {
  it('has a display name', () => {
    expect(Link).to.have.property('displayName', 'Link')
  })

  describe('[Presentation]', () => {
    it('renders a <a /> element', () => {
      var sut = render(
        <Link>Foo</Link>
      )

      expect(sut).to.have.property('type', 'a')
      expect(sut).to.have.deep.property('props.className', 'ms-Link')
      expect(sut).to.have.deep.property('props.children', 'Foo')
    })

    it('can be a hero link', () => {
      var sut = render(
        <Link hero={true} />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Link--hero')
    })
  })

  describe('[Functionality]', () => {
    it('passes properties to <a /> element', () => {
      var sut = render(
        <Link href="#foo" />
      )

      expect(sut).to.have.deep.property('props.href', '#foo')
    })
  })
})
