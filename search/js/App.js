import SearchResult from './components/SearchResult.js'
import { request } from '/modules/api.js'

export default function App () {
  let state = {
    list: []
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
    const { list } = state
    new SearchResult({ $target, list }).render()
  }

  el.search.input.addEventListener('input', async (event) => {
    const list = event.target.value
      ? await request(`/languages?keyword=${event.target.value}`)
      : []

    this.setState({ list })
  })
}
