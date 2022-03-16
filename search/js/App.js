import SearchResult from './components/SearchResult.js'
import { request } from '/modules/api.js'

export default function App () {
  let state = {
    list: [],
    selectedItemIndex: 0
  }

  const el = {
    search: {
      form: document.querySelector('.search-form'),
      input: document.querySelector('.search-form__input')
    }
  }

  this.setState = (obj) => {
    state = {
      ...state,
      ...obj
    }

    const { form: $target } = el.search
    new SearchResult({ $target, ...state })
  }

  el.search.input.addEventListener('input', async (event) => {
    const list = event.target.value
      ? await request(`/languages?keyword=${event.target.value}`)
      : []

    this.setState({ list })
  })

  el.search.form.addEventListener('submit', (event) => {
    event.preventDefault()
  })

  window.addEventListener('keyup', (event) => {
    if (!state.list.length) return
    if (event.key === 'ArrowDown') {
      state.selectedItemIndex === state.list.length && this.setState({ selectedItemIndex: 0 })
      this.setState({ selectedItemIndex: state.selectedItemIndex += 1 })
    }
    if (event.key === 'ArrowUp' && state.selectedItemIndex) {
      state.selectedItemIndex === 1 && this.setState({ selectedItemIndex: state.list.length + 1 })
      this.setState({ selectedItemIndex: state.selectedItemIndex -= 1 })
    }
  })

  window.addEventListener('click', (event) => {
    if (!event.target.dataset?.id) return
    this.setState({ selectedItemIndex: +event.target.dataset.id })
  })
}
