import React from 'react'

export default class Button extends React.Component  {
  static displayName = 'Button'

  render() {
    return (
      <button className="ms-Button">
        <span className="ms-Button-label">{this.props.children}</span>
      </button>
    )
  }
}
