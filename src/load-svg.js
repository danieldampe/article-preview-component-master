export function loadSvg () {
  document.querySelectorAll('[data-load]').forEach(async (element) => {
    try {
      const response = await fetch(element.dataset.load)
      if (!response.ok) throw response
      const data = await response.text()
      element.innerHTML = data
    } catch (error) {
      console.error(error)
    } finally {
      delete element.dataset.load
    }
  })
}
