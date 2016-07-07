# Link

The `Link` component renders a styled `<a />` tag. It supports a custom component for rendering
by passing the component class as a prop, see [Properties](#properties).

<a href="http://dev.office.com/fabric/components/link" target="_blank">View Office Fabric UI docs</a>

## Example <!-- EXAMPLE -->
```jsx
import Link from 'react-fabric/lib/Link';

const RouterLink = ({ to, children, ...props }) => (
  <a {...props} href={to}>{children}</a>
);

const LinkExample = () => (
  <section>
    <h1>Links</h1>
    <Link href="http://dev.office.com/fabric">Office UI Fabric</Link>
    <br />
    <Link to="/" componentClass={RouterLink}>Home</Link>
  </section>
);

return <LinkExample />;
```

## Properties

| Name             | Type             | Default | Description                          |
| :-----           | :-----           | :-----  | :-----                               |
| `componentClass` | [elementType][1] | `'a'`   | Custom component used for rendering. |

[1]: https://github.com/react-bootstrap/react-prop-types#elementtype
