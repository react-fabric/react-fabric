import test from 'tape'
import onlyWhen from '../onlyWhen.js'

const noop = () => {}

test('onlyWhen', t => {
  t.throws(
    () => onlyWhen({ foo: 'bar' }),
    /predicate must be a function/,
    'check predicate'
  )

  t.throws(
    () => onlyWhen(noop, 'message'),
    /Invalid propType/,
    'check propType'
  )

  t.test(q => {
    q.plan(1)

    const expectedPropValues = {
      foo: 1
    }
    const sut = onlyWhen(propValues => {
      q.equal(propValues, expectedPropValues, 'invoke predicate with propValues')
    }, noop)

    sut(expectedPropValues)
  })

  t.test(q => {
    q.plan(2)

    const expectedArgs = ['propValue', 'key', 'componentName', 'location', 'propFullName']
    const expectedResult = 'ok'

    const sut = onlyWhen(() => true, (...args) => {
      q.deepEqual(args, expectedArgs, 'invokes propType with args when predicate is true')

      return expectedResult
    })

    const result = sut.apply(null, expectedArgs)

    q.equal(result, expectedResult, 'return propType result')
  })

  t.test(q => {
    q.plan(1)

    const sut = onlyWhen(() => false, noop)

    const result = sut.call(null, { foo: 'bar' }, 'foo', 'TestComponent')

    q.ok(result instanceof Error, 'return error when predicate is false and prop is defined')
  })

  t.end()
})
