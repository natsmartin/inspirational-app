'use server'

const apiURL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_APIKEY}&units=metric`

export const getWeather = async (city, state) => {
  const response = await fetch(`${apiURL}&q=${city},${state}`)
  return await response.json();
}
