import SearchList from './components/SearchList.js'
import SearchResult from './components/SearchResult.js'
import { request } from '/modules/api.js'
import {
  getItem,
  setItem
} from '/modules/storage.js'
import { debounce } from '/composables/index.js'

export default function App () {
  let state = {
    list: [],
    selectedItemIndex: 0,
    selectedList: []
  }

  let { selectedList } = state

  const el = {
    search: {
      form: document.querySelector('.search-form'),
      input: document.querySelector('.search-form__input')
    }
  }

  const inputKeyword = async (key = '') => {
    const response = getItem(key) || await request(`/languages?keyword=${key}`)
    !getItem(key) && setItem(key, response)
    return response
  }

  this.setState = (obj) => {
    state = {
      ...state,
      ...obj
    }

    const { form: $target } = el.search
    new SearchResult({ $target, ...state })
  }

  this.addList = (item) => {
    selectedList.includes(item) &&
      selectedList.splice(selectedList.indexOf(item), 1)
    selectedList = [...selectedList, item].slice(-5)
    new SearchList({ selectedList })
  }

  el.search.input.addEventListener('input', debounce(async (event) => {
    const list = event.target.value
      ? await inputKeyword(event.target.value)
      : []

    this.setState({ list })
  }, 500))

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
    if (event.key === 'Enter' && state.selectedItemIndex) {
      this.addList(state.list[state.selectedItemIndex - 1])
    }
  })

  window.addEventListener('click', (event) => {
    if (!event.target.dataset?.id) return
    this.addList(state.list[+event.target.dataset.id - 1])
    this.setState({ selectedItemIndex: +event.target.dataset.id })
  })
}
