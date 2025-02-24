import axios from 'axios';
import { BASE_URL } from '@env';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor (İsteği göndermeden önce)
api.interceptors.request.use(
  (config) => {
    console.log('İstek yapılıyor:', config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Cevap alındığında)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Hata:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
