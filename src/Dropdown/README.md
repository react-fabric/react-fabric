# Dropdown

<a href="http://dev.office.com/fabric/components/Dropdown" target="_blank">View Office Fabric UI docs</a>

```jsx
import Dropdown from 'react-fabric/lib/Dropdown';

// TODO...
```

## Properties

| Name                  | Type                             | Default     | Description                                                                |
| :-----                | :-----                           | :-----      | :-----                                                                     |
| <del>`children`</del> |                                  |             | This component does not render any `children`.                             |
| `active`              | `bool`                           | `false`     | Set this to `true` when the input has focus to show the list of options.   |
| `defaultValue`        | `string`                         | `''`        | Default value of the input.                                                |
| `disabled`            | `bool`                           | `false`     | Set to `true` to disable the component.                                    |
| `label`               | `string`                         | `undefined` | Label of the component.                                                    |
| `name`                | `string`                         | `undefined` | Name of the input component.                                               |
| `onBlur`              | `func(event)`                    | `undefined` | Callback when the component loses focus.                                   |
| `onChange`            | `func(value, event)`             | `undefined` | Callback when a value is selected.                                         |
| `onFocus`             | `func(event)`                    | `undefined` | Callback when the component gains focus.                                   |
| `options`             | `arrayOf(shape({label, value}))` | `[]`        | **Required** List options for the Dropdown.                                |
| `placeholder`         | `name`                           | `undefined` | Placeholder text when no value is selected.                                |
| `required`            | `bool`                           | `false`     | Set to `true` to mark the component as required.                           |
| `textLeft`            | `bool`                           | `false`     | Set to `true` to render the label on the left (matching the Toggle style). |
| `value`               | `string`<br/>`number`            | `undefined` | Value of the input element.                                                |
