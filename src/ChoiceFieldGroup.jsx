import React, { PropTypes } from 'react'

import ChoiceField from './ChoiceField'
import Label from './Label'

export default class ChoiceFieldGroup extends React.Component {
  static displayName = 'ChoiceFieldGroup'
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Label)
    ]),
    children: PropTypes.arrayOf(PropTypes.instanceOf(ChoiceField)),
    required: PropTypes.bool
  }

  _createLabel({title, required}) {
    if (!title) { return null }

    if (title._isReactElement && title.type === Label) {
      return React.cloneElement(title, {required})
    }

    return <Label required={required}>{title}</Label>
  }

  render() {
    const {
      children,
      title,
      required
    } = this.props

    const label = this._createLabel({title, required})

    return (
      <div className="ms-ChoiceFieldGroup">
        {
          label ? <div className="ms-ChoiceFieldGroup-title">
            {label}
          </div> : null
        }
        {children}
      </div>
    )
  }
}
