import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Chip, CardActionArea } from '@mui/material';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Card className="product-card">
      <CardActionArea component={Link} to={`/product/${product.id}`}>
        <div className="card-media-container">
          <CardMedia
            component="img"
            height="200"
            image={product.imageUrl || 'https://via.placeholder.com/200x200?text=No+Image'}
            alt={product.name}
            className="product-image"
          />
        </div>
        <CardContent className="product-info">
          <Typography variant="h6" className="product-name" gutterBottom component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="product-brand">
            {product.brand}
          </Typography>
          <div className="product-details">
            <Typography variant="h6" component="div" className="product-price">
              {formatPrice(product.price)}
            </Typography>
            <Chip 
              label={product.category} 
              size="small" 
              className="category-chip"
              color="primary"
              variant="outlined"
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard; 