import axios, { AxiosInstance } from 'axios'

export const http: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  proxy: {
    protocol: 'http',
    host: 'localhost',
    port: 3000,
  },
})
