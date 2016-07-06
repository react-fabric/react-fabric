import React from 'react'
import cssm from 'react-css-modules'

import { Icon } from 'react-fabric'

import { Editor, Preview } from '../../components'

import style from './Components.scss'

class Playground extends React.Component {
  static propTypes = {
    defaultCode: React.PropTypes.string,
    close: React.PropTypes.func.isRequired
  }
  static defaultProps = {
    defaultCode: 'return <span>Type your code here!</span>'
  }

  state = { code: '' }

  handleChange = (value) => {
    this.setState({ ...this.state, code: value })
  }

  render() {
    const { close } = this.props
    const code = this.state.code || this.props.defaultCode

    return (
      <div styleName="pg-root">
        <span styleName="pg-close" onClick={close}>
          <Icon glyph="x" />
        </span>
        <Editor styleName="pg-editor" value={code} onChange={::this.handleChange} />
        <Preview styleName="pg-preview" code={code} />
      </div>
    )
  }

}

export default cssm(Playground, style)
