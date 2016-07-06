# ChoiceFieldGroup

The ChoiceFieldGroup component renders a collection of [ChoiceField]s as a radio group.
This component **requires** a `name` prop.

<a href="http://dev.office.com/fabric/components/ChoiceField" target="_blank">View Office Fabric UI docs</a>

## Example <!-- EXAMPLE -->
```jsx
import ChoiceField from 'react-fabric/lib/ChoiceField';
import ChoiceFieldGroup from 'react-fabric/lib/ChoiceFieldGroup';

const OPTIONS = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' }
]

class ChoiceFieldExample extends React.Component {
  state = { selected: null }

  handleChange = e => {
    this.setState({ selected: e.target.value })
  }

  render() {
    return (
      <section>
        <h1>ChoiceFieldGroup</h1>
        <div>
          <ChoiceFieldGroup name='option'
            value={this.state.selected}
            onChange={::this.handleChange}
            required
            title="Pick one">
            { OPTIONS.map((option, i) => (
              <ChoiceField key={i}
                value={option.value}
                label={option.label} />
            )) }
          </ChoiceFieldGroup>
        </div>
        <pre>{ JSON.stringify({ state: this.state }, null, 2) }</pre>
      </section>
    );
  }
}

return <ChoiceFieldExample />;
```

## Properties

All additional properties, i.e. `onFocus`, `onBlur`, etc. are passed down to the underlying `<input />` element.

| Name       | Type                   | Default     | Description                                                                 |
| :-----     | :-----                 | :-----      | :-----                                                                      |
| `children` | `arrayOf(ChoiceField)` |             | The [ChoiceField]s to use as a radio inputs in the radio group.             |
| `name`     | `string`               | `undefined` | **Required** Name used for generating the unique names of the child inputs. |
| `onChange` | `func(e)`              | `undefined` | Callback invoked when the selected radio input changes.                     |
| `required` | `bool`                 | `false`     | Set to `true` to mark the component as required.                            |
| `title`    | `string`               | `undefined` | Title (label) of the component.                                             |
| `value`    | `string`               | `undefined` | Value of the selected radio input.                                          |

[choicefield]: #/components/ChoiceField
