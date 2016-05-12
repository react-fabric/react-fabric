import React from 'react'
import cx from 'classnames'
import flatten from 'lodash.flatten'

import fabricComponent from '../fabricComponent.js'
import sizePropType from './sizePropType.js'

import style from './Grid.scss'

const sizeNames = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']
const sizeKeys = flatten(sizeNames.map(name => [
  name, `${name}Push`, `${name}Pull`
]))

const Col = ({ children, ...props }) => {
  const rest = { ...props }
  const sizeStyles = { }

  sizeKeys.forEach(key => {
    sizeStyles[`ms-u-${key}${props[key]}`] = !!props[key]
    delete rest[key]
  })

  return (
    <div {...rest} styleName={cx('ms-Grid-col', sizeStyles)}>
      { children }
    </div>
  )
}
Col.propTypes = sizeKeys.reduce((propTypes, sizeKey) => {
  propTypes[sizeKey] = sizePropType // eslint-disable-line no-param-reassign
  return propTypes
}, {
  children: React.PropTypes.node,
})

export default fabricComponent(Col, style)
