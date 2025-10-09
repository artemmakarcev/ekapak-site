import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { "API-KEY": API_KEY },
});

export instance;