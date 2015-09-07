/* eslint no-console: 0 */
import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route } from 'react-router'
import { history } from 'react-router/lib/HashHistory'

import { App, Home, Components } from './pages'

require('Fabric/dist/css/fabric.css')
require('Fabric/dist/css/fabric.components.css')

require('./css/main.css')

ReactDOM.render((
  <Router history={history}>
    <Route component={App}>
      <Route name="home" path="/" component={Home} />
      <Route name="components" path="/components" component={Components} />
    </Route>
  </Router>
), document.getElementById('app-container'))

