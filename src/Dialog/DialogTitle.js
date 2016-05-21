import React from 'react'

import fabricComponent from '../fabricComponent.js'

import style from './Dialog.scss'

const DialogTitle = ({ children }) => (
  <div styleName="ms-Dialog-header">
    <p styleName="ms-Dialog-title">
      { children }
    </p>
  </div>
)
DialogTitle.propTypes = {
  children: React.PropTypes.node
}


export default fabricComponent(DialogTitle, style)
