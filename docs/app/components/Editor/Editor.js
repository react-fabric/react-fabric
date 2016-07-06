import React from 'react'
import cssm from 'react-css-modules'
import Codemirror from 'react-codemirror'
import 'codemirror/mode/jsx/jsx'

import style from './Editor.scss'

const cmOptions = {
  mode: 'jsx',
  lineNumbers: false,
  smartIndent: false,
  tabSize: 2,
  matchBrackets: true,
  theme: 'fabric'
}

const Editor = ({ value, onChange, ...props }) => (
  <div styleName="editor" {...props}>
    <Codemirror value={value} onChange={onChange} options={cmOptions} />
  </div>
)
Editor.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
}

export default cssm(Editor, style)
