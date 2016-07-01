# react-fabric [![npm](https://img.shields.io/npm/v/react-fabric.svg?style=flat-square)](https://www.npmjs.com/package/react-fabric) [![npm](https://img.shields.io/npm/dt/react-fabric.svg?style=flat-square)](https://www.npmjs.com/package/react-fabric) [![Build Status](http://img.shields.io/travis/kmees/react-fabric.svg?style=flat-square)](https://travis-ci.org/kmees/react-fabric) [![Coveralls](https://img.shields.io/coveralls/kmees/react-fabric/development.svg?style=flat-square)](https://coveralls.io/github/kmees/react-fabric) [![npm](https://img.shields.io/npm/l/react-fabric.svg?style=flat-square)](https://www.npmjs.com/package/react-fabric)

react-fabric is a set of [React](http://facebook.github.io/react/) components that wrap the [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric)

## Installation

`react-fabric` can be installed as an npm package

```
$ npm install --save react-fabric
```
Please note that you also have to install all missing peer depencies.


## Usage

Before you start using `react-fabric` it is recommended to setup a basic Webpack workflow with
[babel-loader](https://github.com/babel/babel-loader), [css-loader](https://github.com/webpack/css-loader) 
and [sass-loader](https://github.com/jtangelder/sass-loader). A minimal starter project is 
[React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate).

Once Webpack is set up, yu can just require `react-fabric` and use the components

```jsx
import React from 'react';
import Button from 'react-fabric/lib/Button';

const SaveButton = ({ onClick }) => (
  <Button type="hero" glyph="save" onClick={onClick}>Save</Button>
);

export default SaveButton
```

The above code creates a custom `SaveButton` component based on the hero button component of fabric ui. Please not
that all the required SASS for the button component is automatically required by the module.


## Fonts & Icons

`react-fabric` does **not** load any of the required font files automatically. The recommended way
is to get the fonts from the Office CDN by simply importing the fontface declaration 
from the `office-ui-fabric` package in a global stylesheet and requiring it in your layout component.

```scss
// globals.scss
@import "~office-ui-fabric/src/sass/Fabric.Typography.Fonts.Output.scss";
@import "~office-ui-fabric/src/sass/Fabric.Icons.Font.Output.scss";
```

```jsx
// Layout.js
require('globals.scss')

const Layout = () => {
  // ...
}
```

## Example / Docs
The [docs project](https://github.com/kmees/react-fabric/blob/master/docs) included in 
this repository doubles as the example project. To run the docs project, follow these steps:

```sh
$ npm install
$ cd docs/
$ npm install
$ npm start
$ open 'http://localhost:3030'
```

## Tests
All components are unit tested. To run the tests, follow these steps:

```sh
$ npm install
$ npm test
```

## Customization

TODO...


## License
This project is licensed under the terms of the [MIT License](https://github.com/kmees/react-fabric/blob/master/LICENSE)
