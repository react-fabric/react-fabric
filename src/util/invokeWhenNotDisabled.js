import isFunction from 'lodash.isfunction'

export default function invokeWhenNotDisabled(disabled, fn) {
  return (...args) => {
    if (!disabled && isFunction(fn)) { fn(...args) }
  }
}
