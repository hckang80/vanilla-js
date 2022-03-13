const BASE_URI = 'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev'

export const request = async (url, options = {}) => {
  try {
    const response = await fetch(`${BASE_URI}${url}`, options)
    if (response.ok) return await response.json()
    throw new Error('HTTP REQUEST FAILED')
  } catch (error) {
    console.error(error)
  }
}
