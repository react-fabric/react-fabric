# TextField

TextField component wraps a [controlled](http://facebook.github.io/react/docs/forms.html#controlled-components) 
`<input type="text">` or `<textarea />` element.

<a href="http://dev.office.com/fabric/components/TextField" target="_blank">View Office Fabric UI docs</a>

## Example <!-- EXAMPLE -->
```jsx
import TextField from 'react-fabric/lib/TextField';

class TextFieldExample extends React.Component {
  state = {}
  handleChanged = (e) => this.setState({ ...this.state, [e.target.name]: e.target.value })

  render() {
    return (
      <section>
        <h1>TextField</h1>
        <TextField label="Default" 
          name="default"
          value={this.state.default}
          onChange={::this.handleChanged} />
        <TextField label="Underlined"
          underlined 
          name="underlined"
          value={this.state.underlined} 
          onChange={::this.handleChanged} />
        <TextField label="Multiline"
          multiline 
          name="multiline"
          value={this.state.multiline}
          onChange={::this.handleChanged} />
        <pre>{ JSON.stringify({ state: this.state }, null, 2) }</pre>
      </section>
    )
  }
}

return <TextFieldExample />;
```

## Properties

All additional properties, i.e. `onFocus`, `onBlur`, etc. are passed down to the underlying `<input />` element.

| Name                  | Type     | Default     | Description                                                                                                                                                                                 |
| :-----                | :-----   | :-----      | :-----                                                                                                                                                                                      |
| <del>`children`</del> |          |             | This component does not render any `children`.                                                                                                                                              |
| `active`              | `bool`   | `false`     | Set this to `true` when the input has focus to hide the placeholder text (placeholder text is automatically hidden when the input has a value).                                               |
| `description`         | `string` | `undefined` | Description of the component.                                                                                                                                                               |
| `disabled`            | `bool`   | `undefined` | Set to `true` to disable the component.                                                                                                                                                     |
| `id`                  | `string` | `undefined` | Id of the component. Also used for generating a unique id for the input element which is required for working label clicks. It is recommended to either set this or `name` (or both).       |
| `label`               | `string` | `undefined` | Label of the component.                                                                                                                                                                     |
| `multiline`           | `bool`   | `false`     | Set to `true` to render a `<textarea />` instead of a `<input type="text" />`.                                                                                                              |
| `name`                | `string` | `undefined` | Name of the input component. Also used for generating a unique id for the input element which is required for working label clicks. It is recommended to either set this or `id` (or both). |
| `placeholder`         | `bool`   | `false`     | Set to `true` to render the `label` as a placeholder text.                                                                                                                                  |
| `required`            | `bool`   | `false`     | Set to `true` to mark the component as required.                                                                                                                                            |
| `underlined`          | `bool`   | `false`     | Set to `true` to render the component with an alternative (underlined) style.                                                                                                               |
| `value`               | `string` | `undefined` | Value of the input element.                                                                                                                                                                 |
