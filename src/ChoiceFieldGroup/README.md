# ChoiceFieldGroup

The ChoiceFieldGroup components render a collection of [ChoiceField]s as a radio group.
This component **requires** a `name` prop.

<a href="http://dev.office.com/fabric/components/ChoiceField" target="_blank">View Office Fabric UI docs</a>

```jsx
import ChoiceFieldGroup from 'react-fabric/lib/ChoiceFieldGroup';

// TODO
```

## Properties

All additional properties, i.e. `onFocus`, `onBlur`, etc. are passed down to the underlying `<input />` element.

| Name       | Type                   | Default     | Description                                                                 |
| :-----     | :-----                 | :-----      | :-----                                                                      |
| `children` | `arrayOf(ChoiceField)` |             | The [ChoiceField]s to use as a radio inputs in the radio group.               |
| `name`     | `string`               | `undefined` | **Required** Name used for generating the unique names of the child inputs. |
| `required` | `bool`                 | `false`     | Set to `true` to mark the component as required.                            |
| `title`    | `string`               | `undefined` | Title (label) of the component.                                             |

[choicefield]: #/components/ChoiceField
