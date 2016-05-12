/* global ga:false */

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, useRouterHistory } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'

import { Components, GettingStarted, Home, Layout } from './containers'

require('./global.scss')

function logPageviewInGA() {
  ga('send', 'pageview', this.state.location.pathname)
}

ReactDOM.render((
  <Router history={useRouterHistory(createHashHistory)({ queryKey: false })}
    onUpdate={logPageviewInGA}>
    <Route path="/" component={Home} />
    <Route component={Layout}>
      <Route path="/getting-started" component={GettingStarted} />
      <Route path="/components" component={Components}>
        <Route path=":componentName" />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
