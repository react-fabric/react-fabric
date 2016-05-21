import React from 'react'

import Dialog from '../../src/Dialog'
import Button from '../../src/Button'

class DialogComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      isHidden: true,
      darkOverlay: false
    }
  }

  _show() {
    this.setState({ ...this.state, isHidden: false })
  }

  _showDark() {
    this.setState({ ...this.state, isHidden: false, darkOverlay: true })
  }

  _hide() {
    this.setState({ ...this.state, isHidden: true, darkOverlay: false })
  }

  render() {
    return (
      <section className="dialog-section">
        <h2>Dialog & Overlay</h2>
        <Button onClick={::this._show}>Open Dialog</Button>
        <Button onClick={::this._showDark}>Open Dialog w/ dark overlay</Button>
        <Dialog closeable
          onClose={::this._hide}
          hidden={this.state.isHidden}
          darkOverlay={this.state.darkOverlay}>
          <Dialog.Title>My Dialog</Dialog.Title>
          <Dialog.Subtext>Click overlay or close button to close</Dialog.Subtext>
          <Dialog.Action onClick={::this._hide}>Close</Dialog.Action>
        </Dialog>
      </section>
    )
  }
}

export default DialogComponent
