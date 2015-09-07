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
    children: PropTypes.arrayOf(PropTypes.instanceOf(ChoiceField))
  }

  _createLabel({title}) {
    if (!title) { return null }

    if (title._isReactElement && title.type === Label) {
      return title
    }

    return <Label>{title}</Label>
  }

  render() {
    const { children, title} = this.props

    const label = this._createLabel({title})

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
