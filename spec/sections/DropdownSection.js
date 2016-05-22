import React from 'react'

import Dropdown from '../../src/Dropdown'

const options = ['Foo', 'Bar', 'Baz'].map((label, i) => ({ label, value: i }))

class DropdownSection extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false,
      value: undefined
    }
  }

  _onFocus() { this.setState({ ...this.state, active: true }) }
  _onBlur() { this.setState({ ...this.state, active: false }) }
  _onChange(value) { this.setState({ ...this.state, value, active: false }) }

  render() {
    return (
      <section className="dropdown-section">
        <h2>Dropdown</h2>
        <div>
          <Dropdown label="Fabric Dropdown"
            placeholder="Click to select..."
            active={this.state.active}
            onFocus={::this._onFocus}
            onBlur={::this._onBlur}
            value={this.state.value}
            onChange={::this._onChange}
            options={options} />
          Selected Option: <code>{ JSON.stringify(options[this.state.value] || null) }</code>
        </div>
      </section>
    )
  }
}

export default DropdownSection
