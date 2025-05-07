import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="fixed" color="inherit" elevation={2} className="header">
      <Container maxWidth="xl">
        <Toolbar className="header-toolbar">
          <Box className="header-logo">
            <Link to="/" className="logo-link">
              <span className="logo-icon">🔎</span>
              <span className="logo-text">FindIt</span>
            </Link>
          </Box>
          <Box className="header-nav">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="#" className="nav-link">Categories</Link>
            <Link to="#" className="nav-link">About</Link>
            <Link to="#" className="nav-link">Contact</Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 