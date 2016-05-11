const fixFragmentLinks = () => {
  const links = document.querySelectorAll('a[href^="#"]')

  for (let i = 0; i < links.length; i++) {
    const link = links[i]
    const href = link.getAttribute('href') || ''
    const [, id] = href.match(/^#([^/]+)/) || []
    const el = id ? document.getElementById(id) : null

    if (el) {
      link.removeAttribute('href')
      link.onclick = ::el.scrollIntoViewIfNeeded
    }
  }
}

document.addEventListener('DOMContentLoaded', fixFragmentLinks)
