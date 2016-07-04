import isFunction from 'lodash.isfunction'
import isDefined from '../util/isDefined.js'

export default function onlyWhen(predicate, ...args) {
  if (!isFunction(predicate)) {
    throw new Error('predicate must be a function.')
  }

  const message = isFunction(args[0]) ? predicate.toString() : args[0]
  const propType = isFunction(args[0]) ? args[0] : args[1]

  if (!isFunction(propType)) {
    throw new Error(`Invalid propType passed to 'onlyWhen': ${propType}.`)
  }

  return (propValue, key, componentName, location, propFullName) => {
    if (predicate(propValue)) {
      return propType(propValue, key, componentName, location, propFullName)
    }

    if (isDefined(propValue[key])) {
      return new Error(
        `Prop '${key}' is only used by '${componentName}' when ${message}.`
      )
    }
    return null
  }
}
