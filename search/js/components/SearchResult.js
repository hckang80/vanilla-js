export default function SearchResult ({ $target, list = [] }) {
  const CLASS_NAME = 'searched-list'

  const clearList = () => {
    const hasWrap = document.querySelector(`.${CLASS_NAME}`)
    hasWrap && hasWrap.remove()
  }

  clearList()

  this.render = () => {
    if (!list.length) return
    const $wrap = document.createElement('ul')
    $wrap.className = CLASS_NAME
    $wrap.innerHTML = list.map(item => `
      <li>${item}</li>
    `).join('')

    $target.insertAdjacentHTML('afterend', $wrap.outerHTML)
  }
}
