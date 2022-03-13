export default function SearchResult ({ $target, list = [] }) {
  const CLASS_NAME = 'searched-list'
  const hasWrap = document.querySelector(`.${CLASS_NAME}`)
  hasWrap && hasWrap.remove()

  const $wrap = document.createElement('ul')
  $wrap.className = CLASS_NAME
  $wrap.innerHTML = list.map(item => `
    <li>${item}</li>
  `).join('')

  this.render = () => {
    $target.insertAdjacentHTML('afterend', $wrap.outerHTML)
  }
}
