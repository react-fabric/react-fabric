# ListItem

The `ListItem` component renders a styled list item element. It defaults to an `<li />` tag which can be changed
via [Properties](#properties). Each child of the List should be a [ListItemAction](#ListItemAction).

<a href="http://dev.office.com/fabric/components/listitem" target="_blank">View Office Fabric UI docs</a>

```jsx
import List from 'react-fabric/lib/List';
import ListItem, { ListItemAction } from 'react-fabric/lib/ListItem'

const MyList = () => (
  <List>
    <ListItem>Foo</ListItem>
  </List>
);
```

## Properties

| Name             | Type                             | Default     | Description                                                         |
| :-----           | :-----                           | :-----      | :-----                                                              |
| `children`       | `ListItemAction[]`               | `undefined` | List items.                                                         |
| `checked`        | `bool`                           | `false`     | Set to `true` to mark this list item as selected.                   |
| `componentClass` | [elementType][1]                 | `'li'`      | Custom component used for rendering.                                |
| `image`          | `node`                           | `undefined` | Image element of the of the list item.                              |
| `metaText`       | `node`                           | `undefined` | Meta text element of the of the list item.                          |
| `onChange`       | `func(checked)`                  | `undefined` | Callback invoked when the inputs checked state changes.             |
| `primaryText`    | `node`                           | `undefined` | Primary text element of the of the list item.                       |
| `secondaryText`  | `node`                           | `undefined` | Secondary text element of the of the list item.                     |
| `selectable`     | `bool`                           | `false`     | Set to `true` to render the `.ms-ListItem-selectionTarget` element. |
| `tertiaryText`   | `node`                           | `undefined` | Tertiary text element of the of the list item.                      |
| `type`           | `oneOf([undefined, 'document'])` | `undefined` | Type of the list item.                                              |

[1]: https://github.com/react-bootstrap/react-prop-types#elementtype
