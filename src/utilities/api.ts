import axios from 'axios';
import { config } from './constants'

export const api = axios.create({
  baseURL: config.url.API_URL,
})
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(error.response)
    return Promise.reject(error);
  }
);

export const bmiApi = axios.create({
  baseURL: 'https://bmi.p.rapidapi.com/v1/bmi',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'bmi.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
})

export const openai = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`,
  }
})

