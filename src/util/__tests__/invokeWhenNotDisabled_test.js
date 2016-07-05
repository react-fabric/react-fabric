import test from 'tape'
import invokeWhenNotDisabled from '../invokeWhenNotDisabled.js'

test('invokeWhenNotDisabled', t => {
  t.test('invoke with args when enabled', q => {
    q.plan(1)

    const expectedArgs = ['foo', 'bar', true]
    invokeWhenNotDisabled(false, (...args) => {
      q.deepEqual(args, expectedArgs)
    }).apply(null, (expectedArgs))
  })

  t.test('no invoke when disabled', q => {
    invokeWhenNotDisabled(true, () => {
      q.fail('invoked when it shouldn\'t')
    })()

    q.end()
  })

  t.end()
})
