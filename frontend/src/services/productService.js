import axios from 'axios';
import { toast } from 'react-toastify';

// Using direct Axios instead of our api.js module to fix the baseURL issue
// Our backend endpoints start at the root, not at /api

/**
 * Get all products, optionally filtered by search term
 * @param {string} search - Optional search term
 * @returns {Promise<Array>} - Array of products
 */
export const getProducts = async (search = '') => {
  try {
    const response = await axios.get(`/products${search ? `?search=${search}` : ''}`);
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
    const response = await axios.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    toast.error('Failed to fetch product details. Please try again later.');
    console.error('Error fetching product:', error);
    return null;
  }
}; 