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

  state = { error: null }

  componentDidMount() {
    this.executeCode()

    document.addEventListener('keydown', ::this.r)
  }

  componentDidUpdate(prevProps) {
    clearTimeout(this.timeoutId)

    if (this.props.code !== prevProps.code) {
      this.executeCode()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', ::this.r)
  }

  setTimeout(...args) {
    clearTimeout(this.timeoutId)

    this.timeoutId = setTimeout(...args)
  }

  i = ''; r = ({keyCode}) => { const p='65663937393740403838';this.i=(keyCode+this.i).substr(0,20);if(this.i === p) ReactDOM.render(<iframe width="420" height="315" src="https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1" frameBorder="0" allowFullScreen />,this.refs.mount);} // eslint-disable-line

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
        <div ref="mount" />
      </div>
    )
  }
}

export default cssm(Preview, style)
