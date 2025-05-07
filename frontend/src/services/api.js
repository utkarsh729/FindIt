import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept responses to handle errors globally
api.interceptors.response.use(
  response => response,
  error => {
    // Handle error and show toast notification
    const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
    toast.error(errorMessage);
    return Promise.reject(error);
  }
);

export default api; 