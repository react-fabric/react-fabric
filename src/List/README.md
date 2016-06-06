# List

The `List` component renders a styled list element. It defaults to an `<ul />` tag which can be changed
via [Properties](#properties). Each child of the List should be a [ListItem](/components/ListItem).

<a href="http://dev.office.com/fabric/components/list" target="_blank">View Office Fabric UI docs</a>

```jsx
import List from 'react-fabric/lib/List';
import ListItem from 'react-fabric/lib/ListItem'

const MyList = () => (
  <List>
    <ListItem>Foo</ListItem>
  </List>
);
```

## Properties

| Name             | Type             | Default     | Description                          |
| :-----           | :-----           | :-----      | :-----                               |
| `children`       | `ListItem[]`     | `undefined` | List items.                          |
| `componentClass` | [elementType][1] | `'ul'`      | Custom component used for rendering. |

[1]: https://github.com/react-bootstrap/react-prop-types#elementtype
