import React, { useState } from 'react';
import { Paper, InputBase, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import './SearchBar.css';

const SearchBar = ({ initialValue = '', onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <Box className="search-bar-container">
      <Paper
        component="form"
        className="search-bar"
        onSubmit={handleSubmit}
        elevation={2}
      >
        <InputBase
          className="search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          inputProps={{ 'aria-label': 'search products' }}
          fullWidth
        />
        {searchTerm && (
          <IconButton 
            aria-label="clear search" 
            onClick={handleClear}
            size="small"
            className="clear-button"
          >
            <ClearIcon />
          </IconButton>
        )}
        <IconButton 
          type="submit" 
          aria-label="search"
          className="search-button"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBar; 