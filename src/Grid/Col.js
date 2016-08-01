import React from 'react'
import cx from 'classnames'
import flatten from 'lodash.flatten'

import { colSizeType } from '../propTypes'
import fabricComponent from '../fabricComponent'

import style from './Grid.scss'

const breakpoints = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']
const breakpointPropKeys = flatten(breakpoints.map(breakpoint => [
  breakpoint, `${breakpoint}Push`, `${breakpoint}Pull`
]))

const Col = ({ children, styles, ...other }) => {
  const props = { ...other }
  const breakpointStyles = { }

  breakpointPropKeys.forEach(key => {
    breakpointStyles[`ms-u-${key}${props[key]}`] = !!props[key]

    delete props[key]
  })

  return (
    <div {...props} styleName={cx('ms-Grid-col', breakpointStyles)}>
      { children }
    </div>
  )
}
Col.propTypes = breakpointPropKeys.reduce((propTypes, key) => {
  propTypes[key] = colSizeType // eslint-disable-line no-param-reassign
  return propTypes
}, {
  children: React.PropTypes.node,
})

export default fabricComponent(Col, style)
