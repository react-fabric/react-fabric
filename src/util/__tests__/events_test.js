import test from 'tape'

import events from '../events.js'

const eventMap = {
  'foo': function foohandler() {},
  'bar': function barHandler() {}
}

test('events#addEventsToDocument', t => {
  t.plan(6)

  global.document = {
    addEventListener: (key, listener, capture) => {
      t.ok(Object.keys(eventMap).indexOf(key) !== -1, `key ${key}`)
      t.equal(listener, eventMap[key], 'listener for ${key}')
      t.equal(capture, false, 'capture')
    }
  }

  events.addEventsToDocument(eventMap)

  delete global.document
})

test('events#removeEventListener', t => {
  t.plan(6)

  global.document = {
    removeEventListener: (key, listener, capture) => {
      t.ok(Object.keys(eventMap).indexOf(key) !== -1, `key ${key}`)
      t.equal(listener, eventMap[key], 'listener for ${key}')
      t.equal(capture, false, 'capture')
    }
  }

  events.removeEventsFromDocument(eventMap)

  delete global.document
})

test('events#pauseEvent', t => {
  t.plan(5)

  const event = {
    persist: t.pass.bind(t, 'persist'),
    stopPropagation: t.pass.bind(t, 'stopPropagation'),
    preventDefault: t.pass.bind(t, 'preventDefault')
  }

  events.pauseEvent(event)

  t.equal(event.returnValue, false, 'returnValue')
  t.equal(event.cancelBubble, true, 'cancelBubble')
})
