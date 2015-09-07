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
    children: PropTypes.arrayOf(
      PropTypes.any
    ),
    required: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string
  }

  constructor(props) {
    super()

    this.state = {
      selectedValue: props.defaultValue || ''
    }

    this._onChoiceChanged = this._onChoiceChanged.bind(this)
  }

  componentWillMount() {
    const checked = []

    React.Children.forEach(this.props.children, (choice) => {
      if (choice.props.hasOwnProperty('checked') && choice.props.checked) {
        checked.push(choice.props.value)
      }
    })

    // this.setState throws error when shallow rendering
    // https://github.com/facebook/react/issues/4461
    if (process.env.NODE_ENV === 'test') {
      this.state.selectedValue = this.state.selectedValue || checked[0] || ''
    } else {
      this.setState({
        ...this.state,
        selectedValue: this.state.selectedValue || checked[0] || ''
      })
    }

    if (process.env.NODE_ENV !== 'production') {
      if (checked.length > 0 && this.props.defaultValue) {
        const warning = 'Both a default value and an initially checked children is passed. ' +
          'Using the passed default value as the default value.'
        console.warn(warning) // eslint-disable-line no-console
      }
      if (checked.length > 1) {
        const warning = 'Two or more initally checked children are passed. ' +
          'Using the first one as the default value.'
        console.warn(warning) // eslint-disable-line no-console
      }
    }
  }


  _createLabel({title, required}) {
    if (!title) { return null }

    if (title._isReactElement && title.type === Label) {
      return React.cloneElement(title, {required})
    }

    return <Label required={required}>{title}</Label>
  }

  _createChoiceField(choice, {name}) {
    const {
      label,
      value,
      ...other
    } = choice.props

    return (
      <ChoiceField
        {...other}
        key={value}
        name={name}
        label={label}
        value={value}
        onChange={this._onChoiceChanged}
        checked={this.state.selectedValue === value}
        type="radio" />
    )
  }

  _onChoiceChanged(e) {
    this.setState({
      selectedValue: e.target.value
    })

    if (this.props.onChange) { this.props.onChange(e) }
  }

  foo() {
    return this.state.selectedValue
  }

  render() {
    const {
      children,
      title,
      required,
      name
    } = this.props

    const label = this._createLabel({title, required})

    return (
      <div className="ms-ChoiceFieldGroup">
        {
          label ? <div className="ms-ChoiceFieldGroup-title">
            {label}
          </div> : null
        }
        {
          React.Children.map(children, (choice) => {
            return this._createChoiceField(choice, {name})
          }, this)
        }
      </div>
    )
  }
}
