import React from 'react'

import { FontIcon } from '../src'

import render from './util/render'

describe('FontIcon', () => {
  it('has a display name', () => {
    expect(FontIcon).to.have.property('displayName', 'FontIcon')
  })

  describe('[Presentation]', () => {
    it('renders an icon', () => {
      var sut = render(
        <FontIcon name="heart" />
      )

      expect(sut).to.have.property('type', 'i')
      expect(sut).to.have.deep.property('props.className', 'ms-Icon ms-Icon--heart')
    })
  })
})
