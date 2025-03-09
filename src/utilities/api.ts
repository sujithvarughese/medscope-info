import axios from 'axios';

const API_KEY = import.meta.env.EXPO_PUBLIC_RAPID_API_KEY;

export const drugApi = axios.create({
  baseURL: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'drug-info-and-price-history.p.rapidapi.com'
  }
})
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

