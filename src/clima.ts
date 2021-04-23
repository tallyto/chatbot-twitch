import axios from 'axios'

interface climaResponse {
  message: string
}

export default async function clima(city: string): Promise<climaResponse> {
  const API_KEY = process.env.API_KEY
  const url = `https://api.hgbrasil.com/weather?key=${API_KEY}&&city_name=${encodeURI(city)}`
  try {
    const result = await axios.get(url)
    const { results: { temp, description, humidity, city_name } } = result.data
    return { message: `${city_name}, ${description}, temperatura: ${temp}, humidade: ${humidity}` }
  } catch (error) {
    return { message: 'parece que você digitou uma cidade inválida' }
  }
}