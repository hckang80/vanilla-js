export default function SearchResult ({ $target, list = [], selectedItemIndex }) {
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
    $wrap.innerHTML = list.map((item, index) => `
      <li data-id="${index + 1}" class="${selectedItemIndex === index + 1 ? 'suggestion__item--selected' : ''}">${item}</li>
    `).join('')

    $target.insertAdjacentHTML('afterend', $wrap.outerHTML)
  }

  this.render()
}
