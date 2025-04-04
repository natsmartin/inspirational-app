'use server'

const apiURL = `https://api.unsplash.com/photos/random?client_id=${process.env.ACCESS_KEY}`

export const getBackground = async (city, state) => {
  const response = await fetch(`${apiURL}&q=${city},${state}`);
  return await response.json();
}