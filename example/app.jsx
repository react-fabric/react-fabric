/* eslint no-console: 0 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Label, TextField, Button, ChoiceField } from '../src'

class App extends React.Component {
  render() {
    const click = () => { console.log('click') }
    return (
      <div>
        <h2>Label</h2>
        <Label>Default Label</Label>
        <Label required={true}>Required Label</Label>
        <Label disabled={true}>Disabled Label</Label>

        <h2>TextField</h2>
        <TextField label="Simple" />
        <TextField label={
          <Label required={true}>Complex Label</Label>
        } />
        <TextField label="With Description" description="Lorem ipsum sit dolor amet." />
        <TextField label="Multiline" multiline={true} />
        <TextField label="Placeholder" placeholder={true} />
        <TextField label="Underlined" underlined={true} />
        <TextField label="Required" required={true} />

        <h2>Button</h2>
        <Button onClick={click}>Standard</Button>
        <Button description="Lorem Ipsum sit dolor amet.">With Description</Button>
        <Button disabled={true}>Disabled</Button>
        <Button primary={true}>Primary</Button>
        <Button iconName="bag" hero={true}>Hero</Button>
        <Button compound={true}>Compound</Button>
        <Button command={true}>Command</Button>

        <h2>ChoiceField</h2>
        <ChoiceField type="radio">Foo</ChoiceField>
        <ChoiceField type="checkbox">Foo</ChoiceField>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'))
