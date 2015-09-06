import React, { PropTypes } from 'react'
import cx from 'classnames'

export default class ChoiceField extends React.Component {
  static displayName = 'ChoiceField'
  static propTypes = {
    type: PropTypes.oneOf([
      'checkbox',
      'radio'
    ]).isRequired
  }
  static defaultProps = {
    type: 'checkbox'
  }

  render() {
    const { type } = this.props

    return (
      <div className={cx(
        'ms-ChoiceField'
      )}>
        <input className="ms-ChoiceField-input" type={type} />
        <label className="ms-ChoiceField-field">
          <span className="ms-Label">{this.props.children}</span>
        </label>
      </div>
    )
  }
}
