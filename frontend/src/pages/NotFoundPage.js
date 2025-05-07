import React from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <Container className="not-found-page">
      <Paper className="not-found-container">
        <Typography variant="h4" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Button 
          component={Link} 
          to="/" 
          variant="contained" 
          color="primary"
        >
          Back to Home
        </Button>
      </Paper>
    </Container>
  );
};

export default NotFoundPage; 