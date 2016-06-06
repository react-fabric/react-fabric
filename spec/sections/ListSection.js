import React from 'react'

import List from '../../src/List'
import ListItem from '../../src/ListItem'

class ListSection extends React.Component {
  constructor() {
    super()
    this.state = {
      checked: false
    }
  }

  _handleListItemChange() {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <section>
        <h2>List & ListItem</h2>
        <List style={{ maxWidth: 400 }}>
          <ListItem
            image={<img src="http://placekitten.com/64/64" />}
            selectable
            checked={this.state.checked}
            onChange={::this._handleListItemChange}
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

export default ListSection
