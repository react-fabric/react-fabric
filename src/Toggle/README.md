# Toggle

Toggle component wraps a [controlled](http://facebook.github.io/react/docs/forms.html#controlled-components) checkbox element.

<a href="http://dev.office.com/fabric/components/Toggle" target="_blank">View Office Fabric UI docs</a>

## Example <!-- EXAMPLE -->
```jsx
import Toggle from 'react-fabric/lib/Toggle';

class ToggleExample extends React.Component {
  state = { default: false, textleft: false }
  handleChanged = e => this.setState({ 
    ...this.state,
    [e.target.name]: e.target.checked
  })

  render() {
    return (
      <section>
        <h1>Toggle</h1>
        <Toggle name="default"
          checked={this.state.default}
          onChange={::this.handleChanged}
          description="Default" />
        <Toggle name="textleft"
          textLeft
          checked={this.state.textleft}
          onChange={::this.handleChanged}
          description="Text Left" />
        <pre>{ JSON.stringify({ state: this.state }, null, 2) }</pre>
      </section>
    )
  }
}

return <ToggleExample />;
```

## Properties

All additional properties, i.e. `onFocus`, `onBlur`, etc. are passed down to the underlying `<input />` element.

| Name                  | Type                 | Default     | Description                                                                                                                                                                                 |
| :-----                | :-----               | :-----      | :-----                                                                                                                                                                                      |
| <del>`children`</del> |                        |             | This component does not render any `children`                                                                                                                                               |
| `checked`             | `bool`                 | `undefined` | Checked state of the input element.                                                                                                                                                         |
| `description`         | `string`               | `undefined` | Description (basically the label) of the Toggle.                                                                                                                                            |
| `disabled`            | `bool`                 | `false`     | Set to `true` to disable the component.                                                                                                                                                     |
| `id`                  | `string`               | `undefined` | Id of the component. Also used for generating a unique id for the input element which is required for working label clicks. It is recommended to either set this or `name` (or both).       |
| `labelOff`            | `string`               | `off`       | Label shown when the input is unchecked.                                                                                                                                                    |
| `labelOn`             | `string`               | `on`        | Label shown when the input is checked.                                                                                                                                                      |
| `name`                | `string`               | `undefined` | Name of the input component. Also used for generating a unique id for the input element which is required for working label clicks. It is recommended to either set this or `id` (or both). |
| `onChange`            | `func(checked, event)` | `undefined` | Callback invoked when the input's checked state changes.                                                                                                                                    |
| `textLeft`            | `bool`                 | `false`     | Set to `true` to render the description on the left.                                                                                                                                        |
