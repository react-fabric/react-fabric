# Table

Simple Wrapper component for `<table className="ms-Table" />` which should be used to render a simple styled table
that doesn't need selection. For a Table component that does support selection, see [SelectableTable](/components/SelectableTable)

<a href="http://dev.office.com/fabric/components/Table" target="_blank">View Office Fabric UI docs</a>

```jsx
import Table from 'react-fabric/lib/Table';

const MyDocuments = () => {
  <Table fixed>
    <thead>
      <tr>
        <th>File name</th>
        <th>Location</th>
        <th>Modified</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Foo</td>
        <td>Bar</td>
        <td>Baz</td>
        <td>Qux</td>
      </tr>
    </tbody>
  </Table>
}
```

## Properties

| Name       | Type   | Default     | Description                                                                                      |
| :-----     | :----- | :-----      | :-----                                                                                           |
| `children` | `node` | `undefined` | Children should be the same as for a normal `<table />` element.                                 |
| `fixed`    | `bool` | `false`     | Set to `true` to make the table cells not expand with the content, keeping them at a fixed size. |
