import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, isLoading, searchTerm }) => {
  if (isLoading) {
    // Show loading skeleton (would implement with react-loading-skeleton in a real app)
    return (
      <Box className="loading-container">
        <div className="loading-spinner"></div>
      </Box>
    );
  }

  if (products.length === 0) {
    return (
      <Box className="no-results">
        <Typography variant="h5" align="center">
          {searchTerm 
            ? `No products found matching "${searchTerm}"`
            : 'No products available'}
        </Typography>
      </Box>
    );
  }

  return (
    <Grid 
      container 
      spacing={3} 
      className="product-grid"
      justifyContent="center"
    >
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid; 