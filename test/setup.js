import { expect } from 'chai'
import jsdom from 'jsdom'

global.expect = expect
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView

for (const key in global.window) {
  if (!window.hasOwnProperty(key)) { continue }
  if (key in global) { continue }

  global[key] = window[key]
}
