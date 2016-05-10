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

| Name          | Type     | Default | Description                                                  |
| :-----        | :-----   | :-----  | :-----                                                       |
| `type`        | `'command'`<br/>`'compound'`<br/>`'hero'`<br/>`'primary'` | `null` | Render a specific type of Button. |
| `submit`      | `bool`   | `false` | When `true` set the type attribute of the button to `submit` |
| `disabled`    | `bool`   | `false` | When `true` render the button as disabled                    |
| `description` | `string` | `null`  | Set the decription of the button. Compound Buttons only.     |
| `glyph`       | `string` | `null`  | Set the icon of the button. Command and Hero Button only.    |
