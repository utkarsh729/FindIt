import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Button, Chip, Paper, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getProductById } from '../services/productService';
import { toast } from 'react-toastify';
import './ProductDetailsPage.css';

const TOAST_ID = 'fetch-product-details-error';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const data = await getProductById(id);
        if (data) {
          setProduct(data);
        } else {
          setError('Product not found');
          if (!toast.isActive(TOAST_ID)) {
            toast.error('Product not found', { toastId: TOAST_ID });
          }
        }
      } catch (err) {
        setError('Failed to load product details');
        if (!toast.isActive(TOAST_ID)) {
          toast.error('Failed to load product details.', { toastId: TOAST_ID });
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  if (isLoading) {
    return (
      <Container className="detail-page">
        <Box className="loading-container">
          <div className="loading-spinner"></div>
        </Box>
      </Container>
    );
  }

  if (error || !product) {
    return (
      <Container className="detail-page">
        <Paper className="error-container">
          <Typography variant="h5" gutterBottom>
            {error || 'Product not found'}
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
            className="back-button"
          >
            Back to Search
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container className="detail-page">
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        className="back-button"
      >
        Back to Search
      </Button>

      <Grid container spacing={4} className="product-detail-container">
        <Grid item xs={12} md={6} className="product-image-container">
          <img
            src={product.imageUrl || 'https://via.placeholder.com/500x500?text=No+Image'}
            alt={product.name}
            className="product-detail-image"
          />
        </Grid>
        
        <Grid item xs={12} md={6} className="product-detail-info">
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          
          <Typography variant="subtitle1" className="product-brand" gutterBottom>
            <strong>Brand:</strong> {product.brand}
          </Typography>
          
          <Chip 
            label={product.category} 
            color="primary" 
            variant="outlined" 
            className="product-category"
          />
          
          <Typography variant="h5" className="product-price" gutterBottom>
            {formatPrice(product.price)}
          </Typography>
          
          <Typography variant="h6" className="description-title">
            Description:
          </Typography>
          
          <Typography variant="body1" className="product-description">
            {product.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailsPage; 