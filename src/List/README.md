# List

The `List` component renders a styled list element. It defaults to an `<ul />` tag which can be changed
via [Properties](#properties). Each child of the List should be a [ListItem](/components/ListItem).

<a href="http://dev.office.com/fabric/components/list" target="_blank">View Office Fabric UI docs</a>

## Example <!-- EXAMPLE -->
```jsx
import List from 'react-fabric/lib/List';
import ListItem from 'react-fabric/lib/ListItem';

class ListExample extends React.Component {
  state = { checked: false };
  handleChanged = () => this.setState({ checked: !this.state.checked });

  render() {
    return (
      <section>
        <h2>List & ListItem</h2>
        <List>
          <ListItem
            image={<img src="http://placekitten.com/64/64" />}
            selectable
            checked={this.state.checked}
            onChange={::this.handleChanged}
            primaryText="Primary Text"
            secondaryText="Secondary Text"
            tertiaryText="Tertiary Text"
            metaText="Meta Text">
            <ListItem.Action glyph="mail" />
          </ListItem>
          <ListItem type="document"
            itemIcon="star"
            primaryText="Primary Text"
            secondaryText="Secondary Text"
            tertiaryText="Tertiary Text"
            metaText="Meta Text">
            <ListItem.Action glyph="mail" />
            <ListItem.Action glyph="star" />
          </ListItem>
        </List>
      </section>
    )
  }
}

return <ListExample />;
```

## Properties

| Name             | Type             | Default     | Description                                        |
| :-----           | :-----           | :-----      | :-----                                             |
| `children`       | `ListItem[]`     | `undefined` | List items.                                        |
| `componentClass` | [elementType][1] | `'ul'`      | Custom component used for rendering.               |
| `selectable`     | `bool`           | `false`     | Set to `true` to set all list items to selectable. |

[1]: https://github.com/react-bootstrap/react-prop-types#elementtype
