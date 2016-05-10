# Link

The `Link` component renders a styled `<a />` tag. It supports a custom component for rendering
by passing the component class as a prop, see [Properties](#properties).

<a href="http://dev.office.com/fabric/components/link" target="_blank">View Office Fabric UI docs</a>

```jsx
import { Link as RouterLink } from 'react-router';
import Link from 'react-fabric/Link';

const Navigation = () => (
  <Link href="http://google.com">Google<Link>
  <Link to="/" componentClass={RouterLink}>Home<Link>
);
```

## Properties

| Name             | Type             | Default | Description                          |
| :-----           | :-----           | :-----  | :-----                               |
| `componentClass` | [elementType][1] | `a`     | Custom component used for rendering. |

[1]: https://github.com/react-bootstrap/react-prop-types#elementtype
