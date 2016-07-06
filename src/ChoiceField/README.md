# ChoiceField

ChoiceField component wraps a [controlled](http://facebook.github.io/react/docs/forms.html#controlled-components) 
`<input type="chechbox">` or `<input type="radio" />` element.

<a href="http://dev.office.com/fabric/components/ChoiceField" target="_blank">View Office Fabric UI docs</a>


## Example <!-- EXAMPLE -->
```jsx
import ChoiceField from 'react-fabric/lib/ChoiceField';

const OPTIONS = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' }
]

class ChoiceFieldExample extends React.Component {
  state = { checkbox: false, radio: null }

  handleCheckboxChanged(e) {
    this.setState({ ...this.state, checkbox: e.target.checked })
  }

  handleRadioChanged(e) {
    if (e.target.checked) {
      this.setState({ ...this.state, radio: e.target.value })
    }
  }

  render() {
    return (
      <section>
        <h1>ChoiceField</h1>
        <div style={{ width: '50%', display: 'inline-block' }}>
          <ChoiceField name="checkbox"
            checked={this.state.checkbox} 
            onChange={::this.handleCheckboxChanged}
            label="Checkbox" />
          <ChoiceField name="checkbox-disabled"
            checked={this.state.checkbox} 
            onChange={::this.handleCheckboxChanged}
            disabled
            label="Disabled" />
        </div>
        <div style={{ width: '50%', display: 'inline-block' }}>
          { /* see ChoiceFieldGroup for simpler radio groups */ }
          { OPTIONS.map((option, i) => (
            <ChoiceField key={i}
              name="option"
              type="radio"
              id={`option[${i}}]`}
              checked={this.state.radio === option.value}
              onChange={::this.handleRadioChanged}
              disabled={i === OPTIONS.length -1}
              value={option.value}
              label={option.label} />
          )) }
        </div>
        <pre>{ JSON.stringify({ state: this.state }, null, 2) }</pre>
      </section>
    );
  }
}

return <ChoiceFieldExample />;
```

## Properties

All additional properties, i.e. `onChange`, `onFocus`, `onBlur`, etc. are passed down to the underlying `<input />` element.

| Name                  | Type                       | Default      | Description                                                                                                                                                                                 |
| :-----                | :-----                     | :-----       | :-----                                                                                                                                                                                      |
| <del>`children`</del> |                            |              | This component does not render any `children`.                                                                                                                                              |
| `checked`             | `bool`                     | `undefined`  | Checked state of the input element.                                                                                                                                                         |
| `disabled`            | `bool`                     | `false`      | Set to `true` to disable the component.                                                                                                                                                     |
| `id`                  | `string`                   | `undefined`  | Id of the component. Also used for generating a unique id for the input element which is required for working label clicks. It is recommended to either set this or `name` (or both).       |
| `label`               | `string`                   | `undefined`  | Label of the component.                                                                                                                                                                     |
| `name`                | `string`                   | `undefined`  | Name of the input component. Also used for generating a unique id for the input element which is required for working label clicks. It is recommended to either set this or `id` (or both). |
| `required`            | `bool`                     | `false`      | Set to `true` to mark the component as required.                                                                                                                                            |
| `type`                | `'checkbox'`<br/>`'radio'` | `'checkbox'` | Specify the type of the input.
