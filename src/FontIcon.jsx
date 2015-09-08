import React, { PropTypes } from 'react'

export default class FontIcon extends React.Component {
  static displayName = 'FontIcon'
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    const { name } = this.props
    return (
      <i className={`ms-Icon ms-Icon--${name}`} />
    )
  }
}
