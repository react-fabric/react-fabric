import React from 'react'
import _ from 'lodash'

import Button from '../src/Button.jsx'

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
      expect(_.compact(sut.props.children)).to.be.empty
    })

    it('renders its children as the label', () => {
      var sut = render(
        <Button>Foo</Button>
      )
      var [label] = _.compact(sut.props.children)

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
        <Button primary={true} />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--primary')
    })

    it('can be a hero button', () => {
      var sut = render(
        <Button hero={true} />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--hero')
    })

    it('can be a compound button', () => {
      var sut = render(
        <Button compound={true} />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--compound')
    })

    it('can be a command button', () => {
      var sut = render(
        <Button command={true} />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--command')
    })

    it('can have a description', function() {
      var sut = render(
        <Button description="Foo" />
      )
      var [description] = _.compact(sut.props.children)

      expect(description).to.have.property('type', 'span')
      expect(description).to.have.deep.property('props.className', 'ms-Button-description')
      expect(description).to.have.deep.property('props.children', 'Foo')
    })

    it('can have an icon', function() {
      var sut = render(
        <Button icon="heart" />
      )
      var [icon] = _.compact(sut.props.children)

      expect(icon).to.have.property('type', 'span')
      expect(icon).to.have.deep.property('props.className', 'ms-Button-icon')
      expect(icon.props.children).to.have.property('type', 'i')
      expect(icon.props.children).to.have.deep.property('props.className', 'ms-Icon ms-Icon--heart')
    })
  })

  describe('[Functionality]', () => {
    it('can have a type attribute', () => {
      var sut = render(
        <Button type="submit" />
      )

      expect(sut).to.have.deep.property('props.type', 'submit')
    })
  })
})
