import React from 'react'

import { Label, TextField, Button, ChoiceField, ChoiceFieldGroup, Toggle } from 'react-fabric'

export default class Components extends React.Component {
  render() {
    const click = () => { console.log('click') }
    return (
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm2">
            <h2 className="ms-font-xl">Components</h2>
            <ul style={{listStyle: 'none', paddingLeft: '0'}} className="ms-font-l">
              {
                [
                  { target: '#button',       text: 'Button',       done: true },
                  { target: '#callout',      text: 'Callout',      done: false },
                  { target: '#choice-field', text: 'Choice Field', done: true },
                  { target: '#colors',       text: 'Colors',       done: false },
                  { target: '#dialog-box',   text: 'Dialog Box',   done: false },
                  { target: '#font-icon',    text: 'Font Icon',    done: true },
                  { target: '#font-style',   text: 'Font Style',   done: false },
                  { target: '#label',        text: 'Label',        done: true },
                  { target: '#link',         text: 'Link',         done: false },
                  { target: '#list',         text: 'List',         done: false },
                  { target: '#list-item',    text: 'List Item',    done: false },
                  { target: '#persona',      text: 'Persona',      done: false },
                  { target: '#persona-card', text: 'Persona Card', done: false },
                  { target: '#pivot',        text: 'Pivot',        done: false },
                  { target: '#search-box',   text: 'Search Box',   done: false },
                  { target: '#table',        text: 'Table',        done: false },
                  { target: '#text-field',   text: 'Text Field',   done: true },
                  { target: '#toggle',       text: 'Toggle',       done: true },
                ].map((x) => {
                  const label = x.done ? <a href={x.target} className="ms-Link">{
                    x.text
                  }</a> : x.text
                  const style = {
                    padding: '4px 8px',
                    textDecoration: x.done ? '' : 'line-through'
                  }

                  return (
                    <li style={style}>{label}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="ms-Grid-col ms-u-sm8">
            <div className="ms-Grid">
              <div className="ms-Grid-row">
                <h2 id="label" className="ms-font-xl">Label</h2>
                <Label>Default Label</Label>
                <Label required={true}>Required Label</Label>
                <Label disabled={true}>Disabled Label</Label>
              </div>

              <div className="ms-Grid-row">
                <h2 id="text-field" className="ms-font-xl">Text Field</h2>
                <TextField label="Simple" />
                <TextField label={
                  <Label>Complex Label</Label>
                } />
                <TextField label="With Description" description="Lorem ipsum sit dolor amet." />
                <TextField label="Multiline" multiline={true} />
                <TextField label="Placeholder" placeholder={true} />
                <TextField label="Underlined" underlined={true} />
                <TextField label="Required" required={true} />
              </div>

              <div className="ms-Grid-row">
                <h2 id="button" className="ms-font-xl">Button</h2>
                <Button onClick={click}>Standard</Button>
                <Button description="Lorem Ipsum sit dolor amet.">With Description</Button>
                <Button disabled={true}>Disabled</Button>
                <Button primary={true}>Primary</Button>
                <Button iconName="bag" hero={true}>Hero</Button>
                <Button compound={true}>Compound</Button>
                <Button command={true}>Command</Button>
              </div>

              <div className="ms-Grid-row">
                <h2 id="choice-field" className="ms-font-xl">ChoiceField</h2>
                <ChoiceField type="radio" label="Foo" />
                <ChoiceField type="checkbox" label="Bar" />

                <h2 className="ms-font-xl">ChoiceFieldGroup</h2>
                <ChoiceFieldGroup title="Foo" name="choiceFieldGroup">
                  <ChoiceField label="Bar" checked={true} value="bar" />
                  <ChoiceField label="Baz" value="baz" />
                  <ChoiceField label="Qux" value="qux" />
                </ChoiceFieldGroup>
                <ChoiceFieldGroup title="Foo" name="choiceFieldGroup2" defaultValue="baz">
                  <ChoiceField value="bar" />
                  <ChoiceField label="Baz" value="baz" />
                  <ChoiceField label="Qux" value="qux" />
                </ChoiceFieldGroup>
              </div>

              <div className="ms-Grid-row">
                <h2 id="toggle" className="ms-font-xl">Toggle</h2>
                <Toggle onLabel="On" offLabel="Off" />
              </div>
            </div>
          </div>
          <div className="ms-Grid-col ms-u-sm2"></div>
        </div>
      </div>
    )
  }
}
