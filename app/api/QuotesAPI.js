'use server'

const baseURL = `https://zenquotes.io`

export const getQuote = async () => {
  const response = await fetch(`${baseURL}/api/random`)
  return await response.json()
}
