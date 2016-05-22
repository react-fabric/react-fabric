export default {
  /* eslint-disable guard-for-in */
  addEventsToDocument(eventMap) {
    for (const key in eventMap) {
      document.addEventListener(key, eventMap[key], false)
    }
  },

  removeEventsFromDocument(eventMap) {
    for (const key in eventMap) {
      document.removeEventListener(key, eventMap[key], false)
    }
  },
  /* eslint-enable guard-for-in */

  pauseEvent(event) {
    /* eslint-disable no-param-reassign */
    event.persist()
    event.stopPropagation()
    event.preventDefault()

    event.returnValue = false
    event.cancelBubble = true
    /* eslint-enable no-param-reassign */
  },

  targetIsDescendant(event, parent) {
    let node = event.target
    while (node !== null) {
      if (node === parent) return true
      node = node.parentNode
    }
    return false
  }
}
