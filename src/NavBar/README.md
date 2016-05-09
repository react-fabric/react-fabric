# NavBar 

The NavBar component is a wrapper component for a collection of different NavBarItem instances. <br>
Currently implemented NavBarItem types: [NavBarItem](#navbaritem), [NavBarLink](#navbarlink), [NavBarTitle](#navbartitle)

<a href="http://dev.office.com/fabric/components/navbar" target="_blank">View Office Fabric UI docs</a>

```jsx
import NavBar from 'react-fabric/lib/NavBar';
import IndexLink from 'react-router';

const AppBar = () => (
  <NavBar>
    <NavBar.Title>
      <IndexLink to="/">react-fabric</IndexLink>
    </NavBar.Title>
    <NavBar.Link>
      <IndexLink to="/getting-started">Getting Started</IndexLink>
    </NavBar.Link>
    <NavBar.Link>
      <IndexLink to="/components">Components</IndexLink>
    </NavBar.Link>
    <NavBar.Link right>
      <a href="https://github.com/kmees/react-fabric"
        target="_blank">
        <img src="images/GitHub-Mark-32px.png" />
      </a>
    </NavBar.Link>
  </NavBar>
);
```

## Properties

| Name         | Type                  | Default | Description                                              |
| :-----       | :-----                | :-----  | :-----                                                   |
| `isMenuOpen` | `bool`                | `false` | Set this to true/false to open/close the mobile menu.    |
| `openMenu`   | `func`                | `null`  | Function callback when the mobile menu should be opened. |
| `closeMenu`  | `func`                | `null`  | Function callback when the mobile menu should be closed. |
| `children`   | `arrayOf(NavBarItem)` | `null`  | The name of the icon you want to display.                |
| `className`  | `String`              | `''`    | Custom class name for the component.                     |

# NavBarItem

Wraps its children in a plain `<div className="ms-NavBar-item">`.
Useful when adding custom components to the navbar

```jsx
import NavBar from 'react-fabric/lib/NavBar';
import MyNavBarComponent from '../MyNavBarComponent';

const AppBar = () => (
  <NavBar>
    <NavBar.Item>
      <MyNavBarComponent />
    </NavBar.Item>
  </NavBar>
);
```

## Properties

| Name        | Type     | Default | Description                                  |
| :-----      | :-----   | :-----  | :-----                                       |
| `right`     | `bool`   | `false` | Pushes the item to the right of the `NavBar` |
| `children`  | `node`   | `null`  | The name of the icon you want to display.    |
| `className` | `String` | `''`    | Custom class name for the component.         |

# NavBarLink

Wraps its children in a `NavBarItem` and adds the `ms-NavBar-link` class to them.

```jsx
import NavBar from 'react-fabric/lib/NavBar';

const AppBar = () => (
  <NavBar>
    <NavBar.Link>
      <a href="/">Home</a>
    </NavBar.Link>
  </NavBar>
);
```

## Properties

| Name        | Type     | Default | Description                                  |
| :-----      | :-----   | :-----  | :-----                                       |
| `right`     | `bool`   | `false` | Pushes the item to the right of the `NavBar` |
| `children`  | `node`   | `null`  | The name of the icon you want to display.    |
| `className` | `String` | `''`    | Custom class name for the component.         |

# NavBarTitle

A special `NavBarItem` that is always rendered first and not added to the toggle menu for mobile devices.<br>
A `NavBar` can have maximal one `NavBarTitle` in its children.

```jsx
import NavBar from 'react-fabric/lib/NavBar';

const AppBar = () => (
  <NavBar>
    <NavBar.Title>
      My App 
    </NavBar.Title>
  </NavBar>
);
```

## Properties

| Name        | Type     | Default | Description                               |
| :-----      | :-----   | :-----  | :-----                                    |
| `children`  | `node`   | `null`  | The name of the icon you want to display. |
| `className` | `String` | `''`    | Custom class name for the component.      |
