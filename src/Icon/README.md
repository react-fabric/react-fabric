# Icon

The `Icon` component renders a glyph from the 0365 icon font. The component however 
does **not** load the icon font. More information about how to provide the icon font
can be found [here](https://github.com/react-fabric#fonts--icons).

<a href="http://dev.office.com/fabric/styles#icons" target="_blank">View Office Fabric UI docs</a>

## Example <!-- EXAMPLE -->
```jsx
import Icon from 'react-fabric/lib/Icon';

const IconExample = () => (
  <div>
    <Icon glyph="arrowUp" />
    <Icon glyph="arrowUp" />
    <Icon glyph="arrowDown" />
    <Icon glyph="arrowDown" />
    <Icon glyph="arrowLeft" />
    <Icon glyph="arrowRight" />
    <Icon glyph="arrowLeft" />
    <Icon glyph="arrowRight" />
    B A
  </div>
);

return <IconExample />;
```

## Properties

| Name                  | Type     | Default     | Description                                   |
| :-----                | :-----   | :-----      | :-----                                        |
| <del>`children`</del> |          |             | This component does not render any `children` |
| `glyph`               | `String` | `undefined` | The name of the icon you want to display.     |
