import api from './api';
import { toast } from 'react-toastify';

/**
 * Get all products, optionally filtered by search term
 * @param {string} search - Optional search term
 * @returns {Promise<Array>} - Array of products
 */
export const getProducts = async (search = '') => {
  try {
    const response = await api.get(`/products${search ? `?search=${search}` : ''}`);
    return response.data;
  } catch (error) {
    toast.error('Failed to fetch products. Please try again later.');
    console.error('Error fetching products:', error);
    return [];
  }
};

/**
 * Get a single product by ID
 * @param {string} id - Product UUID
 * @returns {Promise<Object|null>} - Product object or null if not found
 */
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    toast.error('Failed to fetch product details. Please try again later.');
    console.error('Error fetching product:', error);
    return null;
  }
}; 