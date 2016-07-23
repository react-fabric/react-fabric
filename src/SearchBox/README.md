# SearchBox

The SearchBox component wraps a [controlled](http://facebook.github.io/react/docs/forms.html#controlled-components) 
`<input type="text">` element.

<a href="http://dev.office.com/fabric/components/SearchBox" target="_blank">View Office Fabric UI docs</a>

## Example <!-- EXAMPLE -->
```jsx
import SearchBox from 'react-fabric/lib/SearchBox';

class SearchBoxExample extends React.Component {
  state = { active: false, value: '' };

  handleChange(e) {
    this.setState({ ...this.state, value: e.target.value });
  }

  handleFocus() {
    this.setState({ ...this.state, active: true });
  }

  handleBlur() {
    this.setState({ ...this.state, active: false });
  }

  render() {
    return (
      <section>
        <h1>SearchBox</h1>
        <SearchBox active={this.state.active}
          value={this.state.value}
          onChange={::this.handleChange}
          onFocus={::this.handleFocus}
          onBlur={::this.handleBlur}
          placeholder="Search..." />
        <pre>{ JSON.stringify({ state: this.state }, null, 2) }</pre>
      </section>
    )
  }
}

return <SearchBoxExample />;
```

## Properties

All additional properties, i.e. `onFocus`, `onBlur`, etc. are passed down to the underlying `<input />` element.

| Name                  | Type     | Default     | Description                                                             |
| :-----                | :-----   | :-----      | :-----                                                                  |
| <del>`children`</del> |          |             | This component does not render any `children`.                          |
| `active`              | `bool`   | `false`     | Set this to `true` when the input has focus to render the active state. |
| `placeholder`         | `string` | `Search`    | Placeholder text when the input is empty.                               |
| `value`               | `string` | `undefined` | Value of the input element.                                             |
