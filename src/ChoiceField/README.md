# ChoiceField

ChoiceField component wraps a [controlled](http://facebook.github.io/react/docs/forms.html#controlled-components) 
`<input type="chechbox">` or `<input type="radio" />` element.

<a href="http://dev.office.com/fabric/components/ChoiceField" target="_blank">View Office Fabric UI docs</a>

```jsx
import ChoiceField from 'react-fabric/lib/ChoiceField';

// TODO
```

## Properties

All additional properties, i.e. `onFocus`, `onBlur`, etc. are passed down to the underlying `<input />` element.

| Name                  | Type                       | Default      | Description                                                                                                                                                                                 |
| :-----                | :-----                     | :-----       | :-----                                                                                                                                                                                      |
| <del>`children`</del> |                            |              | This component does not render any `children`.                                                                                                                                              |
| `checked`             | `bool`                     | `undefined`  | Checked state of the input element.                                                                                                                                                         |
| `defaultChecked`      | `bool`                     | `false`      | Default checked state of the input element.                                                                                                                                                 |
| `disabled`            | `bool`                     | `false`      | Set to `true` to disable the component.                                                                                                                                                     |
| `id`                  | `string`                   | `undefined`  | Id of the component. Also used for generating a unique id for the input element which is required for working label clicks. It is recommended to either set this or `name` (or both).       |
| `label`               | `string`                   | `undefined`  | Label of the component.                                                                                                                                                                     |
| `name`                | `string`                   | `undefined`  | Name of the input component. Also used for generating a unique id for the input element which is required for working label clicks. It is recommended to either set this or `id` (or both). |
| `required`            | `bool`                     | `false`      | Set to `true` to mark the component as required.                                                                                                                                            |
| `type`                | `'checkbox'`<br/>`'radio'` | `'checkbox'` | Specify the type of the input.
