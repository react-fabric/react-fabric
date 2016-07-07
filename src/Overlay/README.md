# Overlay

Simple Overlay component. Used by the [Dialog](/components/Dialog) component.

<a href="http://dev.office.com/fabric/components/Overlay" target="_blank">View Office Fabric UI docs</a>

## Example <!-- EXAMPLE -->
```jsx
import Overlay from 'react-fabric/lib/Overlay';

const OverlayExample = () => (
  <section>
    I am behind the overlay!
    <Overlay dark />
  </section>
);

return <OverlayExample />;
```

## Properties

| Name                  | Type   | Default | Description                                                         |
| :-----                | :----- | :-----  | :-----                                                              |
| <del>`children`</del> |        |         | This component does not render any `children`.                      |
| `dark`                | `bool` | `false` | Set to `true` to use render the component with dark overlay styles. |
| `hidden`              | `bool` | `true`  | Set to `false` to show the overlay.                                 |
