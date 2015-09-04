import TestUtils from 'react-addons-test-utils'

export default function render(component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)

  return renderer.getRenderOutput()
}

