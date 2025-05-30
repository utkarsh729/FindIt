package com.FindIt.services;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FindIt.modals.Product;
import com.FindIt.repositories.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> searchProducts(String search) {
        try {
            if (search == null || search.trim().isEmpty()) {
                return productRepository.findAll();
            }
            return productRepository.findByNameContainingIgnoreCaseOrBrandContainingIgnoreCase(search, search);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception for debugging
            throw e;
        }
    }

    public Product getProductById(UUID id) {
        return productRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Id not Found"));
    }
}
