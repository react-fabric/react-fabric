import test from 'tape'

import sut from '../events.js'

const eventMap = {
  'foo': function foohandler() {},
  'bar': function barHandler() {}
}

const setOnDocument = (property, value) => {
  const backup = global.document[property]

  global.document[property] = value

  return () => { global.document[property] = backup }
}

test('events#addEventsToDocument', t => {
  t.plan(6)

  const restore = setOnDocument('addEventListener', (key, listener, capture) => {
    t.ok(Object.keys(eventMap).indexOf(key) !== -1, `key ${key}`)
    t.equal(listener, eventMap[key], `listener for ${key}`)
    t.equal(capture, false, 'capture')
  })

  sut.addEventsToDocument(eventMap)

  restore()
})

test('events#removeEventListener', t => {
  t.plan(6)

  const restore = setOnDocument('removeEventListener', (key, listener, capture) => {
    t.ok(Object.keys(eventMap).indexOf(key) !== -1, `key ${key}`)
    t.equal(listener, eventMap[key], `listener for ${key}`)
    t.equal(capture, false, 'capture')
  })

  sut.removeEventsFromDocument(eventMap)

  restore()
})

test('events#pauseEvent', t => {
  t.plan(5)

  const event = {
    persist: t.pass.bind(t, 'persist'),
    stopPropagation: t.pass.bind(t, 'stopPropagation'),
    preventDefault: t.pass.bind(t, 'preventDefault')
  }

  sut.pauseEvent(event)

  t.equal(event.returnValue, false, 'returnValue')
  t.equal(event.cancelBubble, true, 'cancelBubble')
})

test('events#targetIsDescendant', t => {
  const root = { id: 'root', parentNode: null }
  const event = {
    target: {
      id: 'target',
      parentNode: {
        id: 'node1',
        parentNode: root
      }
    }
  }

  t.ok(sut.targetIsDescendant(event, root))
  t.notOk(sut.targetIsDescendant(event, { id: 'other' }))

  t.end()
})
