import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Grid } from '@mui/material';

const Footer = () => (
  <Box sx={{ background: '#fff', borderTop: '1px solid #e2e8f0', mt: 8, py: 2 }} component="footer">
    <Container maxWidth="xl">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight={700} gutterBottom>About FindIt</Typography>
          <Typography variant="body2" color="text.secondary">
            Your premium destination for discovering amazing products from trusted brands.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight={700} gutterBottom>Quick Links</Typography>
          <Box>
            <MuiLink href="/" color="text.secondary" underline="hover" display="block">Home</MuiLink>
            <MuiLink href="#" color="text.secondary" underline="hover" display="block">Categories</MuiLink>
            <MuiLink href="#" color="text.secondary" underline="hover" display="block">About Us</MuiLink>
            <MuiLink href="/" color="text.secondary" underline="hover" display="block">Contact</MuiLink>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight={700} gutterBottom>Categories</Typography>
          <Box>
            <MuiLink href="#" color="text.secondary" underline="hover" display="block">Electronics</MuiLink>
            <MuiLink href="#" color="text.secondary" underline="hover" display="block">Fashion</MuiLink>
            <MuiLink href="#" color="text.secondary" underline="hover" display="block">Books</MuiLink>
            <MuiLink href="#" color="text.secondary" underline="hover" display="block">Sports</MuiLink>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight={700} gutterBottom>Contact Us</Typography>
          <Box>
            <MuiLink href="mailto:utkarsh.singh25167@gmail.com" color="text.secondary" underline="hover" display="block">utkarsh.singh25167@gmail.com</MuiLink>
            <MuiLink href="tel:+919120670954" color="text.secondary" underline="hover" display="block">+91 9120670954</MuiLink>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer; 