import SearchResult from './components/SearchResult.js'
import { request } from '/modules/api.js'

const el = {
  search: {
    form: document.querySelector('.search-form'),
    input: document.querySelector('.search-form__input')
  }
}

el.search.input.addEventListener('input', async (event) => {
  const list = await request('/airlines')

  new SearchResult({ $target: el.search.form, list }).render()
})