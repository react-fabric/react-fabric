import React from 'react'
import cssm from 'react-css-modules'

import Raw from '../../components/Raw'

import indexHtml from './index.md'
import * as readmes from './readmes.js'

const components = [
  'Breadcrumb',
  'Button',
  'Callout',
  'ChoiceField',
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

import ComponentList from './ComponentList.js'

import style from './Components.scss'

const Components = ({ params: { componentName } }) => {
  const component = components.filter(c => c.name === componentName)[0] || {}

  return (
    <div styleName="root">
      <navigation styleName="navigation">
        <ComponentList list={components} />
      </navigation>
      <div styleName="content">
        <Raw html={component.readme || indexHtml} />
      </div>
    </div>
  )
}
Components.propTypes = {
  params: React.PropTypes.shape({
    componentName: React.PropTypes.string
  })
}

export default cssm(Components, style)
