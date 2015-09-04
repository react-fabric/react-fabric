import { expect } from 'chai'
import jsdom from 'jsdom'
import TestUtils from 'react-addons-test-utils'

global.expect = expect
global.TestUtils = TestUtils
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView

for (const key in global.window) {
  if (!window.hasOwnProperty(key)) { continue }
  if (key in global) { continue }

  global[key] = window[key]
}
