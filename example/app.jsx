import React from 'react'

import { Label } from '../src'

class App extends React.Component {
  render() {
    return (
      <div>
        <Label>Default Label</Label>
        <Label required={true}>Required Label</Label>
        <Label disabled={true}>Disabled Label</Label>
      </div>
    )
  }

}

React.render(<App />, document.getElementById('main'))
