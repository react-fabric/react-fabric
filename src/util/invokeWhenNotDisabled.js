import isFunction from 'lodash.isFunction'

export default function invokeWhenNotDisabled(disabled, fn) {
  return (...args) => {
    if (!disabled && isFunction(fn)) { fn(...args) }
  }
}
