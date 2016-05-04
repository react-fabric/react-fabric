import React from 'react'
import cssm from 'react-css-modules'

import Link from '../../components/Link'

import style from './Components.scss'

const ComponentList = ({ list }) => (
  <ul styleName="component-list">
    { list.map(({ name, finished }) => (
      <li styleName="component-list-item">
        { finished ?
          <Link to={`/components/${name}`}>{name}</Link> :
          <span>{name}</span>
        }
      </li>
    )) }
  </ul>
)
ComponentList.propTypes = {
  list: React.PropTypes.array.isRequired
}

export default cssm(ComponentList, style)
