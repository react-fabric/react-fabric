import React from 'react'
import cssm from 'react-css-modules'
import cx from 'classnames'

import { Raw } from '../../components'

import homeHtml from './home.md'
import * as readmes from './readmes.js'

import ComponentList from './ComponentList.js'
import ComponentView from './ComponentView.js'
import Playground from './Playground.js'

import style from './Components.scss'

const components = [
  'Breadcrumb',
  'Button',
  'Callout',
  'ChoiceField',
  'ChoiceFieldGroup',
  'CommandBar',
  'ContextualMenu',
  'DatePicker',
  'Dialog',
  'Dropdown',
  'Facepile',
  'Grid',
  'Icon',
  'Label',
  'Link',
  'List',
  'ListItem',
  'MessageBanner',
  'NavBar',
  'OrgChart',
  'Overlay',
  'Panel',
  'PeoplePicker',
  'Persona',
  'PersonaCard',
  'Pivot',
  'ProgressIndicator',
  'SearchBox',
  'Spinner',
  'Table',
  'TextField',
  'Toggle'
].map(name => ({
  name,
  readme: readmes[name],
  finished: !!readmes[name]
}))

class Components extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({
      componentName: React.PropTypes.string
    })
  }

  constructor() {
    super()

    this.state = {
      playgroundEnabled: false
    }
  }

  cleanupCode = (code) => {
    const lines = code.split('\n')

    return lines
      .filter(line => !/^\s*import/.test(line))
      .join('\n')
      .trim()
  }

  showPlayground = (code) => {
    this.setState({
      ...this.state,
      code: this.cleanupCode(code),
      playgroundEnabled: true
    })
  }

  hidePlayground = () => {
    this.setState({
      ...this.state,
      playgroundEnabled: false
    })
  }

  render() {
    const { params: { componentName } } = this.props
    const { code, playgroundEnabled } = this.state
    const component = components.filter(c => c.name === componentName)[0]

    return (
      <div styleName={cx('root', { 'with-playground': playgroundEnabled })}>
        <navigation styleName="navigation">
          <ComponentList list={components} />
        </navigation>
        <div styleName="content">
          { component ?
            <ComponentView component={component} showPlayground={this.showPlayground} /> :
            <Raw html={homeHtml} />
          }
        </div>
        <div styleName="playground">
          <Playground defaultCode={code} close={this.hidePlayground} />
        </div>
      </div>
    )
  }
}

export default cssm(Components, style, { allowMultiple: true })
