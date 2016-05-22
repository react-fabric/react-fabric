# Button

Simple Button component for all the different types.

<a href="http://dev.office.com/fabric/components/button" target="_blank">View Office Fabric UI docs</a>

```jsx
import Button from 'react-fabric/lib/Button';

const Buttons = () => (
  <Button>Default</Button>
  <Button primary>Primary</Button>
  <Button>Disabled</Button>
  <Button type="command" glyph="star">Command</Button>
  <Button type="compound" description="with description">Compound</Button>
  <Button type="hero" glyph="star">Hero</Button>
);
```

## Properties

| Name          | Type          | Default     | Description                                                         |
| :-----        | :-----        | :-----      | :-----                                                              |
| `description` | `string`      | `undefined` | Set the decription of the button. Compound Buttons only.            |
| `disabled`    | `bool`        | `false`     | Set to `true` to disable the component.                             |
| `glyph`       | `string`      | `undefined` | Set the icon of the button. Command and Hero Button only.           |
| `onClick`     | `func(event)` | `undefined` | Click handler for the Button.                                       |
| `submit`      | `bool`        | `false`     | Set to `true` to set the type attribute of the element to `submit`. |
| `type`        | `'command'`<br/>`'compound'`<br/>`'hero'`<br/>`'primary'` | `undefined` | Render a specific type of Button. |
