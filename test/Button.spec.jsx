import React from 'react'
import sinon from 'sinon'

import Button from '../src/Button'
import FontIcon from '../src/FontIcon'

import render from './util/render'

describe('Button', () => {
  it('has a display name', () => {
    expect(Button.displayName).to.equal('Button')
  })

  describe('[Presentation]', () => {
    it('renders a <button />', () => {
      var sut = render(
        <Button />
      )

      expect(sut).to.have.property('type', 'button')
      expect(sut).to.have.deep.property('props.className', 'ms-Button')
    })

    it('renders its children as the label', () => {
      var sut = render(
        <Button>Foo</Button>
      )
      var [, label] = sut.props.children

      expect(label).to.have.property('type', 'span')
      expect(label).to.have.deep.property('props.className', 'ms-Button-label')
      expect(label).to.have.deep.property('props.children', 'Foo')
    })

    it('can be disabled', () => {
      var sut = render(
        <Button disabled={true} />
      )

      expect(sut.props.className.split(' ')).to.include('is-disabled')
    })

    it('can be a primary button', () => {
      var sut = render(
        <Button type="primary" />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--primary')
    })

    it('can be a hero button', () => {
      var sut = render(
        <Button type="hero" />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--hero')
    })

    it('can be a compound button', () => {
      var sut = render(
        <Button type="compound" />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--compound')
    })

    it('can be a command button', () => {
      var sut = render(
        <Button type="command" />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--command')
    })

    it('can have a description', function() {
      var sut = render(
        <Button description="Foo" />
      )
      var [, , description] = sut.props.children

      expect(description).to.have.property('type', 'span')
      expect(description).to.have.deep.property('props.className', 'ms-Button-description')
      expect(description).to.have.deep.property('props.children', 'Foo')
    })

    it('can have an icon', function() {
      var sut = render(
        <Button iconName="heart" />
      )
      var [icon] = sut.props.children

      expect(icon).to.have.property('type', 'span')
      expect(icon).to.have.deep.property('props.className', 'ms-Button-icon')

      expect(icon.props.children).to.have.property('type', FontIcon)
      expect(icon.props.children).to.have.deep.property('props.name', 'heart')
    })
  })

  describe('[Functionality]', () => {
    it('is by default not a submit button', () => {
      var sut = render(
        <Button />
      )

      expect(sut).to.have.deep.property('props.type', 'button')
    })

    it('can be a submit button', () => {
      var sut = render(
        <Button submit={true} />
      )

      expect(sut).to.have.deep.property('props.type', 'submit')
    })

    it('passes other properties to the <button />', () => {
      var cb = sinon.spy()
      var sut = render(
        <Button onClick={cb}/>
      )

      expect(sut).to.have.deep.property('props.onClick', cb)
    })
  })
})
