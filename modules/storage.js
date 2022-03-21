export const { localStorage: storage } = window

export const getItem = (key, defaultValue) => {
  try {
    const value = storage.getItem(key)
    return value ? JSON.parse(value) : ''
  } catch {
    return ''
  }
}

export const setItem = (key, value) => {
  try {
    storage.setItem(key, JSON.stringify(value))
  } catch {
  }
}

export const removeItem = (key) => {
  try {
    storage.removeItem(key)
  } catch {
  }
}
