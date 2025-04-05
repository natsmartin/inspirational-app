'use server'

const apiURL = `https://api.unsplash.com/photos/random?client_id=${process.env.ACCESS_KEY}`

export const getBackground = async () => {
  const response = await fetch(`${apiURL}`);
  return await response.json();
}