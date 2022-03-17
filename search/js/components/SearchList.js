export default function SearchList ({ list = [] }) {
  const $target = document.querySelector('.selected-list')
  const $wrap = $target.children[0] || document.createElement('ul')

  this.render = () => {
    $wrap.innerHTML = list.map((item) => `
      <li>${item}</li>
    `).join('')

    $target.appendChild($wrap)
  }

  this.render()
}
