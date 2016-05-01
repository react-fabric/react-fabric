import React from 'react'
import cssm from 'react-css-modules'
import isFunction from 'lodash.isfunction'
import hoistNonReactStatics from 'hoist-non-react-statics'

const prependPlainClassNames = styles => (
  Object.keys(styles).reduce((newStyles, style) => {
    newStyles[style] = `${style} ${styles[style]}` // eslint-disable-line no-param-reassign

    return newStyles
  }, {})
)

const higherOrderFunction = (Component, styles, options = { }) => {
  const fabricStyles = styles ? prependPlainClassNames(styles) : null
  const fabricOptions = {
    ...options,
    allowMultiple: true
  }

  const WrappedComponent = cssm(Component, fabricStyles, fabricOptions)
  const FabricComponent = ({ ...props }) => (
    <WrappedComponent {...props} styles={undefined} />
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
