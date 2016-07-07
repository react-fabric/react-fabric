# Label

Simple Label component.

<a href="http://dev.office.com/fabric/components/label" target="_blank">View Office Fabric UI docs</a>

## Example <!-- EXAMPLE -->
```jsx
import Label from 'react-fabric/lib/Label';

const LabelExample = () => (
  <section>
    <Label>Some Label</Label>
    <Label required>Required</Label>
    <Label componentClass="span">Span</Label>
  </section>
);

return <LabelExample />;
```

## Properties

| Name             | Type             | Default     | Description                                        |
| :-----           | :-----           | :-----      | :-----                                             |
| `componentClass` | [elementType][1] | `'label'`   | Custom component used for rendering.               |
| `disabled`       | `bool`           | `false`     | When `true` render the button as disabled.         |
| `htmlFor`        | `string`         | `undefined` | Set to the `id` of an input to bind them together. |
| `onClick`        | `func(event)`    | `undefined` | Custom click handler for the Label.                |
| `required`       | `bool`           | `false`     | Set to `true` to mark the component as required.   |

[1]: https://github.com/react-bootstrap/react-prop-types#elementtype
