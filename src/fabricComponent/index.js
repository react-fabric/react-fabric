import React from 'react'
import cssm from 'react-css-modules'
import isFunction from 'lodash.isfunction'
import identity from 'lodash.identity'
import hoistNonReactStatics from 'hoist-non-react-statics'

const DEFAULT_CONFIGURATION = {
  preprocessStyles: identity
}

let configuration = {
  ...DEFAULT_CONFIGURATION
}

// TODO: move to readme / docs
// const prependGlobalClassNames = styles => (
//   Object.keys(styles).reduce((newStyles, style) => {
//     newStyles[style] = `${style} ${styles[style]}` // eslint-disable-line no-param-reassign
//
//     return newStyles
//   }, {})
// )

const higherOrderFunction = (Component, styles = { }, options = { }) => {
  const fabricStyles = configuration.preprocessStyles(styles)
  const fabricOptions = {
    ...options,
    allowMultiple: true
  }

  const WrappedComponent = cssm(Component, fabricStyles, fabricOptions)
  const FabricComponent = ({ styles, ...props }) => (
    <WrappedComponent {...props} />
  )

  const componentDisplayName = Component.displayName || Component.name

  FabricComponent.displayName = `FabricComponent(${componentDisplayName})`
  FabricComponent.WrappedComponent = Component

  hoistNonReactStatics(FabricComponent, Component)

  return FabricComponent
}

const decorator = (...args) => Component => higherOrderFunction(Component, ...args)

export default (...args) => (
  isFunction(args[0]) ? higherOrderFunction(...args) : decorator(...args)
)

export const isFabricComponent = (component = {}, ...componentTypes) => {
  const type = component.type || {}

  return componentTypes.indexOf(type) !== -1
}

export function configure(options) {
  configuration = {
    ...DEFAULT_CONFIGURATION,
    options
  }
}
