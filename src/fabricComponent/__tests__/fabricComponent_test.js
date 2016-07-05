import test from 'tape'
import fabricComponent, { configure } from '../index.js'

test('fabricComponent as a decorator', t => {
  @fabricComponent
  class Foo { }

  t.equal(Foo.displayName, 'FabricComponent(Foo)')
  t.end()
})

test('fabricComponent as a higher order function', t => {
  class Foo { }

  t.equal(fabricComponent(Foo).WrappedComponent, Foo)
  t.end()
})

test('fabricComponent#configure', t => {
  t.doesNotThrow(() => configure({}))

  t.end()
})
