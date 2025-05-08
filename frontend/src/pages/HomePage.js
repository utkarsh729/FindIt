import React, { useState, useEffect } from 'react';
import { Typography, Container, Box } from '@mui/material';
import SearchBar from '../components/SearchBar';
import ProductGrid from '../components/ProductGrid';
import { getProducts } from '../services/productService';
import { toast } from 'react-toastify';
import './HomePage.css';

const TOAST_ID = 'fetch-products-error';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Load products on initial render
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products with optional search term
  const fetchProducts = async (search = '') => {
    setIsLoading(true);
    try {
      const data = await getProducts(search);
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      if (!toast.isActive(TOAST_ID)) {
        toast.error('Failed to fetch products. Please try again later.', { toastId: TOAST_ID });
      }
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle search form submission
  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchProducts(term);
  };

  return (
    <>
      <Box className="hero-section">
        <Container maxWidth="md">
          <Typography variant="h2" className="hero-title" gutterBottom>
            Discover Amazing Products
          </Typography>
          <Typography variant="h5" className="hero-subtitle" gutterBottom>
            Find the best products from top brands with our powerful search platform
          </Typography>
          <Box className="hero-search">
            <SearchBar initialValue={searchTerm} onSearch={handleSearch} />
          </Box>
        </Container>
      </Box>
      <Container className="home-page" maxWidth="xl">
        <ProductGrid 
          products={products} 
          isLoading={isLoading} 
          searchTerm={searchTerm}
        />
      </Container>
    </>
  );
};

export default HomePage; 