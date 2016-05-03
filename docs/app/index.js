import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, useRouterHistory } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'

import Home from './containers/Home'

require('./global.scss')

ReactDOM.render((
  <Router history={useRouterHistory(createHashHistory)({ queryKey: false })}>
    <Route path="/" component={Home} />
  </Router>
), document.getElementById('app'))
