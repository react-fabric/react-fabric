# Grid

Simple wrapper component for the responsive 12-column grid layout.
See official docs for more explanation and examples.

<a href="http://dev.office.com/fabric/styles#responsive-grid" target="_blank">View Office Fabric UI docs</a>

```jsx
import Grid from 'react-fabric/lib/Grid';
// or import Grid, { Col, Row } from 'react-fabric/lib/Grid'

const Layout = ({ children }) => (
  <Grid>
    <Grid.Row>
      <Grid.Col md={6} mdPush={3} mdPull={3} sm={12}>
        { children }
      </Grid.Col>
    </Grid.Row>
  </Grid>
);
```

## Properties

none

# Row

Wrapper component for `ms-Grid-row` divs.

## Properties

none

# Col

Wrapper component for `ms-Grid-col` divs.

## Properties

| Name       | Type   | Default | Description                                        |
| :-----     | :----- | :-----  | :-----                                             |
| `sm`       | `1-12` | `null`  | Width for `sm` media queries.                      |
| `md`       | `1-12` | `null`  | Width for `md` media queries.                      |
| `lg`       | `1-12` | `null`  | Width for `lg` media queries.                      |
| `xl`       | `1-12` | `null`  | Width for `xl` media queries.                      |
| `xxl`      | `1-12` | `null`  | Width for `xxl` media queries.                     |
| `xxxl`     | `1-12` | `null`  | Width for `xxxl` media queries.                    |
| `smPush`   | `1-12` | `null`  | Move column to the right for `sm` media queries.   |
| `mdPush`   | `1-12` | `null`  | Move column to the right for `md` media queries.   |
| `lgPush`   | `1-12` | `null`  | Move column to the right for `lg` media queries.   |
| `xlPush`   | `1-12` | `null`  | Move column to the right for `xl` media queries.   |
| `xxlPush`  | `1-12` | `null`  | Move column to the right for `xxl` media queries.  |
| `xxxlPush` | `1-12` | `null`  | Move column to the right for `xxxl` media queries. |
| `smPull`   | `1-12` | `null`  | Move column to the left for `sm` media queries.    |
| `mdPull`   | `1-12` | `null`  | Move column to the left for `md` media queries.    |
| `lgPull`   | `1-12` | `null`  | Move column to the left for `lg` media queries.    |
| `xlPull`   | `1-12` | `null`  | Move column to the left for `xl` media queries.    |
| `xxlPull`  | `1-12` | `null`  | Move column to the left for `xxl` media queries.   |
| `xxxlPull` | `1-12` | `null`  | Move column to the left for `xxxl` media queries.  |
