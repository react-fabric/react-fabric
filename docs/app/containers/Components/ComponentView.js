import React from 'react'
import ReactDOM from 'react-dom'
import cssm from 'react-css-modules'
import { Button } from 'react-fabric'

import { Raw } from '../../components'

import style from './Components.scss'

const EXAMPLE_REGEX = /<!-- EXAMPLE -->/g
const EXAMPLE_HOOK = 'js-load-example'
const EXAMPLE_PLACEHOLDER = `<span class="${EXAMPLE_HOOK}"></span>`

const getReadme = ({ readme }) => (
  readme.replace(EXAMPLE_REGEX, EXAMPLE_PLACEHOLDER)
)

const findCodeElement = (start) => {
  let codeElement = null
  let node = start

  do {
    const sibling = node.nextElementSibling

    if (sibling && /^pre/i.test(sibling.tagName)) {
      codeElement = sibling
    }
    node = node.parentNode
  } while (codeElement === null && node)

  return codeElement
}

class ComponentView extends React.Component {
  static propTypes = {
    component: React.PropTypes.object.isRequired,
    showPlayground: React.PropTypes.func
  }

  componentDidMount() {
    this.replaceHooks()
  }

  componentDidUpdate(prevProps) {
    if (this.props.component !== prevProps.component) {
      this.replaceHooks()
    }
  }

  replaceHooks = () => {
    const { showPlayground } = this.props
    const hooks = document.getElementsByClassName(EXAMPLE_HOOK)

    Array.prototype.forEach.call(hooks, hook => {
      const codeElement = findCodeElement(hook)

      if (showPlayground && hook && codeElement) {
        const code = codeElement.textContent
        const handleClick = e => {
          showPlayground(code)

          e.preventDefault()
        }

        ReactDOM.render(
          <Button type="command" glyph="embed" onClick={handleClick}>Open in Playground</Button>,
          hook
        )
      }
    })
  }


  render() {
    const { component } = this.props

    const readme = getReadme(component)

    return (
      <div>
        <Raw html={readme} />
      </div>
    )
  }
}

export default cssm(ComponentView, style)
