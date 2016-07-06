# Dropdown

The Dropdown component wraps a [controlled](http://facebook.github.io/react/docs/forms.html#controlled-components) 
`<select />` element.

<a href="http://dev.office.com/fabric/components/Dropdown" target="_blank">View Office Fabric UI docs</a>

## Example <!-- EXAMPLE -->
```jsx
import Dropdown from 'react-fabric/lib/Dropdown';

const OPTIONS = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' }
];

class DropdownExample extends React.Component {
  state = {
    active: false,
    value: null
  }

  handleFocus() { this.setState({ ...this.state, active: true }) }
  handleBlur() { this.setState({ ...this.state, active: false }) }
  handleChange(e, option) { 
    this.setState({ 
      ...this.state,
      value: option.value,
      active: false
    })
  }

  render() {
    return (
      <section>
        <h1>Dropdown</h1>
        <pre>{ JSON.stringify({ state: this.state }, null, 2) }</pre>
        <div>
          <Dropdown label="Choose an option"
            placeholder="Click to select..."
            active={this.state.active}
            onFocus={::this.handleFocus}
            onBlur={::this.handleBlur}
            value={this.state.value}
            onChange={::this.handleChange}
            options={OPTIONS} />
        </div>
      </section>
    )
  }
}

return <DropdownExample />;
```

## Properties

All additional properties, i.e. `onFocus`, `onBlur`, etc. are passed down to the underlying `<input />` element.

| Name                  | Type                             | Default     | Description                                                                |
| :-----                | :-----                           | :-----      | :-----                                                                     |
| <del>`children`</del> |                                  |             | This component does not render any `children`.                             |
| `active`              | `bool`                           | `false`     | Set this to `true` when the input has focus to show the list of options.   |
| `disabled`            | `bool`                           | `false`     | Set to `true` to disable the component.                                    |
| `label`               | `string`                         | `undefined` | Label of the component.                                                    |
| `name`                | `string`                         | `undefined` | Name of the input component.                                               |
| `onBlur`              | `func(event)`                    | `undefined` | Callback when the component loses focus.                                   |
| `onChange`            | `func(event, option)`            | `undefined` | Callback when a value is selected.                                         |
| `onFocus`             | `func(event)`                    | `undefined` | Callback when the component gains focus.                                   |
| `options`             | `arrayOf(shape({label, value}))` | `[]`        | **Required** List options for the Dropdown.                                |
| `placeholder`         | `name`                           | `undefined` | Placeholder text when no value is selected.                                |
| `required`            | `bool`                           | `false`     | Set to `true` to mark the component as required.                           |
| `textLeft`            | `bool`                           | `false`     | Set to `true` to render the label on the left (matching the Toggle style). |
| `value`               | `string`<br/>`number`            | `undefined` | Value of the input element.                                                |
