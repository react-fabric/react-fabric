import React from 'react'
import cssm from 'react-css-modules'
import Icon from 'react-fabric/Icon'

import { Link } from '../../components'

import style from './Home.scss'

const DUMB_LINK = 'https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0'

const ghEmbedUrl = ({ user, repo, type }) => (
  `https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=${type}&count=true`
)

const Home = () => (
  <article styleName="root">
    <header styleName="header">
      <div styleName="sellout">
        <iframe src={ghEmbedUrl({ user: 'kmees', repo: 'react-fabric', type: 'star' })}
          frameBorder="0" scrolling="0" />
        <iframe src={ghEmbedUrl({ user: 'kmees', repo: 'react-fabric', type: 'fork' })}
          frameBorder="0" scrolling="0" />
      </div>
      <div styleName="logo"></div>
      <h1 styleName="title">react-fabric</h1>
      <p styleName="subtitle">Office UI Fabric components built with React.</p>
      <navigation styleName="navigation">
        <ul>
          <li><Link to="/getting-started">Getting started</Link></li>
          <li><Icon glyph="dot" /></li>
          <li><Link to="/components">Components</Link></li>
          <li><Icon glyph="dot" /></li>
          <li><Link to="https://github.com/kmees/react-fabric">GitHub</Link></li>
        </ul>
      </navigation>
    </header>
    <section styleName="content">
      <p>
        <strong>react-fabric</strong> implements
        the <Link to="http://dev.office.com/fabric">Office UI Fabric</Link> components
        natively in React. It is built using the latest &amp; greatest in
        front-end development like ES6+, CSS Modules (with SASS) and Webpack.
      </p>
      <p>
        All components are <Link to={DUMB_LINK}>dumb</Link> by
        design which makes them easy to use with other react libraries
        like <Link to="https://github.com/erikras/redux-form">redux-form</Link>.
      </p>
    </section>
    <footer styleName="footer">
      react-fabric © 2016
    </footer>
  </article>
)

export default cssm(Home, style)
