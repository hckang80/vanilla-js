import SearchResult from './components/SearchResult.js'
import { request } from '/modules/api.js'

const el = {
  search: {
    form: document.querySelector('.search-form'),
    input: document.querySelector('.search-form__input')
  }
}

el.search.input.addEventListener('input', async (event) => {
  const { form: $target } = el.search
  const list = event.target.value
    ? await request(`/languages?keyword=${event.target.value}`)
    : []

  new SearchResult({ $target, list }).render()
})