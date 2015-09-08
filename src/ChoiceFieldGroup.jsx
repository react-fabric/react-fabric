import React, { PropTypes } from 'react'

import ChoiceField from './ChoiceField'
import Label from './Label'

export default class ChoiceFieldGroup extends React.Component {
  static displayName = 'ChoiceFieldGroup'
  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.any
    ),
    defaultValue: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Label),
    ]),
    required: PropTypes.bool,
  }

  constructor(props) {
    super()

    this.state = {
      selectedValue: props.defaultValue || '',
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
        selectedValue: this.state.selectedValue || checked[0] || '',
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


  _createChoiceField(choice, {name}) {
    const {
      label,
      value,
      ...other,
    } = choice.props

    return (
      <ChoiceField
        {...other}
        checked={this.state.selectedValue === value}
        key={value}
        label={label}
        name={name}
        onChange={this._onChoiceChanged}
        type="radio"
        value={value} />
    )
  }

  _onChoiceChanged(e) {
    this.setState({
      selectedValue: e.target.value,
    })

    if (this.props.onChange) { this.props.onChange(e) }
  }

  foo() {
    return this.state.selectedValue
  }

  render() {
    const {
      children,
      name,
      required,
      title,
    } = this.props

    return (
      <div className="ms-ChoiceFieldGroup">
        <div className="ms-ChoiceFieldGroup-title">
          <Label required={required}>{title}</Label>
        </div>
        {
          React.Children.map(children, (choice) => {
            return this._createChoiceField(choice, {name})
          }, this)
        }
      </div>
    )
  }
}
