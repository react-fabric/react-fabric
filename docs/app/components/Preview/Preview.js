/* eslint-disable no-eval*/
import React from 'react'
import ReactDOM from 'react-dom'
import cssm from 'react-css-modules'
import { transform } from 'babel-standalone'

import * as ReactFabric from 'react-fabric'

import style from './Preview.scss'

const ERROR_TIMEOUT = 500

const SCOPE = { React, ...ReactFabric }

class Preview extends React.Component {
  static propTypes = {
    code: React.PropTypes.string.isRequired
  }

  constructor() {
    super()

    this.state = { error: null }
  }

  componentDidMount() {
    this.executeCode()
  }

  componentDidUpdate(prevProps) {
    clearTimeout(this.timeoutId)

    if (this.props.code !== prevProps.code) {
      this.executeCode()
    }
  }

  setTimeout(...args) {
    clearTimeout(this.timeoutId)

    this.timeoutId = setTimeout(...args)
  }

  compileCode() {
    const code = `
      (function (${Object.keys(SCOPE).join(', ')}, mountNode) {
        ${this.props.code}
      });`

    return transform(code, {
      presets: ['es2015', 'stage-0', 'react']
    }).code
  }

  buildScope(mountNode) {
    return Object.keys(SCOPE)
      .map(key => SCOPE[key])
      .concat(mountNode)
  }

  executeCode() {
    const mountNode = this.refs.mount
    const scope = this.buildScope(mountNode)

    try {
      ReactDOM.unmountComponentAtNode(mountNode)
    } catch (e) {
      console.error(e) // eslint-disable-line no-console
    }

    try {
      ReactDOM.render(
        <div>{eval(this.compileCode())(...scope)}</div>
      , mountNode)

      if (this.state.error) {
        this.setState({ error: null })
      }
    } catch (err) {
      this.setTimeout(() => {
        this.setState({ error: err.toString() })
      }, ERROR_TIMEOUT)
    }
  }

  render() {
    const { error } = this.state
    return (
      <div {...this.props} styleName="preview">
        { error && <span styleName="error">{error}</span> }
        <div ref="mount" styleName="raw" />
      </div>
    )
  }
}

export default cssm(Preview, style)
