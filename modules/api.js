const BASE_URI = 'https://api.instantwebtools.net/v1'

export const request = async (url, options = {}) => {
  try {
    const response = await fetch(`${BASE_URI}${url}`, options)
    if (response.ok) return await response.json()
    throw new Error('HTTP REQUEST FAILED')
  } catch (error) {
    console.error(error)
  }
}
