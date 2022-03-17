export default function SearchList ({ item = '' }) {
  const $target = document.querySelector('.selected-list')

  this.state = {
    list: []
  }

  this.setState = (state) => {
    this.state = {
      ...this.state,
      ...state
    }
    this.render()
  }

  this.addList = () => {
    const list = [...this.state.list, item]
    this.setState({ list })
  }

  this.render = () => {
    const $wrap = document.createElement('ul')
    $wrap.innerHTML = this.state.list.map((item) => `
      <li>${item}</li>
    `).join('')

    $target.appendChild($wrap)
  }
}
