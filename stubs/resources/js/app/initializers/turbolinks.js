import Turbolinks from 'turbolinks'
window.Turbolinks = Turbolinks
window.Turbolinks.start()

// In case of ajax error its better to clear the cache so that errors won't
// appear in the cache.
document.addEventListener('ajax:error', function () {
  window.turbolinks.clearCache()
})

// Remove flash elements before caching the page
document.addEventListener('turbolinks:before-cache', function () {
  const flashElements = document.getElementsByClassName('flash-element')

  while (flashElements.length > 0) {
    const element = flashElements[0]

    element.parentNode.removeChild(element)
  }
})
