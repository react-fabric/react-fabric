import React from 'react'

import SearchBox from '../../src/SearchBox'

class SearchBoxSection extends React.Component {
  state = { active: false, value: '' }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      value: e.target.value
    })
  }

  handleFocus = () => {
    this.setState({ ...this.state, active: true })
  }

  handleBlur = () => {
    this.setState({ ...this.state, active: false })
  }

  render() {
    return (
      <section>
        <h2>SearchBox</h2>
        <SearchBox active={this.state.active}
          value={this.state.value}
          onChange={::this.handleChange}
          onFocus={::this.handleFocus}
          onBlur={::this.handleBlur}
          placeholder="Search..." />
      </section>
    )
  }
}

export default SearchBoxSection
