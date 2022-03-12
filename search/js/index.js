import SearchResult from './components/SearchResult.js'

const el = {
  search: {
    form: document.querySelector('.search-form'),
    input: document.querySelector('.search-form__input')
  }
}

el.search.input.addEventListener('input', async (event) => {
  const list = await fetch('https://api.instantwebtools.net/v1/airlines').then(res => res.json())

  new SearchResult({ $target: el.search.form, list }).render()
})