import React from 'react'
import cssm from 'react-css-modules'

import Raw from '../../components/Raw'

import readme from '../../../../README.md'

import style from './GettingStarted.scss'

const html = readme.substr(readme.indexOf('<h2'))

const GettingStarted = () => (
  <article styleName="root">
    <h2 styleName="title">Getting Started</h2>
    <Raw html={html} indent />
  </article>
)

export default cssm(GettingStarted, style)
