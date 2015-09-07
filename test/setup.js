import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import jsdom from 'jsdom'

chai.use(sinonChai)

global.expect = expect
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView
global.process.env.NODE_ENV = 'test'

for (const key in global.window) {
  if (!window.hasOwnProperty(key)) { continue }
  if (key in global) { continue }

  global[key] = window[key]
}
